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
      side: routes.concat([
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
      ]),
      left: [
        {
          label: 'Home',
          icon: 'home',
          href: '#/home'
        }
      ],
      right: [
        {
          href: 'https://github.com/marcodpt/vue-tree-nav',
          icon: 'brands/github'
        }
      ],
      treeNav: {}
    },
    components: {
      'vue-tree-nav': treeNav
    },
    mounted: function () {
      this.reset()
    },
    methods: {
      reset: function () {
        this.$set(this.$data.treeNav, 'showPath', true)
        this.$set(this.$data.treeNav, 'sideScale', 1)
        this.$set(this.$data.treeNav, 'barScale', 1)
        this.$set(this.$data.treeNav, 'bgColor', '#f3f3f3')
        this.$set(this.$data.treeNav, 'fontColor', '#666666')
        this.$set(this.$data.treeNav, 'borderColor', '#e7e7e7')
        this.$set(this.$data.treeNav, 'hoverColor', '#dddddd')
        this.$set(this.$data.treeNav, 'activeColor', '#000000')
      },
      feedback: function () {
        return JSON.stringify(this.$data.treeNav, undefined, 2)
      }
    }
  }).$mount('#app')
</script>
