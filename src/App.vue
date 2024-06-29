<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <n-notification-provider>
        <page-header />
        <router-view />
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { RouterView } from 'vue-router'
import PageHeader from '@/components/PageHeader.vue'
import { NMessageProvider, NNotificationProvider, NConfigProvider } from 'naive-ui'

const themeOverrides = {
  common: {
    primaryColor: '#005a8c',
    primaryColorHover: '#00446e',
    primaryColorPressed: '#00446e'
  }
}
</script>
