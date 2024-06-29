<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import PageHeader from '@/components/PageHeader.vue'
import { NMessageProvider } from 'naive-ui'
</script>

<template>
  <n-message-provider>
    <page-header />
  </n-message-provider>
  <!-- <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header> -->

  <RouterView />
</template>
