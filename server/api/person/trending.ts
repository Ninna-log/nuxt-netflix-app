export default defineEventHandler(() => {
  const config = useRuntimeConfig();
  return $fetch(
    `${config.public.apiBase}/trending/person/day?api_key=${config.apiSecret}`
  );
});
