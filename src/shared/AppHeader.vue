<template>
  <header :class="$style.header">
    <div :class="$style.logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" module>
.header {
  border-bottom: 0.1rem solid $Border;
  @include flexCenter;
  padding: 1rem 1rem 0 1rem;
  .logo {
    img {
      width: 100%;
    }
  }
}
</style>
