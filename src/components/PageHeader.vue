<template>
  <div>
    <n-page-header style="margin-bottom: 2rem; color: #005a8c">
      <template #title>ESG Analyser</template>
      <template #avatar>
        <n-icon size="32" color="#abba2d">
          <globe />
        </n-icon>
      </template>
      <template #extra>
        <n-button @click="showUploadModal = true" type="primary">Upload New Report</n-button>
      </template>
    </n-page-header>

    <n-modal
      v-model:show="showUploadModal"
      preset="card"
      title="Upload a new report"
      style="width: 600px"
    >
      <n-select
        v-model:value="selectedClientId"
        :options="clientOptions"
        placeholder="Select Client"
        style="margin-bottom: 1rem"
        clearable
      />
      <FileUpload :data="getExtraData" v-if="selectedClientId" />
    </n-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { NPageHeader, NIcon, NButton, NModal, NSelect } from 'naive-ui'
import { Globe } from '@vicons/ionicons5'
import FileUpload from '@/components/FileUpload.vue'
import { useClientsStore } from '@/stores/store'
import { storeToRefs } from 'pinia'

const store = useClientsStore()
const { clients } = storeToRefs(store)

const showUploadModal = ref(false)
const selectedClientId = ref(null)

const clientOptions = clients.value.map((client) => ({
  label: client.client,
  value: client.clientId
}))

const getExtraData = () => {
  return {
    client_id: selectedClientId.value
  }
}
</script>
