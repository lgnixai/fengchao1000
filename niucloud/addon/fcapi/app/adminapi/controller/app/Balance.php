<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\fcapi\app\adminapi\controller\app;

use addon\fcapi\app\dict\site\SiteDict;
use addon\fcapi\app\service\admin\MemberAccountService;
use addon\fcapi\app\service\admin\MemberService;
use addon\fcos\app\model\site\SiteMember;
use app\model\member\Member;
use core\base\BaseAdminController;

/**
 * 物流公司控制器
 * Class Company
 * @package addon\fcos\app\adminapi\controller\delivery
 */
class Balance extends BaseAdminController
{

     /**
     * 余额流水
     * @return Response
     */
    public function BalanceBySiteList()
    {


        $data = $this->request->params([
            [ 'member_id', '' ],
            [ 'from_type', '' ],
            [ 'create_time', [] ],
            [ 'keywords', '' ],
        ]);
        $data[ 'account_type' ] = 'balance';

        return success(( new MemberAccountService() )->getPage($data));
    }



    public function BalanceSum()
    {
        //$field = 'point, point_get, balance, balance_get, growth, growth_get, money, money_get, commission, commission_get, commission_cash_outing';


        $info=( new MemberService() )->getInfo();
        return success($info);
    }

}
