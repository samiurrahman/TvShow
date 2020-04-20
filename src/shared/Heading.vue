<template>
  <div :class="$style.heading">
    <h1><slot></slot></h1>
  </div>
</template>

<script>
export default {
  name: 'Heading'
}
</script>

<style lang="scss" module>
.heading {
  h1 {
    position: relative;
    padding-left: 1.7rem;
    font-size: 2.6rem;
    font-weight: 400;
    line-height: 1.4;
    color: $ABNLightColor;
    &::after {
      content: '';
      position: absolute;
      height: 3.5rem;
      width: 0.3rem;
      left: 0;
      top: 0;
      background: $ABNLightColor;
    }
  }
}
</style>
