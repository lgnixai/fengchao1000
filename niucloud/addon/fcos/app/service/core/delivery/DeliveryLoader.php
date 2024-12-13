<?php
namespace addon\fcos\app\service\core\delivery;

use core\loader\Loader;

/**
 * @see DeliveryLoader
 */
class DeliveryLoader extends Loader
{
    /**
     * 空间名
     * @var string
     */
    protected $namespace = '\\addon\\fcos\\app\\service\\core\\delivery\\';

    protected $config_name = 'delivery';

    /**
     * 默认驱动
     * @return mixed
     */
    protected function getDefault()
    {
        return 'kdniao';
    }
}