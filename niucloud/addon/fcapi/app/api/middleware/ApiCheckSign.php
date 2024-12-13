<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\fcapi\app\api\middleware;

use addon\fcos\app\model\site\SiteMember;
use addon\fcos\app\service\admin\site\SiteAuthService;
use app\Request;
use app\service\admin\auth\AuthService;
use app\service\admin\auth\LoginService;
use Closure;
use core\exception\AuthException;

/**
 * admin用户登录token验证
 * Class AdminCheckToken
 * @package app\adminapi\middleware
 */
class ApiCheckSign
{
    public function handle(Request $request, Closure $next, bool $is_home = false)
    {

        $data = $request->params([
            [ "api_key", "" ],
            [ "EBusinessID", "" ],
            [ "RequestType", "" ],
            [ "RequestData", "" ],
            [ "DataType", 2 ],
            [ "DataSign", "" ]

        ]);

        $auth=(new SiteAuthService())->getByAppKey($data["EBusinessID"]);
        if(empty($auth)){
            throw new AuthException('EBusinessID不存在');
        }
        $requestData=urldecode($data["RequestData"]);


        $verifySignData=(new SiteAuthService())->verifySign($requestData,$auth["api_secret"]);


        if($data["DataSign"]!==$verifySignData){
             throw new AuthException('数据签名错误');

        }

        $res=(new SiteMember())->where([['site_id', '=', $auth["site_id"]]])->find();
        if(empty($res)){
            throw new AuthException('系统错误，请联系管理员');
        }
        $request->memberId($res[ 'member_id' ]);
        $request->siteId($auth["site_id"]);

        return $next($request);
    }
}
