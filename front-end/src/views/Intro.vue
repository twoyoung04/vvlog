<template>
  <div>
    <video-intro />
    <recent-blogs />
    <contact />

  </div>
</template>

<script>
// @ is an alias to /src
import RecentBlogs from '@/components/RecentBlogs';
import VideoIntro from '@/components/VideoIntro';
import Contact from '@/components/Contact';

                         
import {
  
} from 'mdbvue'

export default {
  name: 'home',
  components: {
    VideoIntro,
    RecentBlogs,
    Contact,
  },
  data () {
    return {
      
    }
  }
}
</script>