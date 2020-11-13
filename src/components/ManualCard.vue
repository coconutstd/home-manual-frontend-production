<template>
  <v-card
    :loading="loading"
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
        @click="linkToDetail"
      >
        링크
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  props: ['data'],
  name: 'ManualCard',
  methods: {
    linkToDetail () {

    }
  }

}
</script>

<style scoped>

</style>
