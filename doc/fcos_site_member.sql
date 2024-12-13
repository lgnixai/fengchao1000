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

 Date: 13/12/2024 21:52:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
  `delete_time` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='站点会员绑定';

SET FOREIGN_KEY_CHECKS = 1;
