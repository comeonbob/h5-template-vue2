<template>
  <div id="app">
    <!-- pc -->
    <div id="pc" v-if="isPC">
      <ChoiceDevice/>
    </div>
    <!-- mobile -->
    <div id="mobile" v-else>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>
<script>
  import ChoiceDevice from './components/ChoiceDevice/ChoiceDevice'
  import {IsPC} from './utils/common.js'
  export default {
    name: 'App',
    data () {
      return {
        isPC: IsPC()
      }
    },
    components: {
      ChoiceDevice
    }
  }
</script>
<style scoped lang="scss">
  #app {
  }
  #mobile {
    font-size: 24px;
    text-align: center;
    #nav {
      margin-top: .15rem;
    }
  }
</style>
