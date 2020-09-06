<template>
  <div class="home">
    <navbar />
    <video-intro />
    <recent-blogs />

    <my-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar';
import MyFooter from '@/components/Footer';
import RecentBlogs from '@/components/RecentBlogs';
import VideoIntro from '@/components/VideoIntro';

                         
import {
  
} from 'mdbvue'

export default {
  name: 'home',
  components: {
    Navbar,
    MyFooter,
    VideoIntro,
    RecentBlogs,
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
.blank {
  height:0;
  margin: 3rem 0;
}
.block {
  /* padding-top: 1rem; */
}
.wrapper {
  padding: 2rem 0;
}
.content-wrapper {
  padding: 1rem;
}
.header-button {
  margin-top: 200px;
  color: #9f14db;
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

.adventage h1{
  color: #ebb013;
}
.block-header {
  text-align: center;
}
.narrow {
  margin: 0 2rem;
}
.purple-text {
  color: #9f14db;
}
</style>
