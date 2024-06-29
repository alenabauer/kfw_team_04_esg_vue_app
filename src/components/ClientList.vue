<template>
  <n-data-table
    style="margin: 2rem 0"
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

const store = useClientsStore()
const { getClients } = storeToRefs(store)

const clientsData = getClients

const columns = [
  {
    title: 'Client',
    key: 'client',
    render: (row) => row.client || row.name
  },
  {
    title: 'Reports',
    key: 'reports',
    render: (row) => (row.children ? row.children.length : '-')
  },
  {
    key: 'report',
    minWidth: 150
  },
  {
    key: 'timestamp',
    minWidth: 150
  }
]

const rowKey = (row) => row.clientId || row.index
</script>
