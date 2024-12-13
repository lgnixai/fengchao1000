/*
 Navicat Premium Dump SQL

 Source Server         : niucloud
 Source Server Type    : MySQL
 Source Server Version : 110502 (11.5.2-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : fcos

 Target Server Type    : MySQL
 Target Server Version : 110502 (11.5.2-MariaDB)
 File Encoding         : 65001

 Date: 13/12/2024 21:39:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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

SET FOREIGN_KEY_CHECKS = 1;
