<template>
  <div :class="$style.widget">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'widgetcontainer'
}
</script>

<style lang="scss" module>
.widget {
  -webkit-box-shadow: 0rem 0rem 3rem 0rem rgba(0, 58, 115, 0.1);
  box-shadow: 0rem 0rem 3rem 0rem rgba(0, 58, 115, 0.1);
  padding: 3.5rem 3rem;
  margin-bottom: 6rem;
}
</style>
