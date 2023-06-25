export default defineEventHandler(() => {
  const config = useRuntimeConfig();
  return $fetch(
    `${config.public.apiBase}/person/popular?api_key=${config.apiSecret}`
  );
});
