<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Index from './components/Index.vue';
import { NGlobalStyle, NConfigProvider, NSpin, NBackTop, NMessageProvider, NSpace, NImage, useOsTheme, darkTheme } from 'naive-ui'

const osThemeRef = useOsTheme();
</script>

<template>
  <n-config-provider :theme="(osThemeRef == 'dark' ? darkTheme : null)">
    <n-message-provider>
      <n-global-style />
      <suspense>
        <template #default>
          <Index />
        </template>
        <template #fallback>
          <n-spin :size="80" id="loading-spin" />
        </template>
      </suspense>
      <n-back-top :right="100" />
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped>
#loading-spin {
  text-align: center;
  width: 100%;
  height: 100vh;
}
</style>
