<template>
  <div :class="$style.item">
    <div :class="$style.seriesDetails">
      <div :class="$style.seriesThumb">
        <img :src="tvShow.image.medium" alt="img" />
      </div>
      <div :class="$style.seriesTicket">{{ tvShow.rating.average }}/10</div>
      <div :class="$style.seriesContent">
        <h5 :class="$style.seriesTitle">
          <a
            >{{ tvShow.name
            }}<span> ({{ tvShow.premiered.substring(0, 4) }})</span></a
          >
        </h5>
        <ul :class="$style.seriesGenre">
          <li v-for="genre in tvShow.genres" :key="genre">
            <a><span>|</span>{{ genre }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TvShows',
  props: ['tvShow']
}
</script>

<style lang="scss" module>
.item {
  padding-right: 2rem;
  margin-bottom: 2rem;
  .seriesDetails {
    position: relative;
    .seriesThumb {
      margin-bottom: 1rem;
      position: relative;
      -webkit-box-shadow: 0rem 0rem 10rem 0rem rgba(0, 58, 115, 0.15);
      box-shadow: 0rem 0rem 10rem 0rem rgba(0, 58, 115, 0.15);
      img {
        display: block;
        width: 100%;
      }
    }
    .seriesTicket {
      background: #ffab00;
      color: #ffffff;
      display: inline-block;
      padding: 0.3rem 1.5rem;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 0 2rem 2rem 0;
      margin-top: 2.9rem;
      font-size: 1.2rem;
    }
    .seriesContent {
      left: 2rem;
      bottom: 0;
      .seriesRating {
        margin-bottom: 0.4rem;
        i {
          color: #ffab00;
          padding-right: 1rem;
        }
      }
      .seriesTitle {
        margin-bottom: 0;
        font-size: 1.4rem;
        font-weight: 400;
      }
      .seriesGenre {
        list-style: none;
        padding-left: 0;
        margin-bottom: 2.5rem;
        li {
          display: inline-block;
          font-size: 1.1rem;
          span {
            padding: 0 0.3rem;
          }
          &:first-child span {
            display: none;
          }
        }
      }
    }
  }
}
</style>
