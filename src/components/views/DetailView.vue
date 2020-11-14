<template>
<div>
  <pre>
    {{ manual }}
  </pre>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      manual: 'manual'
    })
  }
}
</script>

<style scoped>

</style>
