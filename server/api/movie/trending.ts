export default defineEventHandler(() => {
  const config = useRuntimeConfig();
  return $fetch(
    `${config.public.apiBase}/trending/movie/day?api_key=${config.apiSecret}`
  );
});
