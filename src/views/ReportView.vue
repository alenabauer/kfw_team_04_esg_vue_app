<template>
  <ReportAnalysis :clientId="clientId" :reportId="reportId" />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ReportAnalysis from '@/components/ReportAnalysis.vue'

const route = useRoute()

const clientId = computed(() => route.params.client_id)
const reportId = computed(() => route.params.report_id)
</script>
