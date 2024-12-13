<?php

namespace addon\fcos\app\service\admin\site;
use addon\fcos\app\model\site\LinePrice;
use core\base\BaseAdminService;

/**
 *  线路价格
 * Class MemberAccountService
 * @package app\service\admin\member
 */
class LinePriceService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new LinePrice();
    }

    public function add(array $data)
    {
        $import_no=(new LinePriceLogService())->add();
        foreach ($data["line_price"] as $k => $item){
            $v=[];
            $v["sender_province"]=$item['senderProvince'];
            $v["receive_province"]=$item['receiveProvince'];
            $v["first_weight"]=$item['firstWeight'];
            $v["continuous_weight"]=$item['continuousWeight'];

            $v['site_id'] = $data["site_id"];
            $v['express_no'] = $data["express_no"];
            $v['delivery'] = $data["delivery"];
            $v['import_no']=$import_no;
            $v['create_time'] = time();
            $res = $this->model->create($v);
        }


        return 1;
    }


}
