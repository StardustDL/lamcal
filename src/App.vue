<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Index from './components/Index.vue';
import { NGlobalStyle, NConfigProvider, NSpin, NBackTop, NMessageProvider, NSpace, NImage, useOsTheme, darkTheme } from 'naive-ui'
import { zhCN, enUS, jaJP, ruRU, ukUA, dateEnUS, dateJaJP, dateRuRU, dateUkUA, dateZhCN } from 'naive-ui'
import { watch, computed } from 'vue';

const osThemeRef = useOsTheme();


const language = computed(() => {
  let lang = navigator.language;
  if (lang.indexOf("zh") != -1) {
    return {
      lang: zhCN,
      date: dateZhCN,
    };
  }
  if (lang.indexOf("ru") != -1) {
    return {
      lang: ruRU,
      date: dateRuRU,
    };
  }
  if (lang.indexOf("uk") != -1) {
    return {
      lang: ukUA,
      date: dateUkUA,
    };
  }
  if (lang.indexOf("ja") != -1) {
    return {
      lang: jaJP,
      date: dateJaJP,
    };
  }
  return {
    lang: enUS,
    date: dateEnUS,
  };
});
</script>

<template>
  <n-config-provider
    style="height: 100%"
    :theme="(osThemeRef == 'dark' ? darkTheme : null)"
    :locale="language.lang"
    :date-locale="language.date"
  >
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
