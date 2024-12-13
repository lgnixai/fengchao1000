/*
 Navicat Premium Dump SQL

 Source Server         : niucloud
 Source Server Type    : MySQL
 Source Server Version : 110502 (11.5.2-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : fengchao

 Target Server Type    : MySQL
 Target Server Version : 110502 (11.5.2-MariaDB)
 File Encoding         : 65001

 Date: 13/12/2024 21:42:02
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for fcos_brand
-- ----------------------------
DROP TABLE IF EXISTS `fcos_brand`;
CREATE TABLE `fcos_brand` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `site_id` int(11) NOT NULL COMMENT '站点id',
  `express_no` varchar(255) DEFAULT NULL COMMENT '类型',
  `name` varchar(255) DEFAULT NULL COMMENT '名称',
  `logo` varchar(255) DEFAULT NULL COMMENT 'logo',
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '是否启用 1启用 0不启用',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `update_time` int(11) DEFAULT NULL COMMENT '修改时间',
  `addon` varchar(255) DEFAULT NULL COMMENT '所属插件',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC COMMENT='代码生成表字段信息表';

-- ----------------------------
-- Records of fcos_brand
-- ----------------------------
BEGIN;
INSERT INTO `fcos_brand` (`id`, `site_id`, `express_no`, `name`, `logo`, `status`, `create_time`, `update_time`, `addon`) VALUES (27, 0, 'JD', '京东', 'addon/fcos/logo/jd.png', 1, 1690035304, 1690035304, '8');
INSERT INTO `fcos_brand` (`id`, `site_id`, `express_no`, `name`, `logo`, `status`, `create_time`, `update_time`, `addon`) VALUES (28, 0, 'YTO', '圆通', 'addon/fcos/logo/yt.png', 1, 0, 0, '');
INSERT INTO `fcos_brand` (`id`, `site_id`, `express_no`, `name`, `logo`, `status`, `create_time`, `update_time`, `addon`) VALUES (29, 0, 'STO-INT', '申通', 'addon/fcos/logo/st.png', 1, 0, 0, '');
INSERT INTO `fcos_brand` (`id`, `site_id`, `express_no`, `name`, `logo`, `status`, `create_time`, `update_time`, `addon`) VALUES (30, 0, 'DOP', '德邦', 'addon/fcos/logo/db.png', 1, 0, 0, '');
INSERT INTO `fcos_brand` (`id`, `site_id`, `express_no`, `name`, `logo`, `status`, `create_time`, `update_time`, `addon`) VALUES (31, 0, 'SF', '顺丰', 'addon/fcos/logo/sf.png', 1, 0, 0, '');
INSERT INTO `fcos_brand` (`id`, `site_id`, `express_no`, `name`, `logo`, `status`, `create_time`, `update_time`, `addon`) VALUES (32, 0, 'JT', '极兔', 'addon/fcos/logo/jt.png', 1, 0, 0, '');
INSERT INTO `fcos_brand` (`id`, `site_id`, `express_no`, `name`, `logo`, `status`, `create_time`, `update_time`, `addon`) VALUES (33, 0, 'ZTO', '中通', 'addon/fcos/logo/zt.png', 1, 0, 0, '');
INSERT INTO `fcos_brand` (`id`, `site_id`, `express_no`, `name`, `logo`, `status`, `create_time`, `update_time`, `addon`) VALUES (34, 0, 'YUND', '韵达', 'addon/fcos/logo/yd.png', 1, 0, 0, '');
INSERT INTO `fcos_brand` (`id`, `site_id`, `express_no`, `name`, `logo`, `status`, `create_time`, `update_time`, `addon`) VALUES (35, 0, 'CNSD', '菜鸟速递', 'addon/fcos/logo/cn.png', 1, 0, 0, '');
INSERT INTO `fcos_brand` (`id`, `site_id`, `express_no`, `name`, `logo`, `status`, `create_time`, `update_time`, `addon`) VALUES (36, 0, 'CAINIAO', '菜鸟裹裹', 'addon/fcos/logo/cnsd.png', 1, 0, 0, '');
INSERT INTO `fcos_brand` (`id`, `site_id`, `express_no`, `name`, `logo`, `status`, `create_time`, `update_time`, `addon`) VALUES (37, 0, 'EMS', 'EMS', 'addon/fcos/logo/ems.png', 1, 0, 0, '');
INSERT INTO `fcos_brand` (`id`, `site_id`, `express_no`, `name`, `logo`, `status`, `create_time`, `update_time`, `addon`) VALUES (38, 0, 'KY', '跨越速运', 'addon/fcos/logo/ky.png', 1, 0, 0, '0');
INSERT INTO `fcos_brand` (`id`, `site_id`, `express_no`, `name`, `logo`, `status`, `create_time`, `update_time`, `addon`) VALUES (39, 0, 'BEST', '百事速运', 'addon/fcos/logo/bs.png', 1, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for fcos_fenxiao_member
-- ----------------------------
DROP TABLE IF EXISTS `fcos_fenxiao_member`;
CREATE TABLE `fcos_fenxiao_member` (
  `member_id` int(10) unsigned NOT NULL DEFAULT 0 COMMENT '会员id',
  `site_id` int(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `pid` int(11) DEFAULT 0 COMMENT '推荐会员id(分销)',
  `fenxiao_member_id` int(11) DEFAULT 0 COMMENT '会员上级分销商会员id',
  `is_fenxiao` tinyint(4) DEFAULT 0 COMMENT '是否是分销商',
  `bind_time` int(11) DEFAULT 0 COMMENT '绑定时间',
  `create_time` int(11) DEFAULT 0 COMMENT '创建时间',
  PRIMARY KEY (`member_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of fcos_fenxiao_member
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for fcos_fenxiao_order
-- ----------------------------
DROP TABLE IF EXISTS `fcos_fenxiao_order`;
CREATE TABLE `fcos_fenxiao_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `member_id` int(10) unsigned NOT NULL DEFAULT 0 COMMENT '会员id',
  `site_id` int(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `order_id` varchar(60) DEFAULT NULL COMMENT '会员id',
  `type` varchar(255) DEFAULT NULL COMMENT '类型',
  `state` int(11) DEFAULT NULL COMMENT '订单状态',
  `first_commission` decimal(10,2) DEFAULT NULL COMMENT '一级佣金',
  `two_commission` decimal(10,2) DEFAULT NULL COMMENT '二级佣金',
  `status` varchar(255) DEFAULT NULL COMMENT '状态',
  `create_time` int(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  `update_time` int(11) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of fcos_fenxiao_order
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for fcos_help
-- ----------------------------
DROP TABLE IF EXISTS `fcos_help`;
CREATE TABLE `fcos_help` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int(11) DEFAULT NULL COMMENT '站点id',
  `title` varchar(60) DEFAULT NULL COMMENT '问题名称',
  `content` varchar(255) DEFAULT NULL COMMENT '解决方案',
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of fcos_help
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for fcos_line_price
-- ----------------------------
DROP TABLE IF EXISTS `fcos_line_price`;
CREATE TABLE `fcos_line_price` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `site_id` int(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `express_no` varchar(30) NOT NULL DEFAULT '' COMMENT '物流公司编号',
  `sender_province` varchar(30) NOT NULL DEFAULT '' COMMENT '发件省',
  `receive_province` varchar(30) NOT NULL DEFAULT '' COMMENT '收件省',
  `first_weight` decimal(10,2) NOT NULL COMMENT '首重价格',
  `continuous_weight` decimal(10,2) NOT NULL COMMENT '续重价格',
  `remark` text DEFAULT NULL COMMENT 'api_key',
  `delete_time` int(11) NOT NULL DEFAULT 0 COMMENT '删除时间',
  `create_time` int(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  `import_no` varchar(255) DEFAULT NULL,
  `delivery` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1008 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC COMMENT='站点线路报价';

-- ----------------------------
-- Records of fcos_line_price
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for fcos_line_price_log
-- ----------------------------
DROP TABLE IF EXISTS `fcos_line_price_log`;
CREATE TABLE `fcos_line_price_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `site_id` int(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `import_no` varchar(30) NOT NULL DEFAULT '' COMMENT '导入编号',
  `create_time` int(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC COMMENT='站点线路报价';

-- ----------------------------
-- Records of fcos_line_price_log
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for fcos_notice
-- ----------------------------
DROP TABLE IF EXISTS `fcos_notice`;
CREATE TABLE `fcos_notice` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `site_id` int(11) NOT NULL COMMENT '站点id',
  `title` varchar(88) DEFAULT NULL COMMENT '标题',
  `image` varchar(255) DEFAULT NULL COMMENT '封面',
  `content` longtext DEFAULT NULL COMMENT '内容',
  `status` int(1) NOT NULL DEFAULT 1 COMMENT '是否启用 1启用 0不启用',
  `create_time` int(11) NOT NULL COMMENT '创建时间',
  `update_time` int(11) NOT NULL COMMENT '修改时间',
  `addon` varchar(88) NOT NULL COMMENT '所属插件',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC COMMENT='代码生成表字段信息表';

-- ----------------------------
-- Records of fcos_notice
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for fcos_order
-- ----------------------------
DROP TABLE IF EXISTS `fcos_order`;
CREATE TABLE `fcos_order` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `site_id` int(11) NOT NULL COMMENT '站点id',
  `member_id` int(11) NOT NULL COMMENT '会员id',
  `order_from` varchar(50) NOT NULL COMMENT '订单来源',
  `order_id` varchar(24) NOT NULL COMMENT '订单id',
  `order_money` decimal(10,2) NOT NULL COMMENT '订单金额',
  `order_discount_money` decimal(10,2) NOT NULL DEFAULT 0.00 COMMENT '订单优惠金额',
  `is_send` int(1) DEFAULT 0 COMMENT '是否发单1已发单0未发单',
  `is_pick` int(1) DEFAULT 0 COMMENT '是否揽收 1揽收 0未揽收',
  `order_status` int(1) NOT NULL DEFAULT 0 COMMENT '订单状态',
  `refund_status` int(3) DEFAULT 0 COMMENT '退款状态',
  `out_trade_no` varchar(32) DEFAULT NULL COMMENT '支付编号',
  `mer_remark` varchar(255) DEFAULT NULL COMMENT '商户备注',
  `remark` varchar(255) DEFAULT NULL COMMENT '订单备注',
  `pay_time` int(13) DEFAULT NULL COMMENT '支付时间',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `close_reason` varchar(80) DEFAULT NULL COMMENT '关闭原因',
  `is_enable_refund` varchar(2) DEFAULT NULL COMMENT '是否允许退款',
  `close_time` int(11) DEFAULT NULL COMMENT '订单关闭时间',
  `ip` varchar(60) DEFAULT NULL COMMENT '会员ip',
  `update_time` int(13) DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(13) DEFAULT 0 COMMENT '删除时间',
  `send_log` varchar(255) DEFAULT NULL COMMENT '发单记录',
  `task_brand` varchar(255) DEFAULT NULL COMMENT '发单渠道',
  `task_type` varchar(255) DEFAULT NULL COMMENT '发单类型',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `id` (`id`,`site_id`,`member_id`,`order_from`,`order_id`,`is_send`,`order_status`,`refund_status`,`create_time`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=230 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC COMMENT='订单列表';

-- ----------------------------
-- Records of fcos_order
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for fcos_order_add
-- ----------------------------
DROP TABLE IF EXISTS `fcos_order_add`;
CREATE TABLE `fcos_order_add` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `site_id` int(11) DEFAULT NULL COMMENT '站点id',
  `member_id` int(10) DEFAULT NULL COMMENT '会员id',
  `order_id` varchar(44) NOT NULL COMMENT '订单id',
  `order_no` varchar(44) DEFAULT NULL COMMENT '订单no',
  `order_money` decimal(10,2) NOT NULL COMMENT '订单金额',
  `order_status` int(1) DEFAULT 0 COMMENT '订单状态',
  `out_trade_no` varchar(32) DEFAULT NULL COMMENT '支付编号',
  `pay_time` int(13) DEFAULT NULL COMMENT '支付时间',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `close_time` int(11) DEFAULT NULL COMMENT '订单关闭时间',
  `ip` varchar(60) DEFAULT NULL COMMENT '会员ip',
  `update_time` int(13) DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(13) DEFAULT 0 COMMENT '删除时间',
  `notice_num` int(11) DEFAULT NULL COMMENT '通知次数',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `id` (`id`,`order_id`,`order_status`,`create_time`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC COMMENT='订单列表';

-- ----------------------------
-- Records of fcos_order_add
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for fcos_order_delivery
-- ----------------------------
DROP TABLE IF EXISTS `fcos_order_delivery`;
CREATE TABLE `fcos_order_delivery` (
  `order_id` varchar(44) NOT NULL DEFAULT '订单id',
  `task_id` varchar(44) NOT NULL DEFAULT '任务id',
  `member_id` int(11) DEFAULT NULL COMMENT '会员id',
  `order_no` varchar(48) DEFAULT NULL COMMENT '易达订单号',
  `start_address` varchar(500) NOT NULL COMMENT '开始地址',
  `end_address` varchar(500) NOT NULL COMMENT '结束地址',
  `goods` varchar(60) DEFAULT NULL COMMENT '物品',
  `long` double NOT NULL COMMENT '长',
  `width` double NOT NULL COMMENT '宽',
  `height` double NOT NULL COMMENT '高',
  `weight` double NOT NULL COMMENT '重量',
  `package_count` int(4) DEFAULT NULL COMMENT '包裹数',
  `delivery_id` varchar(40) DEFAULT NULL COMMENT '运送单号',
  `delivery_status` int(60) DEFAULT 1 COMMENT '订单状态',
  `delivery_type` varchar(60) NOT NULL COMMENT '快递公司',
  `bj_price` varchar(10) DEFAULT NULL COMMENT '保价金额',
  `customer_type` varchar(16) NOT NULL COMMENT '寄件通道',
  `delivery_business` varchar(60) NOT NULL COMMENT '产品类型',
  `online_pay` varchar(5) DEFAULT NULL COMMENT '是否在线支付YNALL',
  `start_time` varchar(40) DEFAULT NULL COMMENT '预约开始时间',
  `end_time` varchar(40) DEFAULT NULL COMMENT '预约结束时间',
  `order_status_desc` varchar(60) DEFAULT NULL COMMENT '订单状态描述',
  `order_status` varchar(5) DEFAULT '1' COMMENT '订单状态快递信息状态',
  `courier_context` varchar(500) DEFAULT NULL COMMENT '揽收信息',
  `pay_method` varchar(4) DEFAULT NULL COMMENT '支付方式',
  `remark` varchar(255) DEFAULT NULL COMMENT '订单备注',
  `create_time` int(13) DEFAULT NULL COMMENT '创建时间',
  `update_time` int(13) DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(13) DEFAULT NULL COMMENT '删除时间',
  `channel_id` varchar(255) DEFAULT NULL COMMENT '渠道id',
  `price_rule` longtext DEFAULT NULL COMMENT '计价规则',
  `original_rule` longtext DEFAULT NULL COMMENT '原价计价规则',
  PRIMARY KEY (`order_id`(15)) USING BTREE,
  KEY `order_id` (`order_id`,`member_id`,`order_no`,`delivery_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC COMMENT='订单快递信息表';

-- ----------------------------
-- Records of fcos_order_delivery
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for fcos_order_delivery_real
-- ----------------------------
DROP TABLE IF EXISTS `fcos_order_delivery_real`;
CREATE TABLE `fcos_order_delivery_real` (
  `order_id` varchar(44) NOT NULL,
  `weight` double DEFAULT NULL COMMENT '重量',
  `fee_weight` double DEFAULT NULL COMMENT '计费重量',
  `volume` double DEFAULT NULL COMMENT '体积',
  `package_count` int(3) DEFAULT NULL COMMENT '包裹数量',
  `fee_blockList` varchar(1000) DEFAULT NULL COMMENT '费用明细',
  `total_fee` double DEFAULT NULL COMMENT '总费用',
  `pay_fee` double DEFAULT NULL COMMENT '支付费用',
  `create_time` int(13) DEFAULT NULL COMMENT '创建时间',
  `update_time` int(13) DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(13) DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`order_id`) USING BTREE,
  KEY `order_id` (`order_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC COMMENT='订单快递信息表';

-- ----------------------------
-- Records of fcos_order_delivery_real
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for fcos_order_discount
-- ----------------------------
DROP TABLE IF EXISTS `fcos_order_discount`;
CREATE TABLE `fcos_order_discount` (
  `order_id` int(11) NOT NULL,
  `discount_type` varchar(255) DEFAULT NULL COMMENT '优惠类型',
  `money` double DEFAULT NULL COMMENT '优惠金额',
  `coupon_id` int(11) DEFAULT NULL COMMENT '优惠券id',
  `card_id` int(11) DEFAULT NULL COMMENT '会员卡id',
  PRIMARY KEY (`order_id`) USING BTREE,
  KEY `order_id` (`order_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of fcos_order_discount
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for fcos_order_log
-- ----------------------------
DROP TABLE IF EXISTS `fcos_order_log`;
CREATE TABLE `fcos_order_log` (
  `id` int(13) NOT NULL AUTO_INCREMENT,
  `site_id` int(13) DEFAULT NULL,
  `order_id` varchar(40) NOT NULL COMMENT '订单id',
  `action` varchar(255) NOT NULL COMMENT '操作',
  `main_type` varchar(255) DEFAULT NULL COMMENT '操作身份',
  `main_id` int(11) DEFAULT NULL COMMENT '身份id',
  `nick_name` varchar(255) DEFAULT NULL COMMENT '昵称',
  `order_status` varchar(255) DEFAULT NULL COMMENT '订单状态',
  `create_time` int(13) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `id` (`id`,`order_id`,`main_type`,`order_status`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of fcos_order_log
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for fcos_shop_order
-- ----------------------------
DROP TABLE IF EXISTS `fcos_shop_order`;
CREATE TABLE `fcos_shop_order` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `site_id` int(11) NOT NULL COMMENT '站点id',
  `order_no` varchar(24) NOT NULL COMMENT '商城订单号',
  `delivery_id` varchar(25) DEFAULT NULL COMMENT '快递单号',
  `yida_order_no` varchar(25) DEFAULT NULL COMMENT '易达订单号',
  `order_status_name` varchar(255) DEFAULT NULL COMMENT '订单状态',
  `is_pick` int(11) DEFAULT NULL COMMENT '是否揽收',
  `is_send` int(11) DEFAULT 0 COMMENT '是否发单1已发单0未发单',
  `real_price` decimal(10,2) DEFAULT NULL COMMENT '实际运费',
  `close_time` int(11) DEFAULT NULL COMMENT '订单关闭时间',
  `update_time` int(11) DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(11) DEFAULT 0 COMMENT '删除时间',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `id` (`id`,`site_id`,`order_no`,`is_send`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=233 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC COMMENT='商城发单';

-- ----------------------------
-- Records of fcos_shop_order
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for fcos_site_auth
-- ----------------------------
DROP TABLE IF EXISTS `fcos_site_auth`;
CREATE TABLE `fcos_site_auth` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `site_id` int(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `api_name` varchar(255) NOT NULL DEFAULT '' COMMENT 'ApiName',
  `api_key` text DEFAULT NULL COMMENT 'api_key',
  `api_secret` text DEFAULT NULL COMMENT 'api_secret',
  `callback_url` text DEFAULT NULL COMMENT '回调url',
  `delete_time` int(11) NOT NULL DEFAULT 0 COMMENT '删除时间',
  `create_time` int(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of fcos_site_auth
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for fcos_site_member
-- ----------------------------
DROP TABLE IF EXISTS `fcos_site_member`;
CREATE TABLE `fcos_site_member` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '订单唯一ID',
  `site_id` int(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `member_id` int(11) NOT NULL COMMENT ' 会员id',
  `create_time` int(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  `update_time` int(11) NOT NULL COMMENT '更新时间',
  `delete_time` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='站点会员绑定';

-- ----------------------------
-- Records of fcos_site_member
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
