<template>
  <div :class="$style.showInfo">
    <img :src="img" :alt="name" />
    <div :class="$style.showInfoBody">
      <h5 :class="$style.title">{{ name }}</h5>
      <p>{{ subTitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showinfo',
  props: {
    name: {
      default: ''
    },
    img: {
      default: ''
    },
    subTitle: {
      default: ''
    }
  }
}
</script>

<style lang="scss" module>
.showInfo {
  border-bottom: 0.1rem dashed $Info;
  padding-top: 2.3rem;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  img {
    width: 5rem;
    margin-right: 1rem;
    box-shadow: rem 0rem 5rem 0rem rgba(0, 58, 115, 0.08);
  }
  .showInfoBody {
    flex: 1;
    .title {
      font-size: 1.8rem;
      margin-top: 0.7rem;
      font-weight: 400;
    }
    p {
      color: $Info;
    }
  }
  &:last-child {
    border: none;
    padding-bottom: 0;
  }
}
</style>
