<template>
  <div>
    {{test}}
    <router-view></router-view>
  </div>
</template>

<script>

                // eslint-disable-next-line
import { fetch } from './api'

export default {
  name: 'app',
  data() {
    return {
      test: null
    }
  },
  mounted() {
    // fetch('/thread.php?fid=459&page=1&lite=js').then(result => {
    //   this.test=JSON.stringify(result)
    // })
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
