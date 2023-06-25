<template>
  <div class="detail-item">
    <RouterLink to="/" class="back">&larr; Back to all shows</RouterLink>

    <h1 data-test="name">{{ name }}</h1>
    <p data-test="genres" class="genres">
      Genres: {{ genres ? genres[0]?.name : null }}
    </p>
    <div class="content">
      <img data-test="cover" class="cover" :src="imageSrc" />
      <div data-test="summary" class="summary" v-html="summary"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  genres: Array as () => { id: number; name: string }[],
  imageSrc: String,
  summary: String,
});
</script>

<style>
.detail-item {
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
