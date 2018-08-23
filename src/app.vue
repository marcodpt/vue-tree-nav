<script type="text/babel">
  import Vue from '../node_modules/vue/dist/vue.js'
  import VueRouter from 'vue-router'

  import treeNav from './index.vue'
  import routes from './routes.js'

  Vue.use(VueRouter)

  const router = new VueRouter({
    routes: routes
  })

  new Vue({
    router: router,
    data: {
      routes: routes.concat([
        {
          label: 'pi',
          href: '#/numbers/3/14'
        }, {
          label: 'e',
          href: '#/numbers/2/7'
        }, {
          label: 'integer',
          children: [
            {
              label: 'natural',
              children: [
                {
                  label: 'even',
                  href: '#/numbers/4/6'
                }, {
                  label: 'prime',
                  href: '#/numbers/5/7'
                }
              ]
            }, {
              label: 'minus three',
              href: '#/numbers/_/3'
            }
          ]
        }
      ])
    },
    components: {
      'vue-tree-nav': treeNav
    }
  }).$mount('#app')
</script>
