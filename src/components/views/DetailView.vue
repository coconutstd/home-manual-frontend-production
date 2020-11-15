<template>
<div>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card
          rounded
        >
          <v-card-title>
            제품명 {{ manual.product_name}}
          </v-card-title>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-img v-if="isImage" src="assets/default_printer.png">이미지가 없습니다</v-img>
                <v-img aspect-ratio="1" v-else :src="manual.product_image_link"></v-img>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </v-list>
          <v-card-text>
            <v-chip>{{manual.category}}</v-chip>
            <v-btn :href="manual.product_detail_page_link" target="_blank">페이지링크</v-btn>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-container>


</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  created () {
    this.FETCH_DETAIL({code: this.$route.params.mcode})
  },
  computed: {
    ...mapState({
      manual: 'manual'
    }),
    isImage () {
      return this.manual.product_image_link === 0
    }
  },
  methods: {
    ...mapActions([
      'FETCH_DETAIL'
    ])
  }
}
</script>


<style scoped>
@media screen and (min-width: 768px){

}
</style>
