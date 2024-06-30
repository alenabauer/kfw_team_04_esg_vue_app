<template>
  <!-- Demo: Simulated upload and redirect to report analysis page -->
  <n-flex align="center" justify="center">
    <n-spin v-if="isLoading">
      <template #description> Your report is being uploaded and analyzed. Please wait... </template>
    </n-spin>
    <n-upload
      directory-dnd
      :max="1"
      :action="uploadUrl"
      @success="handleUploadSuccess"
      @error="demoUpload"
      :data="props.data"
      v-else
    >
      <n-upload-dragger>
        <div style="margin-bottom: 12px">
          <n-icon size="48" :depth="3">
            <archive />
          </n-icon>
        </div>
        <n-text style="font-size: 1rem">Click or drag a file to this area to upload</n-text>
      </n-upload-dragger>
    </n-upload>
  </n-flex>
</template>
<script setup>
import { NIcon, NUpload, NUploadDragger, useNotification, NText, NSpin, NFlex } from 'naive-ui'
import { ArchiveOutline as Archive } from '@vicons/ionicons5'
import { defineProps, ref, h, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['close'])
const emitClose = () => {
  emit('close')
}

const isLoading = ref(false)

const uploadUrl = 'https://example.com/upload'
const notification = useNotification()

const handleUploadSuccess = () => {
  notification.success({
    content: 'The report has been uploaded successfully.'
  })
}

// const handleUploadError = () => {
//   notification.error({
//     content: 'An error occurred while uploading the report!'
//   })
// }

const demoUpload = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    notification.success({
      content: () =>
        h('div', [
          'The report has been uploaded successfully. ',
          h(
            'a',
            {
              href: '#',
              onClick: (event) => {
                event.preventDefault()
                router.push('/clients/3/reports/client_3_report_2023')
              },
              style: { color: '#005a8c', textDecoration: 'underline' }
            },
            'Go to report'
          )
        ])
    })
    emitClose()
  }, 2000)
}
</script>
