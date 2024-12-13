import { redirect, isWeixinBrowser, urlDeconstruction } from '@/utils/common'
import {
    weappLogin,
    updateWeappOpenid,
    updateWechatOpenid,
    wechatUser,
    wechatUserLogin
} from '@/app/api/auth'
import { getWechatAuthCode } from '@/app/api/system'
import useMemberStore from '@/stores/member'
import useConfigStore from '@/stores/config'
import useSystemStore from '@/stores/system'

export function useLogin() {
    /**
     * 设置登录返回页
     */
    const setLoginBack = (data: redirectOptions) => {
        uni.setStorage({ key: 'loginBack', data })
        setTimeout(() => {
            const config = useConfigStore()
            const systemStore = useSystemStore()

            // #ifdef MP-WEIXIN
            if (!uni.getStorageSync('autoLoginLock') && uni.getStorageSync('openid') && config.login.is_bind_mobile) {
                uni.setStorageSync('isbindmobile', true)
                return
            }
            // #endif

            // #ifdef H5
            if (!uni.getStorageSync('autoLoginLock') && isWeixinBrowser() && uni.getStorageSync('openid') && config.login.is_bind_mobile) {
                uni.setStorageSync('isbindmobile', true)
                return
            }
            // #endif

            // 如果只开启了账号密码登录，就不需要跳转到登录中间页了，直接进入普通账号密码登录页面

            // #ifdef MP-WEIXIN
            if (config.login.is_username && !config.login.is_mobile && !config.login.is_auth_register) {
                redirect({ url: '/app/pages/auth/login', param: { type: 'username' }, mode: 'redirectTo' })
            } else if (systemStore.initStatus == 'finish' && !config.login.is_username && !config.login.is_mobile && !config.login.is_auth_register) {
                uni.showToast({ title: '商家未开启登录注册', icon: 'none' })
            } else {
                redirect({ url: '/app/pages/auth/index', mode: 'redirectTo' })
            }
            // #endif

            // #ifdef H5
            if (isWeixinBrowser()) {
                // 微信浏览器
                if (config.login.is_username && !config.login.is_mobile && !config.login.is_auth_register) {
                    redirect({ url: '/app/pages/auth/login', param: { type: 'username' }, mode: 'redirectTo' })
                } else if (systemStore.initStatus == 'finish' && !config.login.is_username && !config.login.is_mobile && !config.login.is_auth_register) {
                    uni.showToast({ title: '商家未开启登录注册', icon: 'none' })
                } else {
                    redirect({ url: '/app/pages/auth/index', mode: 'redirectTo' })
                }
            } else {
                // 普通浏览器
                if (config.login.is_username && !config.login.is_mobile) {
                    redirect({ url: '/app/pages/auth/login', param: { type: 'username' }, mode: 'redirectTo' })
                } else if (systemStore.initStatus == 'finish' && !config.login.is_username && !config.login.is_mobile) {
                    uni.showToast({ title: '商家未开启登录注册', icon: 'none' })
                } else {
                    redirect({ url: '/app/pages/auth/index', mode: 'redirectTo' })
                }
            }
            // #endif
        })
    }
    /**
     * 执行登录后跳转
     */
    const handleLoginBack = () => {
        uni.removeStorageSync('autoLoginLock')
        uni.getStorage({
            key: 'loginBack',
            success: (res: any) => {
                res ? redirect(
                    {
                        ...res.data,
                        mode: 'redirectTo'
                    }
                ) : redirect({ url: '/app/pages/index/index', mode: 'switchTab' })
            },
            fail: (res) => {
                redirect({ url: '/app/pages/index/index', mode: 'switchTab' })
            }
        })
    }

    /**
     * 授权登录
     * @param params { code, backFlag, successCallback }
     */
    const authLogin = (params: any) => {
        let obj: any = {
            code: params.code
        };

        // #ifdef MP-WEIXIN
        uni.getStorageSync('pid') && (Object.assign(obj, { pid: uni.getStorageSync('pid') }))
        weappLogin(obj).then((res: any) => {
            if (res.data.token) {
                useMemberStore().setToken(res.data.token, () => {
                    const config = useConfigStore()
                    const memberInfo: any = useMemberStore().info
                    if (memberInfo) {
                        memberInfo.weapp_openid && uni.setStorageSync('openid', memberInfo.weapp_openid)
                        memberInfo.mobile && uni.setStorageSync('wap_member_mobile', memberInfo.mobile) // 存储会员手机号，防止重复请求微信获取手机号接口
                    }

                    // 开启绑定手机号标识
                    if (uni.getStorageSync('isbindmobile')) {
                        uni.removeStorageSync('isbindmobile');
                    }

                    if (config.login.is_bind_mobile && memberInfo && !memberInfo.mobile) {
                        uni.setStorageSync('isbindmobile', true)
                    }

                    if (params.successCallback) params.successCallback(res.data)

                    if (params.backFlag) handleLoginBack() // 一键登录返回
                })
            } else {
                // 目前业务不会执行到这里
                uni.setStorageSync('openid', res.data.openid)
                uni.setStorageSync('unionid', res.data.unionid)
            }
        }).catch((err) => {
            uni.showToast({ title: err.msg, icon: 'none' })
            if (params.successCallback) params.successCallback()
        })
        // #endif

        // #ifdef H5
        uni.getStorageSync('pid') && (Object.assign(obj, { pid: uni.getStorageSync('pid') }))
        wechatUser(obj).then((user_res: any) => {
            if (user_res.data) {
                wechatUserLogin(user_res.data).then((res: any) => {
                    if (res.data.token) {
                        useMemberStore().setToken(res.data.token, () => {
                            const config = useConfigStore()
                            const memberInfo = useMemberStore().info
                            memberInfo && memberInfo.wx_openid && uni.setStorageSync('openid', memberInfo.wx_openid)
                            // 开启绑定手机号标识
                            if (uni.getStorageSync('isbindmobile')) {
                                uni.removeStorageSync('isbindmobile');
                            }
                            if (config.login.is_bind_mobile && memberInfo && !memberInfo.mobile) {
                                uni.setStorageSync('isbindmobile', true)
                            }
                        })
                    } else {
                        // 目前业务不会执行到这里
                        uni.setStorageSync('openid', res.data.openid)
                        uni.setStorageSync('unionid', res.data.unionid)
                    }
                })
            }
        }).catch((err) => {
            if (err.msg == -1) {
                getAuthCode({ scopes: 'snsapi_userinfo' })
            } else {
                uni.showToast({ title: err.msg, icon: 'none' })
            }
        })
        // #endif
    }
    /**
     * 登录普通账号后修改openid
     * @param code
     * @param callback
     */
    const updateOpenid = (code: string | null, callback: any = null) => {
        let obj: any = {
            code
        };

        // #ifdef MP-WEIXIN
        updateWeappOpenid(obj).then((res) => {
            useMemberStore().getMemberInfo(() => {
                const memberInfo = useMemberStore().info
                memberInfo && memberInfo.weapp_openid && uni.setStorageSync('openid', memberInfo.weapp_openid)
            })
        })
        // #endif

        // #ifdef H5
        updateWechatOpenid(obj).then((res) => {
            useMemberStore().getMemberInfo(() => {
                const memberInfo = useMemberStore().info
                memberInfo && memberInfo.wx_openid && uni.setStorageSync('openid', memberInfo.wx_openid)
                if (callback) callback();
            })
        })
        // #endif
    }
    /**
     * 获取授权码
     * @param params { scopes, updateFlag, backFlag, successCallback }
     */
    const getAuthCode = (params: any = {}) => {
        params.scopes = params.scopes || 'snsapi_base'; // 公众号用

        // 微信小程序用
        params.updateFlag = params.updateFlag || false; // updateFlag：更新oppenid
        params.backFlag = params.backFlag || false; // backFlag 控制一键登录返回
        params.successCallback = params.successCallback || null;

        // #ifdef MP-WEIXIN
        wx.login({
            success(res: any) {
                if (res.code) {
                    params.updateFlag ? updateOpenid(res.code) : authLogin({
                        code: res.code,
                        backFlag: params.backFlag,
                        successCallback: params.successCallback
                    })
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        })
        // #endif

        // #ifdef H5

        let url = `${ location.origin }${ location.pathname }`

        // 如果当前在登录中间页，那么要跳转到首页
        if (url.indexOf('app/pages/auth/index') != -1) {
            url = url.replace('app/pages/auth/index', 'app/pages/index/index')
        } else {
            let query: any = urlDeconstruction(location.href).query
            query.code && (delete query.code)
            Object.keys(query).length && (url += uni.$u.queryParams(query))
        }

        getWechatAuthCode({
            url,
            scopes: params.scopes
        }).then((res: any) => {
            uni.setStorageSync('wechat_login_back', true) // 微信公众号手动授权登录回调标识
            location.href = res.data.url
        })

        // #endif
    }

    return {
        setLoginBack,
        handleLoginBack,
        authLogin,
        updateOpenid,
        getAuthCode
    }
}