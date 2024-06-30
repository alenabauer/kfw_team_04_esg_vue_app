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
      <a href="/path/to/pdf" target="_blank" style="text-decoration: none; color: #005a8c" download>
        <n-icon><download /></n-icon> Download Original PDF
      </a>
      <a href="/path/to/pdf" target="_blank" style="text-decoration: none; color: #005a8c" download>
        <n-icon><download /></n-icon> Download Summary CSV
      </a>
    </n-flex>

    <n-flex vertical style="margin: 2rem 0">
      <n-thing
        content-indented
        v-if="environmental.length"
        style="background-color: #ebf3f7; padding: 2rem"
      >
        <template #avatar>
          <n-icon-wrapper :size="32" color="#abba2d" border-radius="2">
            <n-icon :size="24"><leaf /></n-icon>
          </n-icon-wrapper>
        </template>
        <template #header>
          <h3>Environmental</h3>
        </template>
        <n-grid cols="12" x-gap="12">
          <n-grid-item span="10">
            <n-flex
              v-for="answer in environmental"
              :key="answer.question_id"
              style="margin-bottom: 1rem"
            >
              <n-text>{{ answer.question }}</n-text>
              <n-text style="color: #005a8c; font-weight: 600">{{ answer.answer }}</n-text>
              <n-tooltip trigger="hover" style="background-color: rgba(130, 130, 130, 0.85)">
                <template #trigger>
                  <n-icon color="rgba(160, 160, 160, 0.5)" size="large"><info /></n-icon>
                </template>
                {{ answer.contexts.toString() }}
              </n-tooltip>
            </n-flex>
          </n-grid-item>
          <n-grid-item span="2">
            <n-flex vertical align="center" style="margin-bottom: 2rem">
              <n-text depth="3"> Water Consumed</n-text>
              <n-text style="font-size: 1.5rem">
                <n-number-animation
                  ref="numberAnimationInstRef"
                  :from="0"
                  :to="1178788"
                  :active="true"
                  :precision="0"
                />
                m³</n-text
              >
              <n-flex style="color: #abba2d" justify="center" align="center">
                <n-text style="color: inherit; font-size: 1rem">-10.96%</n-text>
                <n-icon><caret-down /></n-icon>
              </n-flex>
            </n-flex>
            <n-flex vertical align="center">
              <n-text depth="3"> Energy Consumed</n-text>
              <n-text style="font-size: 1.5rem">
                <n-number-animation
                  ref="numberAnimationInstRef"
                  :from="0"
                  :to="1574357"
                  :active="true"
                  :precision="0"
                  :duration="2000"
                />
                GJ</n-text
              >
              <n-flex style="color: #abba2d" justify="center" align="center">
                <n-text style="color: inherit; font-size: 1rem">-19.88%</n-text>
                <n-icon><caret-down /></n-icon>
              </n-flex>
            </n-flex>
          </n-grid-item>
        </n-grid>
      </n-thing>

      <n-thing
        content-indented
        v-if="social.length"
        style="background-color: #f6f5ed; padding: 2rem"
      >
        <template #avatar>
          <n-icon-wrapper :size="32" color="#abba2d" border-radius="2">
            <n-icon :size="24"><people /></n-icon>
          </n-icon-wrapper>
        </template>
        <template #header>
          <h3>Social</h3>
        </template>
        <n-grid cols="12" x-gap="16">
          <n-grid-item span="10">
            <n-flex v-for="answer in social" :key="answer.question_id" style="margin-bottom: 1rem">
              <n-text>{{ answer.question }}</n-text>
              <n-text style="color: #005a8c; font-weight: 600">{{ answer.answer }}</n-text>
              <n-tooltip trigger="hover" style="background-color: rgba(130, 130, 130, 0.85)">
                <template #trigger>
                  <n-icon color="rgba(160, 160, 160, 0.5)" size="large"><info /></n-icon>
                </template>
                {{ answer.contexts.toString() }}
              </n-tooltip>
            </n-flex>
          </n-grid-item>
          <n-grid-item span="2">
            <n-flex vertical align="center" style="margin-bottom: 2rem">
              <n-text depth="3"> Women in Leadership</n-text>
              <n-text style="font-size: 1.5rem">
                <n-number-animation
                  ref="numberAnimationInstRef"
                  :from="0"
                  :to="35.51"
                  :active="true"
                  :precision="2"
                />%</n-text
              >
              <n-flex style="color: #abba2d" justify="center" align="center">
                <n-text style="color: inherit; font-size: 1rem">+5.37%</n-text>
                <n-icon><caret-up /></n-icon>
              </n-flex>
            </n-flex>
          </n-grid-item>
        </n-grid>
      </n-thing>

      <n-thing
        content-indented
        v-if="governance.length"
        style="background-color: #ebf3f7; padding: 2rem"
      >
        <template #avatar>
          <n-icon-wrapper :size="32" color="#abba2d" border-radius="2">
            <n-icon :size="24"><bar-chart /></n-icon>
          </n-icon-wrapper>
        </template>
        <template #header>
          <h3>Governance</h3>
        </template>
        <n-grid cols="12" x-gap="16">
          <n-grid-item span="10">
            <n-flex
              v-for="answer in governance"
              :key="answer.question_id"
              style="margin-bottom: 1rem"
            >
              <n-text>{{ answer.question }}</n-text>
              <n-text style="color: #005a8c; font-weight: 600">{{ answer.answer }}</n-text>
              <n-tooltip trigger="hover" style="background-color: rgba(130, 130, 130, 0.85)">
                <template #trigger>
                  <n-icon color="rgba(160, 160, 160, 0.5)" size="large"><info /></n-icon>
                </template>
                {{ answer.contexts.toString() }}
              </n-tooltip>
            </n-flex>
          </n-grid-item>
          <n-grid-item span="2" align="center">
            <img src="/gri.png" alt="GRI" style="width: 40%; height: auto" />
          </n-grid-item>
        </n-grid>
      </n-thing>
    </n-flex>
  </div>

  <h2 v-else>Loading...</h2>
</template>

<script setup>
import { onMounted, ref, defineProps, computed, toRefs } from 'vue'
import { useClientsStore } from '@/stores/store'
import { storeToRefs } from 'pinia'
import {
  NThing,
  NBreadcrumb,
  NBreadcrumbItem,
  NIcon,
  NFlex,
  NIconWrapper,
  NText,
  NGrid,
  NGridItem,
  NNumberAnimation,
  NTooltip
} from 'naive-ui'
import {
  DownloadOutline as Download,
  LeafOutline as Leaf,
  PeopleOutline as People,
  BarChartOutline as BarChart,
  CaretDown,
  CaretUp,
  InformationCircle as Info
} from '@vicons/ionicons5'

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

const environmental = computed(() =>
  answers.value.filter((answer) => answer.category === 'environmental')
)
const social = computed(() => answers.value.filter((answer) => answer.category === 'social'))
const governance = computed(() =>
  answers.value.filter((answer) => answer.category === 'governance')
)

onMounted(async () => {
  const fetchedReport = await store.fetchReportById(props.reportId)
  report.value = fetchedReport
})
</script>
