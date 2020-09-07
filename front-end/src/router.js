import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BlogsPage from './views/BlogsPage.vue'
import SingleBlog from './views/SingleBlog.vue'
import Intro from './views/Intro.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          component: Intro,
        },
        {
          path: 'blogs',
          name: 'blogsPage',
          component: BlogsPage,
        },
        {
          path: 'blogs/:id',
          name: 'singleBlog',
          component: SingleBlog,
        }
      ]
    },
    
  ]
})
