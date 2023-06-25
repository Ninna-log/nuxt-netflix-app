<template>
  <div class="items-list">
    <slot></slot>
    <div class="items" data-test="items">
      <Item
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :name="item.title"
        :image-src="getImg(item.poster_path ?? item.profile_path)"
      />
    </div>
    <p class="scroll-hint">Scroll for more &rarr;</p>
  </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from "nuxt/app";
import { Show } from "types/Show";

defineProps({
  items: {
    type: Array as () => Show[],
    required: true,
  },
});

const config = useRuntimeConfig();

const getImg = (posterPath: any) => {
  return posterPath != null
    ? `${config.public.imgBaseUrl}/${posterPath}`
    : "https://via.placeholder.com/300x500";
};
</script>

<style scoped>
.items-list {
  margin-bottom: calc(var(--spacing) * 3);
  overflow-x: auto;
}

.items {
  display: flex;
  overflow-x: auto;
  padding: calc(var(--spacing) * 3) var(--spacing);
  margin-left: -8px;
}

.items::-webkit-scrollbar {
  display: none;
}

.scroll-hint {
  text-align: right;
}
</style>
