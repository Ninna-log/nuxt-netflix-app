<template>
  <div class="detail-item">
    <slot></slot>
    <v-card loading :title="name" :subtitle="genres ? genres[0]?.name : ''">
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <v-img :width="300" aspect-ratio="16/9" cover :src="imageSrc" />
          </v-col>
          <v-col>
            <div data-test="summary" class="summary" v-html="summary" />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
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
