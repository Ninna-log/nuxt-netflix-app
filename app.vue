<template>
  <v-theme-provider theme="dark" with-background class="pa-10">
    <div class="layout">
      <Logo />
      <RouterView />
    </div>
  </v-theme-provider>
</template>

<script setup lang="ts">
import * as Vue from "vue";
</script>

<style scoped>
.layout {
  width: 1200px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 20px;
  height: 100vh;
}
</style>
