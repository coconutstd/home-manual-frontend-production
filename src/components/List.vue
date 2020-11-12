<template>
  <div class="list">
    <div class="list-header">
      <div class="list-header-title">{{ data.title }}</div>
    </div>
    <AddCard></AddCard>
  </div>
</template>

<script>
import AddCard from './AddCard'
export default {
  components: {AddCard},
  props: ['data']
}
</script>

<style>
.list {
  background-color: #e2e4e6;
  border-radius: 3px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  vertical-align: top;
  width: 100%;
  max-height: 100%;
}

.list-header{
  flex: 0 0 auto;
  padding: 10px 8px 8px;
  position: relative;
}

.list-header-title{
  font-family: "omni_020";
}

.add-card-btn {
  flex: 0 0 auto;
  display: block;
  padding: 8px 10px;
  color: #8c8c8c;
  text-decoration: none;
}
.add-card-btn:focus,
.add-card-btn:hover {
  background-color: rgba(0,0,0, .1);
}
</style>
