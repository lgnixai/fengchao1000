<?php
// +----------------------------------------------------------------------
// | Author: TK
// +----------------------------------------------------------------------
namespace addon\fcos\app\listener;
use addon\fcos\app\model\site\SiteMember;
use addon\fcos\app\service\admin\site\SiteService;
use app\model\site\Site;
use app\service\admin\site\SiteUserService;
use app\service\core\poster\CorePosterService;
use think\facade\Log;

/**
 * 会员创建之后
 */
class MemberRegisterListener
{
    public function handle($params = [])
    {






        $data["site_name"]=$params["mobile"]."(".$params["nickname"].")";
        $data["uid"]=0;
        $data["expire_time"]="2030-01-11T07:41:33.237Z";
        $data["group_id"]=2;
        $data["username"]=$params["mobile"];
        $data["password"]=substr($params["mobile"], -6);
        $data["head_img"]="";
        $data["status"]=1;
        $data["real_name"]=$params["nickname"];

        $group['group_id']=2;
        $group['num']=1;
        $group['month']=48;
        $data["create_site_limit"]=[$group];
        $data["group_ids"]=[2];

        $site_id = (new \app\service\admin\site\SiteService())->add($data);

        //$site = (new Site())->where([ ['site_id', '=', $site_id] ])->find();
        $site["site_id"]=$site_id;
        $site["member_id"]=$params["member_id"];
        $id= (new SiteMember())->create($site);
        Log::write("会员注册成功，site_id:".$site_id);
    }
}
