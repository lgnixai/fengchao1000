<template>
  <!--管理员-->
  <div class="main-container">
    <el-card class="box-card !border-none" shadow="never">

      <div class="flex justify-between items-center">
        <span class="text-page-title">{{ pageName }}</span>
      </div>

      <div class="flex justify-between items-center mt-[20px]">
        <el-form :inline="true" :model="brandTableData.searchParam" ref="searchFormRef">

        </el-form>
        <el-button type="primary" class="w-[100px] self-start" @click="addEvent">{{ t('addBrand') }}</el-button>
        <el-button type="primary" class="w-[100px] self-start"  @click="initEvent">{{ t('initBrand') }}</el-button>

      </div>

      <div>
        <el-table :data="brandTableData.data" size="large" v-loading="brandTableData.loading">
          <template #empty>
            <span>{{ !brandTableData.loading ? t('emptyData') : '' }}</span>
          </template>

          <el-table-column :label="t('logo')" width="100" align="left">
            <template #default="{ row }">
              <div class="w-[35px] h-[35px] flex items-center justify-center">
                <img v-if="row.logo" :src="img(row.logo)" class="w-[35px] rounded-full" />
                <img v-else src="@/app/assets/images/member_head.png" class="w-[35px] rounded-full" />
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="express_no" :label="t('expressNo')" width="240"/>
          <el-table-column prop="name" :label="t('name')" min-width="120" show-overflow-tooltip>
            <template #default="{ row }">
              <span>{{ row.name ? row.name :'--' }}</span>
            </template>
          </el-table-column>



          <el-table-column :label="t('operation')" align="right" fixed="right" width="160">
            <template #default="{ row }">
              <div  >
<!--                <el-button type="primary" link @click="editEvent(row)">{{ t('edit') }}</el-button>-->
                <el-button type="primary" link @click="deleteEvent(row.id)">{{ t('delete') }}</el-button>
              </div>

            </template>
          </el-table-column>
        </el-table>

        <div class="mt-[16px] flex justify-end">
          <el-pagination v-model:current-page="brandTableData.page" v-model:page-size="brandTableData.limit"
                         layout="total, sizes, prev, pager, next, jumper" :total="brandTableData.total"
                         @size-change="loadBrandList()" @current-change="loadBrandList" />
        </div>
      </div>

      <edit-brand ref="editUserDialog" @complete="loadBrandList()" />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { t } from '@/lang'
import EditBrand from "@/addon/fcos/views/components/edit-brand.vue";
import {getBrandList,deleteBrand, editBrand, initBrand} from '@/addon/fcos/api/brand'


import { img } from '@/utils/common'
import { ElMessageBox } from 'element-plus'
import type { FormInstance } from 'element-plus'
import { useRoute } from 'vue-router'

const route = useRoute()
const pageName = route.meta.title
const brandTableData = reactive({
  page: 1,
  limit: 10,
  total: 0,
  loading: true,
  data: [],
  searchParam: {
    search: '',
    user_type: ''
  }
})

const searchFormRef = ref<FormInstance>()

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return

  formEl.resetFields()
  loadBrandList()
}

/**
 * 获取用户列表
 */
const loadBrandList = (page: number = 1) => {
  brandTableData.loading = true
  brandTableData.page = page

  getBrandList({
    page: brandTableData.page,
    limit: brandTableData.limit,
    username: brandTableData.searchParam.search,
    user_type: brandTableData.searchParam.user_type
  }).then(res => {
    brandTableData.loading = false
    brandTableData.data = res.data.data
    brandTableData.total = res.data.total
  }).catch(() => {
    brandTableData.loading = false
  })
}
loadBrandList()

const editUserDialog: Record<string, any> | null = ref(null)

/**
 * 添加用户
 */
const addEvent = () => {
  editUserDialog.value.setFormData()
  editUserDialog.value.showDialog = true
}

/**
 * 编辑用户
 * @param data
 */
const editEvent = (data: any) => {
  editUserDialog.value.setFormData(data)
  editUserDialog.value.showDialog = true
}


const deleteEvent = (uid: number) => {
  ElMessageBox.confirm(t('brandDeleteTips'), t('warning'),
      {
        confirmButtonText: t('confirm'),
        cancelButtonText: t('cancel'),
        type: 'warning'
      }
  ).then(() => {
    deleteBrand(uid).then(() => {
      loadBrandList()
    }).catch(() => {
    })
  })
}
/**
 * 初始化物流公司数据
 */
const initEvent = () => {
  ElMessageBox.confirm(t('brandInitDataTips'), t('warning'),
      {
        confirmButtonText: t('confirm'),
        cancelButtonText: t('cancel'),
        type: 'warning'
      }
  ).then(() => {
    initBrand().then(() => {
      loadBrandList()
    }).catch(() => {
    })
  })
}
</script>

<style lang="scss" scoped></style>
