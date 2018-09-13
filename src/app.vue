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
      f: {},
      treeNav: {}
    },
    components: {
      'vue-tree-nav': treeNav
    },
    mounted: function () {
      this.reset()
      this.$data.f.side = JSON.stringify(this.$data.treeNav.side, undefined, 2)
      this.$data.f.left = JSON.stringify(this.$data.treeNav.left, undefined, 2)
      this.$data.f.right = JSON.stringify(this.$data.treeNav.right, undefined, 2)
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
        this.$set(this.$data.treeNav, 'left', [
          {
            label: 'Home',
            icon: 'home',
            href: '#/home'
          }
        ])
        this.$set(this.$data.treeNav, 'right', [
          {
            href: 'https://github.com/marcodpt/vue-tree-nav',
            icon: 'brands/github'
          }
        ])
        this.$set(this.$data.treeNav, 'side', [
          {
            label: 'Home',
            icon: 'home',
            href: '#/home'
          }, {
            label: 'Colors',
            children: [
              {
                label: 'Red',
                href: '#/colors/red'
              }, {
                label: 'Green',
                href: '#/colors/green'
              }, {
                label: 'Blue',
                href: '#/colors/blue'
              }
            ]
          }, {
            label: 'Scientists',
            children: [
              {
                label: 'Mathematicians',
                href: '',
                children: [
                  {
                    label: 'Euler',
                    href: '#/science/math/euler'
                  }, {
                    label: 'Gauss',
                    href: '#/science/math/gauss'
                  }, {
                    label: 'Riemann',
                    href: '#/science/math/riemann'
                  }
                ]
              }, {
                label: 'Physicists',
                children: [
                  {
                    label: 'Einstein',
                    href: '#/science/physics/einstein'
                  }, {
                    label: 'Newton',
                    href: '#/science/physics/newton'
                  }, {
                    label: 'Dirac',
                    href: '#/science/physics/dirac'
                  }
                ]
              }
            ]
          }, {
            icon: 'brands/github',
            label: 'Fork me at GitHub',
            href: 'https://github.com/marcodpt/vue-tree-nav',
          }
        ])
      },
      parse: function () {
        this.$data.treeNav.side = JSON.parse(this.$data.f.side)
        this.$data.treeNav.left = JSON.parse(this.$data.f.left)
        this.$data.treeNav.right = JSON.parse(this.$data.f.right)
      },
      feedback: function () {
        return JSON.stringify(this.$data.treeNav, undefined, 2)
      }
    }
  }).$mount('#app')
</script>
