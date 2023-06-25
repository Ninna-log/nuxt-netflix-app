export default defineEventHandler((event) => {
  const { page } = getQuery(event);
  const config = useRuntimeConfig();
  return $fetch(
    `${config.public.apiBase}/discover/movie?&api_key=${config.apiSecret}`
  );
});
