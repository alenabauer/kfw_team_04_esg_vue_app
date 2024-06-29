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
    <h2>
      {{ report.title }}
    </h2>
    <n-flex>
      <a href="/path/to/pdf" target="_blank" style="text-decoration: none; color: #005a8c;" download>
        <n-icon><download /></n-icon> Download Original PDF
      </a>
      <a href="/path/to/pdf" target="_blank" style="text-decoration: none; color: #005a8c;" download>
        <n-icon><download /></n-icon> Download Answers CSV
      </a>
    </n-flex>


    <n-card title="Environmental" v-if="environmental.length">
      <n-thing v-for="answer in environmental" :key="answer.question_id" :title="answer.question" style="margin-bottom: 1rem;">
        {{ answer.answer }}
      </n-thing>
    </n-card>

    <n-card title="Social" v-if="social.length" style="margin-top: 1rem;">
      <n-thing v-for="answer in social" :key="answer.question_id" :title="answer.question" style="margin-bottom: 1rem;">
        {{ answer.answer }}
      </n-thing>
    </n-card>

    <n-card title="Governance" v-if="governance.length" style="margin-top: 1rem;">
      <n-thing v-for="answer in governance" :key="answer.question_id" :title="answer.question" style="margin-bottom: 1rem;">
        {{ answer.answer }}
      </n-thing>
    </n-card>
  </div>

  <h2 v-else>Loading...</h2>
</template>

<script setup>
import { onMounted, ref, defineProps, computed, toRefs } from 'vue'
import { useClientsStore } from '@/stores/store'
import { storeToRefs } from 'pinia'
import { NCard, NThing, NBreadcrumb, NBreadcrumbItem, NIcon, NFlex } from 'naive-ui'
import { DownloadOutline as Download } from '@vicons/ionicons5'

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

const answers = computed(() => report.value?.analysis?.answers || [])

const environmental = computed(() => answers.value.filter(answer =>
  answer.category === 'environmental'
))
const social = computed(() => answers.value.filter(answer =>
  answer.category === 'social'
))
const governance = computed(() => answers.value.filter(answer =>
  answer.category === 'governance'
))

onMounted(async () => {
  const fetchedReport = await store.fetchReportById(props.reportId)
  report.value = fetchedReport
})
</script>
