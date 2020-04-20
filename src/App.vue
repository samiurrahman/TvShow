<template>
  <v-app>
    <AppHeader />

    <div :class="$style.search">
      <search />
    </div>

    <main>
      <router-view />
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    AppHeader: () => import('@/shared/AppHeader'), // Lazy Loading
    search: () => import('@/shared/Search') // Lazy Loading
  }
}
</script>
<style lang="scss" module>
.search {
  padding: 2rem 0;
  border-bottom: 0.1rem solid #eee;
  @include flexCenter;
}
</style>
