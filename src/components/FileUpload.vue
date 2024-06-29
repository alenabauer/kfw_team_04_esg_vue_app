<template>
  <n-upload
    directory-dnd
    :max="1"
    :action="uploadUrl"
    @success="handleUploadSuccess"
    @error="handleUploadError"
    :data="props.data"
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
</template>
<script setup>
import { NIcon, NUpload, NUploadDragger, useNotification, NText } from 'naive-ui'
import { ArchiveOutline as Archive } from '@vicons/ionicons5'
import { defineProps } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const uploadUrl = 'https://example.com/upload'
const notification = useNotification()

const handleUploadSuccess = () => {
  notification.success({
    content: 'The report has been uploaded successfully.'
  })
}

const handleUploadError = () => {
  notification.error({
    content: 'An error occurred while uploading the report!'
  })
}
</script>
