<template>
    <el-dialog v-model="showDialog" :title="popTitle" width="500px" :destroy-on-close="true">
        <el-form :model="formData" label-width="90px" ref="formRef" :rules="formRules" class="page-form" v-loading="loading">


            <el-form-item :label="t('name')" prop="name" >
                <el-input v-model.trim="formData.name" :placeholder="t('namePlaceholder')" clearable :disabled="formData.uid" class="input-width" maxlength="10" show-word-limit />
            </el-form-item>

            <div v-if="needAddBrandInfo">
                <el-form-item :label="t('logo')">
                    <upload-image v-model="formData.logo" />
                </el-form-item>

                <el-form-item :label="t('expressNo')" prop="express_no">
                    <el-input v-model.trim="formData.express_no" :placeholder="t('expressNoPlaceholder')" :readonly="real_name_input" @click="real_name_input = false" @blur="real_name_input = true" clearable class="input-width" maxlength="10" show-word-limit />
                </el-form-item>

            </div>



        </el-form>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="showDialog = false">{{ t('cancel') }}</el-button>
                <el-button type="primary" :loading="loading" @click="confirm(formRef)">{{ t('confirm') }}</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, toRaw } from 'vue'
import { t } from '@/lang'
import type { FormInstance } from 'element-plus'
import {getBrandList, deleteBrand, editBrand, initBrand, addBrand, getBrandInfo} from '@/addon/fcos/api/brand'

import { img, deepClone } from '@/utils/common'
import { AnyObject } from '@/types/global'

const brandList = ref<AnyObject>([])
const id = ref<number | string>('')

const selectUser = (value: any) => {
    id.value = value
    if (typeof value == 'string') formData.username = value
}

const getBrandAll = () => {
    getBrandList({}).then(({ data }) => {
        brandList.value = data
    }).catch()
}
getBrandAll()
const real_name_input = ref(true)
const password_input = ref(true)
const confirm_password_input = ref(true)
const needAddBrandInfo = computed(() => {
    if (formData.id || !id.value || typeof id.value == 'string') {
        return true
    } else {
        return false
    }
})

const showDialog = ref(false)
const loading = ref(false)
let popTitle: string = ''

/**
 * 表单数据
 */
const initialFormData = {
    id: 0,
    name: '',
    logo: '',
    express_no: '',
}
const formData: Record<string, any> = reactive({ ...initialFormData })

const formRef = ref<FormInstance>()

// 表单验证规则
const formRules = computed(() => {
    return {
        id: [
            {
                validator: (rule: any, value: string, callback: any) => {
                    if (!formData.id && id.value === '') callback(new Error(t('managerPlaceholder')))
                    else callback()
                },
                trigger: 'blur'
            }
        ],
        name: [
            { required: formData.id == 0, message: t('namePlaceholder'), trigger: 'blur' }
        ],
        express_no: [
            { required: true, message: t('expressNoPlaceholder'), trigger: 'blur' }
        ],

    }
})

const emit = defineEmits(['complete'])

/**
 * 确认
 * @param formEl
 */
const confirm = async (formEl: FormInstance | undefined) => {
    if (loading.value || !formEl) return
    const save = formData.uid ? editBrand : addBrand

    await formEl.validate(async (valid) => {
        if (valid) {
            loading.value = true

            const data = deepClone(toRaw(formData))
            if (!formData.id && typeof id.value == 'number') data.id = id.value
            save(data).then(res => {
                loading.value = false
                showDialog.value = false
                !formData.id && getBrandAll()
                emit('complete')
            }).catch(() => {
                loading.value = false
            })
        }
    })
}

const setFormData = async (row: any = null) => {
    loading.value = true
    id.value = ''
    Object.assign(formData, initialFormData)
    popTitle = t('addBrand')

    if (row) {
        popTitle = t('updateBrand')
        const data = await (await getBrandInfo(row.id)).data
        Object.keys(formData).forEach((key: string) => {
            if (data[key] != undefined) formData[key] = data[key]
        })
    }
    loading.value = false
}

defineExpose({
    showDialog,
    setFormData
})
</script>

<style lang="scss" scoped></style>
