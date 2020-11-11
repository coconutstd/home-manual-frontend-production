<template>
  <div id="app">
    <div class="background">
      <GlobalNavigation></GlobalNavigation>
      <router-view class="container"></router-view>
    </div>
  </div>
</template>

<script>
import GlobalNavigation from './components/GlobalNavigation.vue'

export default {
  name: 'app',
  components: {GlobalNavigation},
  data () {
    return {

    }
  }
}
</script>

<style>

@font-face {
  font-family: "omni_020";
  src:url("assets/font/omni_020.ttf") format("truetype");
}

@font-face {
  font-family: "omni_030";
  src:url("assets/font/omni_030.ttf") format("truetype");
}

body{
  background-color: #D8F2E2;
  height: 100vh;
  position: relative;
  z-index:1;
}

/*.background {*/
/*  position: relative;*/
/*  z-index:1;*/
/*}*/

body:after{
  background-image: url('assets/background_2.jpg');
  background-size: cover;
  display: block;
  top:0;
  left:0;
  position:absolute;
  opacity:0.2!important;
  filter:alpha(opacity=50);
  z-index:-1;
  content:"";
  width:100%;
  height:100%;
}

</style>
