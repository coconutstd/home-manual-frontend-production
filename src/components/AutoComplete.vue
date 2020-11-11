<template>
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      flat
      hide-no-data
      hide-details
      label="제품 번호를 입력하세요"
      solo-inverted
    ></v-autocomplete>
</template>

<script>
export default {
  props: ['codes'],
  data () {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
    }
  },
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    }
  },
  methods: {
    querySelections (v) {
      this.loading = true
      setTimeout(() => {
        this.items = this.codes.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style scoped>

</style>
