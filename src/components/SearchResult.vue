<template>
  <div data-app>
<!--    <DataResult :items="Array.from(searchResults)"></DataResult>-->
    <ManualCard :data="item" v-for="item in searchResults" :key="item.id"></ManualCard>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import DataResult from './views/DataResult.vue'
import ManualCard from './ManualCard.vue'

export default {
  data () {
    return {
      limit: 0
    }
  },
  computed: {
    ...mapState({
      searchResults: 'searchResults',
      keyword: 'keyword'
    }),
    isSearchResult () {
      return this.searchResults.length
    },
  },
  components: {
    DataResult,
    ManualCard
  }
}
</script>

<style scoped>

.search-title{
  font-size: 20px;
}

.table h2{
  font-size: 10px;
}

@media screen and (min-width: 768px){
  .search-title{
    font-size: 30px;
  }

  .table h2{
    font-size: 25px;
  }
}
</style>
