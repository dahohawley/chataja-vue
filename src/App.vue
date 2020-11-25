<template>
  <div id="app">
    <Navbar/>
    <div class="container mb-2">
      <router-view/>
    </div>
  </div>
</template>


<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data(){
    return {
      messages : [
        {
          id : 1,
          from : 1,
          timestamps : new Date(),
          message : "Hello world"
        },
        {
          id : 2,
          from : 1,
          timestamps : new Date(),
          message : "Hello world"
        }
      ]
    }
  }
}
</script>

<style>
body { 
  background: #eee;
}
</style>
