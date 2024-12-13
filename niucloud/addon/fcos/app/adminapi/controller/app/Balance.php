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

namespace addon\fcos\app\adminapi\controller\app;

use addon\fcos\app\adminapi\controller\site\Response;
use addon\fcos\app\service\admin\site\BalanceService;
use addon\fcos\app\service\admin\site\SiteService;
use core\base\BaseAdminController;
use addon\fcos\app\service\admin\delivery\CompanyService;
use addon\fcos\app\service\core\delivery\CoreCompanyService;


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
    public function siteBalanceList()
    {
        $data = $this->request->params([
            [ 'member_id', '' ],
            [ 'from_type', '' ],
            [ 'create_time', [] ],
            [ 'keywords', '' ],
        ]);
        $data[ 'account_type' ] = 'balance';
        return success(( new SiteService() )->getPage($data));
    }

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
        return success(( new SiteService() )->getBySitePage($data));
    }

    /**
     * 余额账户调整
     */
    public function adjustBalance()
    {
        $data = $this->request->params([
            [ 'site_id', '' ],
            [ 'account_data', 0 ],
            [ 'memo', '' ],

        ]);

        $res = ( new SiteService() )->adjustBalance($data);
        return success('SUCCESS', [ 'id' => $res ]);
    }

    public function BalanceSum()
    {

        return success(( new BalanceService() )->getInfo());
    }

}
