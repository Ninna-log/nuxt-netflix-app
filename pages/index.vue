<template>
  <main v-if="!state.isLoading">
    <SearchInput />
    <List
      v-for="category in state.categories"
      :items="category.results"
      :key="category.name"
    >
      <h2>{{ category.name }}</h2>
    </List>
  </main>
</template>

<script setup lang="ts">
import { CategoryShow } from "types/CategoryShow";
import { reactive, onMounted } from "vue";
import { store } from "../hooks/useGetCategories";

const state = reactive({
  isLoading: <boolean>true,
  categories: <CategoryShow[]>[],
});

onMounted(async () => {
  state.categories = await store.getCategories();
  state.isLoading = false;
});
</script>
