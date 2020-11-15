<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title>{{ data.fields.product_code }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-chip>{{ data.fields.category }}</v-chip>
      </v-row>

    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="linkToDetail(data.fields.product_code)"
      >
        링크
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: ['data'],
  name: 'ManualCard',
  methods: {
    ...mapActions(['FETCH_DETAIL']),
    linkToDetail (code) {
      console.log(code)
      this.$router.push(`/detail/${code}`)
    }
  }

}
</script>

<style scoped>

</style>
