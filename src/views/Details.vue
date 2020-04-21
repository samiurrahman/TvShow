<template>
  <div class="grey lighten-5">
    <v-container>
      <v-row no-gutters>
        <v-col
          cols="12" 
          lg="9"
          md="9"
          sm="12"
          xs="12"
          v-if="Object.keys(getTvShow).length">

          <div :class="$style.singleShowDetails">
            <div :class="$style.ShowMedia">
              <img :src="getTvShow.image.medium" alt="actor" />
              <div :class="$style.ShowBody">
                <h5>
                  {{ getTvShow.name }} ({{
                    getTvShow.premiered.substring(0, 4)
                  }})
                </h5>
                <div :class="$style.ShowRatings">
                  <a :class="$style.rating"
                    >{{ getTvShow.rating.average }}/10</a
                  >
                </div>
                <div :class="$style.showBiodata">
                  <p>
                    <span :class="$style.title">Language</span>:
                    <span>{{ getTvShow.language }}</span>
                  </p>
                  <p>
                    <span :class="$style.title">Official Site</span>:
                    <span>{{ getTvShow.officialSite }}</span>
                  </p>
                  <p>
                    <span :class="$style.title">Premiered</span>:
                    <span>{{ getTvShow.premiered }}</span>
                  </p>
                  <p>
                    <span :class="$style.title">Runtime </span>:
                    <span>{{ getTvShow.runtime }}</span>
                  </p>
                  <p>
                    <span :class="$style.title">Status </span>:
                    <span>{{ getTvShow.status }}</span>
                  </p>
                  <p>
                    <span :class="$style.title">Type </span>:
                    <span>{{ getTvShow.type }}</span>
                  </p>
                  <p>
                    <span :class="$style.title">Genre</span>:
                    <span
                      v-for="genre in getTvShow.genres"
                      :key="genre"
                      :class="$style.genre"
                    >
                      {{ genre }}
                      <span>|</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- heading compoent -->
          <heading>Show Story</heading>
          <p :class="$style.showSummary" v-html="getTvShow.summary"></p>

          <!-- heading compoent -->
          <heading>Cast</heading>
          <div :class="$style.showCast">
            <div
              :class="$style.cast"
              v-for="(cast, index) in getTvShowCast"
              :key="index"
            >
              <a>
                <img
                  :src="cast.person.image && cast.person.image.medium"
                  alt="movie-post"
                />
                <span>{{ cast.person.name }}</span>
              </a>
            </div>
          </div>
        </v-col>

        <v-col
          cols="12"
          lg="3"
          md="3"
          sm="12"
          xs="12"
          v-if="getTvShowSeason.length"
          :class="$style.asid"
        >
          <widgetcontainer>
            <heading>Seasons</heading>
            <showinfo
              v-for="season in getTvShowSeason"
              :key="season.id"
              :name="`Season ${season.number}`"
              :img="season.image && season.image.medium"
              :subTitle="season.premiereDate"
            />
          </widgetcontainer>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Details',
  // props: ['id'], // Sweet approach
  data() {
    return {
      currentId: this.$route.params.id
    }
  },
  components: {
    heading: () => import('@/shared/Heading'), // Lazy Loading
    widgetcontainer: () => import('@/shared/WidgetContainer'), // Lazy Loading
    showinfo: () => import('@/components/ShowInfo') // Lazy Loading
  },
  computed: {
    ...mapGetters('detail', [
      'loading',
      'getTvShow',
      'getTvShowCast',
      'getTvShowSeason'
    ])
  },
  methods: {
    getTvShowDetail(id) {
      this.$store.dispatch('detail/getTvShowDetailsById', id)
      this.$store.dispatch('detail/getTvShowSeasonDetailsById', id)
    }
  },
  mounted() {
    this.getTvShowDetail(this.currentId)
  },
  watch: {
    // Need to watch route for re rendering same component
    $route(to) {
      this.currentId = to.params.id
      this.getTvShowDetail(this.currentId)
    }
  }
}
</script>
<style lang="scss" module>
.singleShowDetails {
  margin-bottom: 4rem;
  .ShowMedia {
    display: flex;
    align-items: flex-start;
    img {
      margin-right: 3rem;
      box-shadow: 0rem 0rem 5rem 0rem rgba(0, 58, 115, 0.08);
      width: 20rem;
      margin-top: 2rem;
    }
    .ShowBody {
      flex: 1;
      margin-top: 1.7rem;
      h5 {
        font-size: 2.2rem;
        font-weight: 400;
      }
      .ShowRatings {
        margin-bottom: 1.4rem;
        font-size: 1.4rem;
        .ratings {
          margin-right: 1rem;
          color: $ABNRatingsColor;
        }
      }
      .showBiodata {
        p {
          margin-bottom: 0.3rem;
          font-family: 'Open Sans', sans-serif;
          font-size: 1.4rem;
          line-height: 2.6rem;
          color: $Para;
          .title {
            width: 10.5rem;
            display: inline-block;
            margin-left: 0;
            font-weight: 500;
          }
          span {
            font-weight: 300;
            margin-left: 1.5rem;
          }
          .genre:last-child span {
            display: none;
          }
        }
      }
    }
  }
}
p.showSummary {
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: justify;
  padding-right: 3rem;
}
.showCast {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  .cast {
    text-align: center;
    margin-right: 3rem;
    width: 9rem;
    margin-bottom: 2rem;
    a {
      color: inherit;
      text-decoration: none;
      text-align: center;
      img {
        width: 8rem;
        display: block;
        margin: 0 auto;
        margin-bottom: 1rem;
        border-radius: 50%;
        height: 8rem;
      }
      span {
        font-size: 1.4rem;
      }
    }
  }
}
.asid {
  margin-top: 2rem;
}
</style>
