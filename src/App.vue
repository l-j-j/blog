<template>
  <div id="app">
    <Header/>
    <router-view :style="componentsWidth"/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  data(){
    return {
      componentsWidth:{
        maxWidth:'980px',
        margin:'auto',
        paddingTop:'1.2rem'
      }
    }
  },
  components:{
    Header,
  }
}
</script>

<style lang="stylus">

</style>
