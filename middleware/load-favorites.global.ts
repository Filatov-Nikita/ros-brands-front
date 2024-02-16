export default defineNuxtRouteMiddleware(to => {
  if(process.server) return;
  const favStore = useFavoritesStore();
  favStore.restore();
});
