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

namespace addon\fcapi\app\adminapi\controller\sandbox;


use core\base\BaseApiController;
use Faker\Provider\zh_CN\Company;
use think\Response;
use Faker\Factory;


class Fake extends BaseApiController
{

    /**
     * 节口列表
     * @param int $id
     * @return Response
     */
    public function list()
    {
        $list = [];
        $list = [
            '1801' => '创建订单接口',
            '1802' => '订单取消接口',
            '1804' => '订单信息查询接口',
            '1815' => '预估运费接口',
            '1816' => '订单状态查询接口',

        ];

        return success($list);
    }

    public function fake(int $site_id, int $id)
    {


        $functionName = "Fake_$id"; // 拼接函数名
        if (method_exists($this, $functionName)) { // 检查方法是否存在
            return $this->$functionName($site_id); // 使用 $this 调用类中的方法
        } else {
            return "方法 $functionName 不存在";
        }


    }

    public function Fake_1801($site_id)
    {

        $mobile = preg_replace_callback(
            "/\\%/u",
            function () {
                return random_int(1, 9); // 随机生成 1-9 的数字替代 `%`
            },
            "1%8986048%%"
        );

        // 创建 Faker 实例
        $faker = Factory::create('zh_CN'); // 使用中文

        // 构造假数据
        $data = [
            "TransportType"=>1,
            "ShipperType" => 5, // 随机快递类型
            "ShipperCode" => $faker->randomElement(["JD", "STO", "SF", "YTO"]), // 快递公司编码
            "OrderCode" => $faker->uuid, // 商家订单编号
            "ExpType" => $faker->numberBetween(1, 5), // 快递类型
            "PayType" => 3, // 支付方式

            "Receiver" => [
                "ProvinceName" => "广东省", // 固定为广东省
                "CityName" => $faker->randomElement(["广州市", "深圳市", "东莞市", "佛山市"]),
                "ExpAreaName" => $faker->randomElement(["天河区", "海珠区", "福田区", "南山区"]),
                "Address" => $faker->streetName,
                "Name" => $faker->name,
                "Mobile" => $mobile,
            ],
            "Sender" => [

                "ProvinceName" => "河南省", // 固定为河南省
                "CityName" => $faker->randomElement(["郑州市", "洛阳市", "开封市", "南阳市"]),
                "ExpAreaName" => $faker->randomElement(["中原区", "二七区", "管城区", "惠济区"]),
                "Address" => $faker->streetName,
                "Name" => $faker->name,
                "Mobile" => $mobile,
            ],
            "Weight" => $faker->randomFloat(1, 0.5, 5.0), // 包裹重量 (0.5 ~ 5.0kg)
            "Quantity" => 1, // 数量
            "Remark" => "", // 备注 (可选)
            "Commodity" => [
                [
                    "GoodsName" => $faker->randomElement(["衣服", "电子产品", "食品", "酒水", "书籍"]),
                    "GoodsQuantity" => $faker->numberBetween(1, 5),
                    "GoodsPrice" => $faker->randomFloat(2, 10, 1000), // 价格范围 10~1000
                ]
            ]
        ];

        // 返回 JSON 数据
        return success($data);
    }

    public function Fake_1802($site_id)
    {
        $mobile = preg_replace_callback(
            "/\\%/u",
            function () {
                return random_int(1, 9); // 随机生成 1-9 的数字替代 `%`
            },
            "1%8986048%%"
        );

        // 创建 Faker 实例
        $faker = Factory::create('zh_CN'); // 使用中文
        $orders = (new OrderLogService())->getOrderLogBySiteId($site_id);
        $order_code = "";
        if (empty($orders)) {

        } else {
            $order_code = $orders[array_rand($orders)]['request_data']['OrderCode'];
        }
        // 构造假数据
        $data = [
            "ShipperCode" => "STO", // 随机快递类型
            "OrderCode" => $order_code,
            "LogisticCode" => "",
            "CancelType" => 1,
            "CancelMsg" => "预约信息有误",
        ];

        // 返回 JSON 数据
        return success($data);

    }

    // 订单信息查询接口
    public function Fake_1804($site_id)
    {
        $mobile = preg_replace_callback(
            "/\\%/u",
            function () {
                return random_int(1, 9); // 随机生成 1-9 的数字替代 `%`
            },
            "1%8986048%%"
        );

        // 创建 Faker 实例
        $faker = Factory::create('zh_CN'); // 使用中文
        $orders = (new OrderLogService())->getOrderLogBySiteId($site_id);
        $order_code = "";
        if (empty($orders)) {

        } else {
            $order_code = $orders[array_rand($orders)]['request_data']['OrderCode'];
        }
        // 构造假数据
        $data = [

            "OrderCode" => $order_code,

        ];

        // 返回 JSON 数据
        return success($data);

    }

    /**
     * 超区检验
     */
    public function Fake_1814($site_id)
    {

        $mobile = preg_replace_callback(
            "/\\%/u",
            function () {
                return random_int(1, 9); // 随机生成 1-9 的数字替代 `%`
            },
            "1%8986048%%"
        );

        // 创建 Faker 实例
        $faker = Factory::create('zh_CN'); // 使用中文

        // 构造假数据
        $data = [
            "ShipperType" => 5, // 随机快递类型

            "Receiver" => [
                "ProvinceName" => "广东省", // 固定为广东省
                "CityName" => $faker->randomElement(["广州市", "深圳市", "东莞市", "佛山市"]),
                "ExpAreaName" => $faker->randomElement(["天河区", "海珠区", "福田区", "南山区"]),
                "Address" => $faker->streetName,

            ],
            "Sender" => [

                "ProvinceName" => "河南省", // 固定为河南省
                "CityName" => $faker->randomElement(["郑州市", "洛阳市", "开封市", "南阳市"]),
                "ExpAreaName" => $faker->randomElement(["中原区", "二七区", "管城区", "惠济区"]),
                "Address" => $faker->streetName,

            ]

        ];

        // 返回 JSON 数据
        return success($data);
    }

    /**
     * 预估运费接口
     * @return \think\response\Json
     * @throws \Random\RandomException
     */

    public function Fake_1815($site_id)
    {


        // 创建 Faker 实例
        $faker = Factory::create('zh_CN'); // 使用中文

        // 构造假数据
        $data = [
            "TransportType"=>1,
            "ShipperType" => 5, // 随机快递类型
            "Weight" => $faker->numberBetween(1, 5), // 随机快递类型

            "Receiver" => [
                "ProvinceName" => "广东省", // 固定为广东省
                "CityName" => $faker->randomElement(["广州市", "深圳市", "东莞市", "佛山市"]),
                "ExpAreaName" => $faker->randomElement(["天河区", "海珠区", "福田区", "南山区"]),

            ],
            "Sender" => [

                "ProvinceName" => "河南省", // 固定为河南省
                "CityName" => $faker->randomElement(["郑州市", "洛阳市", "开封市", "南阳市"]),
                "ExpAreaName" => $faker->randomElement(["中原区", "二七区", "管城区", "惠济区"]),

            ]

        ];

        // 返回 JSON 数据
        return success($data);
    }

    //订单状态查询接口
    public function Fake_1816($site_id)
    {


        // 创建 Faker 实例
        $faker = Factory::create('zh_CN'); // 使用中文
        $orders = (new OrderLogService())->getOrderLogBySiteId($site_id);

        $order_code = "";
        if (empty($orders)) {

        } else {
            $order_code = $orders[array_rand($orders)]['response_data']["Order"]['KDNOrderCode'];
        }
        // 构造假数据
        $data = [

            "KdnOrderCode" => $order_code,

        ];

        // 返回 JSON 数据
        return success($data);

    }


}
//
//function convertToRequestData($inputData)
//{
//    // 如果输入是 JSON 字符串，则将其解码为数组
//    if (is_string($inputData)) {
//        $inputData = json_decode($inputData, true);
//        if (json_last_error() !== JSON_ERROR_NONE) {
//            throw new InvalidArgumentException("Invalid JSON input");
//        }
//    }
//
//    // 检查是否是数组
//    if (!is_array($inputData)) {
//        throw new InvalidArgumentException("Input data must be an array or a valid JSON string");
//    }
//
//    // 递归格式化数组
//    return formatArrayToRequestString($inputData);
//}
//
//function formatArrayToRequestString($data, $indent = 0)
//{
//    $output = "{\n";
//    $indentation = str_repeat("    ", $indent + 1);  // 每一层增加缩进
//
//    foreach ($data as $key => $value) {
//        $formattedKey = "'$key'"; // 使用单引号包裹键
//
//        if (is_array($value)) {
//            // 如果值是数组，递归调用函数并增加缩进
//            $formattedValue = formatArrayToRequestString($value, $indent + 1);
//        } elseif (is_string($value)) {
//            // 如果值是字符串，使用单引号包裹
//            $formattedValue = "'$value'";
//        } else {
//            // 其他类型的值直接输出
//            $formattedValue = $value;
//        }
//
//        $output .= "$indentation$formattedKey: $formattedValue,\n";
//    }
//
//    // 去除最后一个多余的逗号
//    $output = rtrim($output, ",\n") . "\n";
//    $output .= str_repeat("    ", $indent) . "}";
//
//    return $output;
//}