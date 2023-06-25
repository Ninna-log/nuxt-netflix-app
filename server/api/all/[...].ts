export default defineEventHandler((event) => {
  const id = [...(event.node.req.url as any).split("/")].pop();
  const config = useRuntimeConfig();
  return $fetch(
    `${config.public.apiBase}/movie/${id}?api_key=${config.apiSecret}`
  );
});
