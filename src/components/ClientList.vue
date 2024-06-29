<template>
  <n-data-table
    :columns="columns"
    :data="clientsData"
    :children-key="'children'"
    :row-key="rowKey"
  />
</template>

<script setup>
import { NDataTable } from 'naive-ui'
import { useClientsStore } from '@/stores/store'
import { storeToRefs } from 'pinia'
import { onMounted, h } from 'vue'
import { useRouter } from 'vue-router'

const store = useClientsStore()
const { clients } = storeToRefs(store)
const router = useRouter()

const clientsData = clients

const columns = [
  {
    title: 'Company Name',
    key: 'client',
    render: (row) => row.client || row.name,
    flexGrow: 0,
    width: 200
  },
  {
    title: 'Reports',
    key: 'reports',
    render: (row) => (row.children ? row.children.length : '-')
  },
  {
    key: 'report',
    render: (row) =>
      h(
        'a',
        {
          onClick: () => router.push(`/clients/${row.clientId}/reports/${row.reportId}`),
          style: 'cursor: pointer; color: blue; text-decoration: underline;'
        },
        row.report || ''
      )
  },
  {
    key: 'timestamp',
    minWidth: 150
  }
]

const rowKey = (row) => row.clientId || row.index

onMounted(() => {
  store.fetchAllClientsReports()
})
</script>
