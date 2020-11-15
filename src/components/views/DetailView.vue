<template>
<div>
  <v-card
    class="my-4 mx-4"
    height="100%"
    rounded
  >
    <v-card-title>
      제품명 {{ manual.product_name}}
    </v-card-title>
    <v-row
      align="center"
    >
      <v-img v-if="isImage" :src="manual.product_image_link">
      <v-img v-else :src="src/assets/default_printer.png">이미지가 없습니다</v-img>
    </v-row>
    <v-card-text>
      <v-btn :href="manual.product_detail_page_link" target="_blank">페이지링크</v-btn>
    </v-card-text>
  </v-card>

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
      return this.manual.product_image_link !== 0
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
