<template>
  <div style="margin-top: 100px">
    <blog-list />
  </div>
</template>

<script>
import BlogList from '@/components/BlogList';

export default {
  name: 'home',
  components: {
    BlogList,
  },
  data () {
    return {
      
    }
  }
}
</script>