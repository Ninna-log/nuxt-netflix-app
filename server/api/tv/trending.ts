export default defineEventHandler(() => {
  const config = useRuntimeConfig();
  return $fetch(
    `${config.public.apiBase}/trending/tv/day?api_key=${config.apiSecret}`
  );
});
