<?php
// +----------------------------------------------------------------------
// | Author: TK
// +----------------------------------------------------------------------
namespace addon\fcos\app\listener;
use addon\fcos\app\service\admin\site\SiteService;
use app\service\core\poster\CorePosterService;
use think\facade\Log;

/**
 * 站点创建之后
 */
class AddSiteAfterListener
{
    public function handle($params = [])
    {
        if (in_array('fcos', $params[ 'main_app' ])) {

//            $site_id = $params[ 'site_id' ];
//            request()->siteId($site_id);
//
//
//            // 初始化余额
//            $balance = new SiteService();
//            $balance->initBalance($site_id);
//
//            $poster = new CorePosterService();
//            // 创建默认海报
//            $poster_template = $poster->getTemplateList('fcos', 'fcos_poster')[ 0 ];
//            $poster->add($site_id, 'fcos', [
//                'name' => $poster_template[ 'name' ],
//                'type' => $poster_template[ 'type' ],
//                'value' => $poster_template[ 'data' ],
//                'status' => 1,
//                'is_default' => 1
//            ]);

            return true;
        }
    }
}
