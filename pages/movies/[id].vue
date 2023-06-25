<template>
  <Detail
    v-if="!state.isLoading"
    :name="state.item.title"
    :genres="state.item.genres"
    :image-src="state.imgUrl"
    :summary="state.item.overview"
  />
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import * as api from "../../services/api";
import { useRuntimeConfig } from "nuxt/app";
import { Show } from "types/Show";

const route = useRoute();
const config = useRuntimeConfig();

const state = reactive({
  imgUrl: <string>"",
  item: <Show>{},
  isLoading: <boolean>true,
});

onMounted(async () => {
  state.item = await api.getItemById(route.params.id as string);
  state.imgUrl = state.item?.poster_path
    ? `${config.public.imgBaseUrl}/${state.item?.poster_path}`
    : "https://via.placeholder.com/300x500";
  console.log(state.item);
  console.log(state.imgUrl);
  state.isLoading = false;
});
</script>

<style>
.show-detail-item {
  width: 800px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.back {
  display: block;
  margin-bottom: calc(var(--spacing) * 3);
}

.content {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
}

.genres {
  margin-bottom: calc(var(--spacing) * 3);
}

.cover {
  border-radius: 8px;
  margin-bottom: calc(var(--spacing) * 2);
  max-height: 450px;
}

.summary p {
  font-size: 20px;
  line-height: 32px;
}

@media screen and (min-width: 900px) {
  .content {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .cover {
    margin-right: calc(var(--spacing) * 3);
  }
}
</style>
