<template>
  <div :class="$style.search">
    <input
      type="text"
      placeholder="Search"
      v-model="tvShowName"
      v-on:input="getResults"
    />
    <ul :class="$style.searchResult" v-if="getResult.length">
      <li
        v-for="(result, index) in getResult"
        :key="index"
        @click="goToDetailPage(result.show.id)"
      >
        {{ result.show.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Search',
  data() {
    return {
      tvShowName: ''
    }
  },
  computed: {
    ...mapGetters(['getResult'])
  },
  methods: {
    goToDetailPage(id) {
      this.tvShowName = ''
      this.$store.dispatch('clearResult')
      this.$router.push({ name: 'Details', params: { id: `${id}` } })
    },
    getResults() {
      this.$store.dispatch('getResult', this.tvShowName)
    }
    // We can improves performance using Debouncing technique
  }
}
</script>

<style lang="scss" module>
.search {
  position: relative;
  input {
    border: 0.1rem solid $ABNLightColor;
    width: 40vw;
    font-size: 1.6rem;
    height: 3.4rem;
    border-radius: 2rem;
    padding-left: 1rem;
    color: $ABNLightColor;
    outline: none;
    &:focus {
      box-shadow: 0rem 0.1rem 0.4rem $ABNLightColor;
    }
  }
  .searchResult {
    position: absolute;
    width: 100%;
    background-color: #fff;
    color: $Para;
    font-size: 1.2rem;
    padding-left: 0;
    border: 0.1rem solid $Para;
    border-radius: 2rem;
    z-index: 100;
    li {
      list-style: none;
      padding: 1rem;
      cursor: pointer;
      text-transform: capitalize;
      border-radius: 2rem;
      &:hover {
        background-color: $ABNLightColor;
        color: #fff;
      }
    }
  }
}
</style>
