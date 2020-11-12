<template>
  <div>

  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  components: {
  },
  computed: {
    ...mapState({
      custom: 'custom'
    })
  },
  created () {
    this.FETCH_CUSTOM(1)
  },
  methods: {
    ...mapActions([
      'FETCH_CUSTOM'
    ])
  }
}
</script>

<style>

</style>
