<template>
  <n-breadcrumb>
    <n-breadcrumb-item>
      <router-link to="/">Home</router-link>
    </n-breadcrumb-item>
    <n-breadcrumb-item>Clients</n-breadcrumb-item>
    <n-breadcrumb-item>{{ clientId }}</n-breadcrumb-item>
    <n-breadcrumb-item>Reports</n-breadcrumb-item>
    <n-breadcrumb-item>{{ reportId }}</n-breadcrumb-item>
  </n-breadcrumb>
  <div>
    <h1>{{ reportId }}</h1>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui'

const route = useRoute()
const clientId = computed(() => route.params.client_id)
const reportId = computed(() => route.params.report_id)
</script>
