<template>
<div>
  <pre>
    {{ manual }}
  </pre>
  <img :src="manual.product_image_link" v-if="isImage" width="300px">
  <span v-else>이미지가 없습니다</span>
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

</style>
