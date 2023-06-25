export default defineEventHandler((event) => {
  const { query } = getQuery(event);
  const config = useRuntimeConfig();
  return $fetch(
    `${config.public.apiBase}/search/movie?query=${query}&page=1&include_adult=false&api_key=${config.apiSecret}`
  );
});
