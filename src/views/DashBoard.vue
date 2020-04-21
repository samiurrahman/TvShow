<template>
  <div class="grey lighten-5">
    <v-container>
      <v-row no-gutters :class="$style.dashBoardWrapper">
        <v-col cols="12" sm="12" md="12" :class="$style.category">
          <!-- heading compoent -->
          <heading>Tv Shows</heading>

          <v-row no-gutters>
            <v-col
              :key="index"
              v-for="(shows, index) in getAllTvShows"
              cols="12"
              lg="2"
              md="2"
              sm="4"
              xs="12"
              :class="$style.shows"
            >
              <router-link
                :to="{ name: 'Details', params: { id: `${shows.id}` } }"
              >
                <!-- TV show Component -->
                <tvshows :tvShow="shows" />
              </router-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    heading: () => import('@/shared/Heading'), // Lazy Loading
    tvshows: () => import('@/components/TvShows') // Lazy Loading
  },
  computed: {
    ...mapGetters('dashboard', ['getAllTvShows'])
  },
  methods: {
    getTvShows() {
      this.$store.dispatch('dashboard/getTvShows')
    }
  },
  mounted() {
    this.getTvShows()
  }
}
</script>
<style lang="scss" module>
.dashBoardWrapper {
  margin-top: 2rem;
  .shows {
    margin-top: 2.5rem;
  }
}
</style>
