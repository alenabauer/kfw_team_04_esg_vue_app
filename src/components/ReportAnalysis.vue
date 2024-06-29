<template>
  <n-breadcrumb :style="{ marginBottom: '1rem' }">
    <n-breadcrumb-item>
      <router-link to="/">Home</router-link>
    </n-breadcrumb-item>
    <n-breadcrumb-item>Clients</n-breadcrumb-item>
    <n-breadcrumb-item v-if="client">{{ client?.client }}</n-breadcrumb-item>
    <n-breadcrumb-item>Reports</n-breadcrumb-item>
    <n-breadcrumb-item v-if="report">{{ report.title }}</n-breadcrumb-item>
  </n-breadcrumb>
  <div v-if="report">
    <h2>{{ report.title }}</h2>
    <n-list v-if="answers">
      <n-list-item v-for="answer in answers" :key="report.id + answer.question_id">
        <n-thing :title="answer.question">
          {{ answer.answer }}
        </n-thing>
      </n-list-item>
    </n-list>
  </div>
  <h2 v-else>Loading...</h2>
</template>

<script setup>
import { onMounted, ref, defineProps, computed, toRefs } from 'vue'
import { useClientsStore } from '@/stores/store'
import { storeToRefs } from 'pinia'
import { NList, NListItem, NThing, NBreadcrumb, NBreadcrumbItem } from 'naive-ui'

const props = defineProps({
  reportId: {
    type: String,
    required: true
  },
  clientId: {
    type: String,
    required: true
  }
})

const store = useClientsStore()
const { clients } = storeToRefs(store)
const { clientId } = toRefs(props)
const report = ref(null)

const client = computed(() => {
  return clients.value.find((client) => client.clientId === parseInt(clientId.value, 10))
})

const answers = computed(() => report.value?.analysis?.answers)

onMounted(async () => {
  const fetchedReport = await store.fetchReportById(props.reportId)
  report.value = fetchedReport
})
</script>
