<template>
  <div class="home">
    <navbar />
    <router-view></router-view>
    <my-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar';
import MyFooter from '@/components/Footer';
                         
import {
  
} from 'mdbvue'

export default {
  name: 'home',
  components: {
    Navbar,
    MyFooter,
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.home {
  background:#fff;
}
.block {
  /* padding-top: 1rem; */
}
.wrapper {
  padding: 2rem 0;
}
.bg {
  background-color: #fbfbfb;
}
.line {
  border-top: solid 1px #dedede;
  border-bottom: solid 1px #dedede;
}
.center {
  text-align: center;
}

</style>
