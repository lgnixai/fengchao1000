<template>
  <div class="main-container">
    <el-card class="card !border-none mb-[15px]" shadow="never">
      <el-page-header :content="pageName" :icon="ArrowLeft" @back="back"/>
    </el-card>

    <el-card class="box-card !border-none" shadow="never">
      <el-form :model="formData" label-width="120px" ref="formRef" :rules="formRules" class="page-form"
               v-loading="loading">
        <el-form-item :label="t('templateName')" prop="template_name">
          <el-input v-model.trim="formData.template_name" clearable :placeholder="t('templateNamePlaceholder')"
                    class="input-width" maxlength="60"/>
        </el-form-item>
        <el-form-item :label="t('feeTypeName')" prop="fee_type">
          <el-radio-group v-model="formData.fee_type">
            <!--            <el-radio label="fixed" size="large">{{ t('byFixed') }}</el-radio>-->
            <el-radio label="percent" size="large">{{ t('byPercent') }}</el-radio>
            <el-radio label="weight" size="large">{{ t('byWeight') }}</el-radio>
          </el-radio-group>
        </el-form-item>

        <!--        <el-form-item :label="t('fixedMoney')" prop="router_path" v-show="formData.fee_type == 'fixed'">-->
        <!--          <el-input v-model.number="wayMoney.fixed_money" :placeholder="0" class="input-width"/>-->
        <!--          <span class="ml-[4px]">{{ t('fixedTip') }}</span>-->
        <!--        </el-form-item>-->
        <el-form-item :label="t('percentMoney')" prop="router_path" v-show="formData.fee_type == 'percent'">
          <el-input v-model="wayMoney.percent_money" @keyup="filterDigit($event)" :placeholder="0" class="input-width"/>
          <span class="ml-[4px]">{{ t('percentTip') }}</span>
        </el-form-item>
        <el-form-item :label="t('weightMoney')" prop="router_path" v-show="formData.fee_type == 'weight'">
          <el-input v-model="wayMoney.first_money" @keyup="filterDigit($event)" :placeholder="0" class="input-width"/>
          <span class="ml-[4px]">{{ t('weightFirstTip') }}</span>
          <el-input v-model="wayMoney.continue_money" @keyup="filterDigit($event)" :placeholder="0"
                    class="input-width"/>
          <span class="ml-[4px]">{{ t('续重加价') }}</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="setAll()">{{ t('setAll') }}</el-button>
        </el-form-item>

        <el-form-item :label="t('feeSetting')" prop="fee_data">
          <el-table :data="feeData" style="width: 100%" size="default">
            <el-table-column :label="t('deliveryCompany')">
              <template #default="{ row, $index }">
                <div class="area-input">
                  <span>{{ row.company_name }}</span>
                </div>
              </template>
            </el-table-column>

            <el-table-column :label="t('firstFee')">
              <template #default="{ $index }">
                <el-input v-model.trim="feeData[$index].sprice" maxlength="8" @keyup="filterDigit($event)"
                          @blur="feeData[$index].sprice = $event.target.value"/>
              </template>
            </el-table-column>

            <el-table-column :label="t('continueFee')">
              <template #default="{ $index }">
                <el-input v-model.trim="feeData[$index].xprice" @keyup="filterDigit($event)" maxlength="8"
                          @blur="feeData[$index].xprice = $event.target.value"/>
              </template>
            </el-table-column>

          </el-table>

        </el-form-item>

      </el-form>
    </el-card>
    <div class="fixed-footer-wrap">
      <div class="fixed-footer">
        <el-button type="primary" @click="onSave(formRef)" :disabled="loading">{{ t('save') }}</el-button>
        <el-button @click="back()">{{ t('cancel') }}</el-button>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { t } from '@/lang'
import type { ElTree, FormInstance, ElMessage } from 'element-plus'

import { AnyObject } from '@/types/global'
import { useRoute, useRouter } from 'vue-router'
import { getAreatree } from '@/app/api/sys'
import { filterDigit } from '@/utils/common'
import Test from '@/utils/test'
import { getPriceTemplateInfoBySiteId, getCompany, editPriceTemplate } from '@/addon/fcos/api/site'

const showSelectAreaDialog = ref(false)
const route = useRoute()
const router = useRouter()
const loading = ref(false)
/**
 * 表单数据
 */
const initialFormData = {
    template_id: '',
    site_id: '',
    template_name: '',
    fee_type: 'weight',
    area: [],
    no_delivery: 0,
    is_free_shipping: 0,
    fee_data: [],
    free_shipping_data: [],
    no_delivery_data: []
}
const pageName = route.meta.title
const formData: Record<string, any> = reactive({ ...initialFormData })

formData.site_id = ref(route.query.site_id)

console.log(route.query.site_id)
const formRef = ref<FormInstance>()

const companyTree = ref<AnyObject[]>([])

const wayMoney = ref({
    fixed_money: 0,
    first_money: 0,
    continue_money: 0,
    percent_money: 0
})

if (route.query.site_id) {
    loading.value = true
    getPriceTemplateInfoBySiteId(route.query.site_id).then(({ data }) => {
        if (data) {
            Object.keys(formData).forEach((key: string) => {
                if (data[key] != undefined) formData[key] = data[key]
            })
            // console.log("data.fee_data",data.fee_data)
            feeData.value = data.fee_data
            noDeliveryData.value = data.no_delivery_data
            freeShippingData.value = data.free_shipping_data
        }
        loading.value = false
    }).catch(() => {
        loading.value = false
    })
}

// 表单验证规则
const formRules = computed(() => {
    return {
        template_name: [
            { required: true, message: t('templateNamePlaceholder'), trigger: 'blur' }
        ],
        fee_data: [{ validator: feeDataValidate }]

    }
})

/**
 * 运费模板运费数据校验
 */
const feeDataValidate = (rule: any, value: any, callback: any) => {
    for (let i = 0; i < feeData.value.length; i++) {
        const item = feeData.value[i]
    }
    callback()
}

const feeLabel = computed(() => {
    const label: AnyObject = {

        weight: {
            first: t('firstWeight'),
            continue: t('continueWeight')
        },
        percent: {
            first: t('firstVolume'),
            continue: t('continueVolume')
        }
    }
    return label[formData.fee_type]
})

const setAll = () => {
    const moneys: AnyObject = {

        fixed: {
            first: wayMoney.value.fixed_money,
            continue: wayMoney.value.fixed_money
        },
        weight: {
            first: wayMoney.value.first_money,
            continue: wayMoney.value.continue_money
        },
        percent: {
            first: wayMoney.value.percent_money,
            continue: wayMoney.value.percent_money
        }
    }
    const money = moneys[formData.fee_type]
    feeData.value.forEach(item => {
        item.sprice = money.first
        item.xprice = money.continue
    })
}

const freeShippingLabel = computed(() => {
    const label: AnyObject = {
        num: t('freeShippingNum'),
        weight: t('freeShippingWeight'),
        volume: t('freeShippingVolume')
    }
    return label[formData.fee_type]
})

// 运费数据
const feeData = ref<AnyObject[]>()
// 包邮区域数据
const freeShippingData = ref<AnyObject[]>([])
// 不配送区域
const noDeliveryData = ref<AnyObject[]>([])

/**
 * 确认
 * @param formEl
 */
const onSave = async (formEl: FormInstance | undefined) => {
    if (loading.value || !formEl) return
    const save = editPriceTemplate

    await formEl.validate(async (valid) => {
        if (valid) {
            loading.value = true

            const data: AnyObject = {
                template_id: formData.template_id,
                template_name: formData.template_name,
                fee_type: formData.fee_type,
                site_id: formData.site_id
            }

            const companys: AnyObject = {}

            feeData.value.forEach(item => {
                companys[item.company_id] = {
                    company_id: item.company_id,
                    sprice: item.sprice,
                    xprice: item.xprice
                }
            })
            data.companys = Object.values(companys)

            save(data).then(() => {
                loading.value = false
                router.push({ path: '/fcos/site/list' })
            }).catch(() => {
                loading.value = false
            })
        }
    })
}

const back = () => {
    router.push({ path: '/fcos/site/list' })
}
</script>

<style lang="scss" scoped>
:deep(.el-tree-node.is-expanded>.el-tree-node__children) {
  display: flex !important;
  flex-wrap: wrap;
}

:deep(.area-input .el-input__wrapper) {
  box-shadow: none !important;
  padding: 0 !important;
  background: none;

  input {
    cursor: pointer;
  }
}
</style>
