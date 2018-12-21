<template>
  <div id="app">
    <Header/>
    <router-view :style="componentsWidth"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  data(){
    return {
      componentsWidth:{
        maxWidth:'1170px',
        margin:'0 auto'
      }
    }
  },
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="stylus">

</style>
