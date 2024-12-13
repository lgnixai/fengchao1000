<?php

namespace addon\fcos\app\service\core\delivery;

use Exception;
use think\facade\Log;

/**
 * 快递鸟快递通道
 */
class Kdniao extends BaseDelivery
{
    protected $config;

    /**
     * @param array $config
     * @return void
     */
    protected function initialize(array $config = [])
    {
        parent::initialize($config);
        $this->config = $config;
    }

    public function preOrder($params)
    {
        $data = [

            "TransportType" => 1,
            "ShipperType" => 5, // 随机快递类型

            "ExpType" => 1, // 快递类型
            "PayType" => 3, // 支付方式
            "Receiver" => [
                "ProvinceName" => $params['receiveProvince'],
                "CityName" => $params['receiveCity'],
                "ExpAreaName" => $params['receiveDistrict'],
                "Address" => $params['receiveAddress'],
                "Name" => $params['receiveName'],
                "Mobile" => $params['receiveMobile'],
                "Tel" => $params['receiveTel'],
            ],
            "Sender" => [
                "ProvinceName" => $params['senderProvince'],
                "CityName" => $params['senderCity'],
                "ExpAreaName" => $params['senderDistrict'],
                "Address" => $params['senderAddress'],
                "Name" => $params['senderName'],
                "Mobile" => $params['senderMobile'],
                "Tel" => $params['senderTel'],
            ],
            "Weight" => $params['weight'],
            "InsureAmount" => $params["guaranteeValueAmount"]

        ];


        $resInfo = $this->execute('1815', $data);


        if ($resInfo['ResultCode'] != 100) throw new Exception('获取运单报价失败：kdniao_error--' . $resInfo['Reason']);
        $callbackData = [];
        $resInfo = $resInfo['Data'];
        foreach ($resInfo as $k => $v) {

            $newdata = [
                "channelId" => 1,
                "channelName" => $v['shipperCode'],
                "preOrderFee" => $v['totalFee'],
                "preDeliveryFee" => $v['cost'],
                "preBjFee" => $v['premiumFee']??0,
                "deliveryType" => 1,
                "limitWeight" => "",
                "lightGoods" => "",
                "calcFeeType" => 'profit',
                "logo" => "",
                "price" => [
                    [
                        "add" => $v['continuousWeightPrice'],
                        "end" => 0,
                        "first" => $v['firstWeightAmount'],
                        "start" => 1
                    ]
                ],
                "originalPrice" => [
                    [
                        "add" => 0,
                        "end" => 0,
                        "first" => 0,
                        "start" => 1
                    ]
                ],
                "originalFee" => 0,
                "isBest" => null,
                "bjRuleStr" => "",
                "onlinePay" => "Y",
                "rebateRatio" => null,
                "expReturn" => null,
                "deliveryBusiness" => "no"
            ];




            $callbackData[] = $newdata;
        }

        return $callbackData;
    }

    public function sendOrder($params)
    {

        $data = [
            "ShipperCode" => $params['deliveryType'], // 快递公司编码
            "TransportType" => 1,
            "ShipperType" => 5, // 随机快递类型
            "OrderCode" => create_no("kdn", "order"), // 商家订单编号
            "ExpType" => 1, // 快递类型
            "PayType" => 3, // 支付方式
            "Receiver" => [
                "ProvinceName" => $params['receiveProvince'],
                "CityName" => $params['receiveCity'],
                "ExpAreaName" => $params['receiveDistrict'],
                "Address" => $params['receiveAddress'],
                "Name" => $params['receiveName'],
                "Mobile" => $params['receiveMobile'],
                "Tel" => $params['receiveTel'],
            ],
            "Sender" => [
                "ProvinceName" => $params['senderProvince'],
                "CityName" => $params['senderCity'],
                "ExpAreaName" => $params['senderDistrict'],
                "Address" => $params['senderAddress'],
                "Name" => $params['senderName'],
                "Mobile" => $params['senderMobile'],
                "Tel" => $params['senderTel'],
            ],
            "Weight" => $params['weight'],
            "Quantity" => 1, // 数量
            "Remark" => $params['remark'] ?? '',
            "Commodity" => [
                [
                    "GoodsName" => $params['goods'],
                    "GoodsQuantity" => $params['packageCount'],
                    "GoodsPrice" => 100,
                ]
            ],
            "Volume" => $params['vloumLong'] * $params['vloumWidth'] * $params['vloumHeight'],

        ];


        $resInfo = $this->execute('1801', $data);
        if ($resInfo['ResultCode'] != 100) {
            Log::write('提交运单失败：kdniao_error--' . $resInfo['Reason']);
            return ['type' => 'error', 'msg' => $resInfo['Reason'] ?? '三方平台下单失败，请重新下单！'];
        }

        $res = [
            'orderNo' => $resInfo['Order']['KDNOrderCode'],
            'deliveryId' => "",
        ];
        return $res;
    }

    public function callbackOrder($data)
    {

    }

    public function cancelOrder($data)
    {
        $params = [
            "OrderCode" => "kdn20241211order509742696071168",
        ];
        $resInfo = $this->execute('1802', $params);
        $result=[];
        if ($resInfo['ResultCode'] == 100) {
            $result['code'] = 200;
            $result['msg'] = $resInfo['Reason'];
            $result['data'] = [];
        }else{
            $result['code'] = 100;
            $result['msg'] = $resInfo['Reason'];
            $result['data'] = [];
        }

        return $resInfo ?? '';
    }

    public function deliveryTrance($params)
    {
        $data = [
            "waybill" => $params['delivery_id'] ?? 0,
            "traceFormat" => 'obj'
        ];
        $resInfo = $this->execute('QUERY_TRANCE', $data);
        if ($resInfo['code'] != 1) {
            throw new Exception($resInfo['message']);
        }
        $tranceData = [];
        if ($resInfo['result'] != []) {
            foreach ($resInfo['result'] as $k => $v) {
                if (isset($v['comments'])) {
                    $tranceData[] = [
                        'time' => '',
                        'desc' => $v['comments'] ?? '',
                    ];
                } else {
                    $tranceData[] = [
                        'time' => $v['time'] ?? '',
                        'desc' => $v['desc'] ?? ''
                    ];
                }
            }
        }

        return $tranceData;
    }


    public function getBalance()
    {
        $data = [
            "appid" => $this->config['appid']
        ];
        $resInfo = $this->execute('QUERY_BALANCE', $data);
        if ($resInfo['code'] != 200) throw new Exception($resInfo['message']);
        return $resInfo['result']['keyong'];
    }


    public function execute1($serviceCode, $requestParams = [])
    {
        $timestamp = (string)intval(microtime(1) * 1000);
        //沙箱环境
        //$url = 'https://api.yunyangwl.com/api/sandbox/openService';
        //正式环境
        $url = 'https://api.yunyangwl.com/api/wuliu/openService';
        $appid = $this->config['appid'];
        $appkey = $this->config['appkey'];
        $requestId = md5(create_no() . $timestamp);
        $data = $appid . $requestId . $timestamp . $appkey;
        $sign = md5($data);
        $body = [
            "serviceCode" => $serviceCode,
            "timeStamp" => $timestamp,
            "requestId" => $requestId,
            "appid" => $appid,
            "sign" => $sign,
            "content" => $requestParams
        ];
        $header = ["Content-Type: application/json;charset=UTF-8"];
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($body, JSON_UNESCAPED_UNICODE));
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
        $result = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
            throw new Exception($err);
        } else {
            return json_decode($result, true);
        }
    }

    public function execute($serviceCode, $requestParams = [])
    {


       //var_dump($requestParams);

        $appid = $this->config['appid'];
        $appkey = $this->config['appkey'];
        $ReqURL = "http://183.62.170.46:8081/api/dist";

        $requestData=json_encode($requestParams,JSON_UNESCAPED_UNICODE);
        $datas = array(
            'EBusinessID' => $appid,
            'RequestType' => $serviceCode,
            'RequestData' => urlencode($requestData),
            'DataType' => '2',
        );
        $datas['DataSign'] = $this->encrypt($requestData, $appkey);

        //以form表单形式提交post请求，post请求体中包含了应用级参数和系统级参数
        $result = $this->sendPost($ReqURL, $datas);
        Log::write('===快递鸟返回结果===' . $result);

        $result = json_decode($result, true);


        return $result;
//        $timestamp = (string)intval(microtime(1) * 1000);
//        //沙箱环境
//        //$url = 'https://api.yunyangwl.com/api/sandbox/openService';
//        //正式环境
//        $url = 'https://api.yunyangwl.com/api/wuliu/openService';

//        $requestId = md5(create_no() . $timestamp);
//        $data = $appid . $requestId . $timestamp . $appkey;
//        $sign = md5($data);
//        $body = [
//            "serviceCode" => $serviceCode,
//            "timeStamp" => $timestamp,
//            "requestId" => $requestId,
//            "appid" => $appid,
//            "sign" => $sign,
//            "content" => $requestParams
//        ];
//        $header = ["Content-Type: application/json;charset=UTF-8"];
//        $curl = curl_init();
//        curl_setopt($curl, CURLOPT_URL, $url);
//        curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
//        curl_setopt($curl, CURLOPT_POST, 1);
//        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($body, JSON_UNESCAPED_UNICODE));
//        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
//        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
//        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
//        $result = curl_exec($curl);
//        $err = curl_error($curl);
//        curl_close($curl);
//        if ($err) {
//            throw new Exception($err);
//        } else {
//            return json_decode($result, true);
//        }
    }

    public function sendPost($url, $datas)
    {
        $postdata = http_build_query($datas);
        $options = array(
            'http' => array(
                'method' => 'POST',
                'header' => 'Content-type:application/x-www-form-urlencoded',
                'content' => $postdata,
                'timeout' => 15 * 60 // 超时时间（单位:s）
            )
        );
        $context = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        return $result;
    }

    /**
     * 电商Sign签名生成
     * @param data 内容
     * @param api_secret api_secret
     * @return DataSign签名
     */
    public function encrypt($data, $api_secret)
    {
        return urlencode(base64_encode(md5($data . $api_secret)));
    }

}