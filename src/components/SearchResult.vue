<template>
  <div>
    <v-container fluid>
      <v-data-iterator
        :items="Array.from(searchResults)"
        hide-default-footer
        >
          <template v-slot:header>
            <v-toolbar
              class="mb-2"
              color="indigo darken-5"
              dark
              flat
              >
              <v-toolbar-title>"{{keyword}}" 검색결과입니다</v-toolbar-title>
            </v-toolbar>
          </template>

          <template v-slot:default="props">
            <v-row>
              <v-col
                v-for="item in props.items"
                :key="item.product_code"
                cols="12"
                sm="6"
                md="4"
                lg="3"
                >
                <v-card
                  class="mx-auto"
                  max-width="400"
                >
                  <v-img :src="item.fields.product_image_link"></v-img>
                  <v-card-title class="subheading font-weight-bold">
                    {{item.fields.product_code}}
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-list dense>
                    <v-list-item
                      >
                      <v-list-item-content>
                        <v-card-actions>
                          <v-btn color="orange" text @click.prevent="linkToDetail(item.fields.product_code)">상세페이지</v-btn>
                        </v-card-actions>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </template>

      </v-data-iterator>
    </v-container>
<!--    <ManualCard :data="item" v-for="item in searchResults" :key="item.id"></ManualCard>-->
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import DataResult from './views/DataResult.vue'
import ManualCard from './ManualCard.vue'

export default {
  data () {
    return {
      limit: 0
    }
  },
  created () {
    this.FETCH_RESULTS({keyword: this.$route.params.keyword})
  },
  computed: {
    ...mapState({
      searchResults: 'searchResults',
      keyword: 'keyword'
    }),
    isSearchResult () {
      return this.searchResults.length
    }
  },
  components: {
    DataResult,
    ManualCard
  },
  methods: {
    linkToDetail (code) {
      this.$router.push(`/detail/${code}`)
    },
    ...mapActions(['FETCH_RESULTS'])
  }
}
</script>

<style scoped>

.search-title{
  font-size: 20px;
}

.v-data-iterator{
  width: 100%;
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
