<template>
  <div class="search-shows">
    <v-text-field
      v-model="state.query"
      type="text"
      label="Search for your next tv/Movie"
      variant="outlined"
      clearable
    />
    <div class="loading" v-show="state.isLoading">
      <Loader />
    </div>
    <List
      v-if="!state.isLoading"
      data-test="search-results"
      class="search-results"
      :items="state.items"
    >
    </List>
  </div>
</template>

<script setup>
import { watch, reactive } from "vue";
import debounce from "lodash.debounce";
import * as api from "../services/api";

const state = reactive({
  query: "",
  items: [],
  isLoading: false,
});

watch(
  () => state.query,
  debounce(async (newQuery) => {
    state.isLoading = true;
    state.items = (await api.getItemByQuery(newQuery)).results;
    state.isLoading = false;
  }, 250)
);
</script>

<style scoped>
.loading {
  display: flex;
  width: 100%;
  justify-content: center;
}
.search-shows {
  margin-bottom: calc(var(--spacing) * 3);
}

.search-results {
  margin-top: calc(var(--spacing) * 2);
}

label {
  display: block;
  font-weight: 700;
  margin-bottom: var(--spacing);
}
</style>
