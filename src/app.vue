<script type="text/babel">
  import Vue from '../node_modules/vue/dist/vue.js'
  import VueRouter from 'vue-router'

  import bar from './index.vue'
  import routes from './routes.js'

  Vue.use(VueRouter)

  const router = new VueRouter({
    routes: routes
  })

  new Vue({
    router: router,
    components: {
      'bar': bar
    },
    data: {
      bar: {
        routes: routes,
        label: 'Vue Tree Nav',
        sublabel: 'marcodpt',
        icon: 'user',
        actions: [
          {
            icon: "power-off",
            label: "github",
            onClick: function () {
              window.location.href = "https://github.com/marcodpt/vue-tree-nav"
            }
          }
        ]
      }
    }
  }).$mount('#app')
</script>
