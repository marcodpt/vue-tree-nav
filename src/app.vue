<script type="text/babel">
  import Vue from '../node_modules/vue/dist/vue.js'
  import VueRouter from 'vue-router'

  import treeNav from './index.vue'
  import routes from './routes.js'
  import colorschema from './colorschema.json'

  Vue.use(VueRouter)

  const router = new VueRouter({
    routes: routes
  })

  new Vue({
    router: router,
    data: {
      f: {schema: 'Default'},
      treeNav: {},
      schemas: Object.keys(colorschema)
    },
    components: {
      'vue-tree-nav': treeNav
    },
    mounted: function () {
      this.reset('Default')
      this.$data.f.side = JSON.stringify(this.$data.treeNav.side, undefined, 2)
      this.$data.f.left = JSON.stringify(this.$data.treeNav.left, undefined, 2)
      this.$data.f.right = JSON.stringify(this.$data.treeNav.right, undefined, 2)
    },
    methods: {
      reset: function (schema) {
        var b = colorschema[schema]
        b['style'] = 'position:fixed;width:100%;top:0;'+(b['style'] ? b['style'] : '')
        Object.keys(b).forEach(key => {
          this.$set(this.$data.treeNav, key, b[key])
        })

        this.$set(this.$data.treeNav, 'showPath', false)
        this.$set(this.$data.treeNav, 'sideScale', 1)
        this.$set(this.$data.treeNav, 'barScale', 1)
        this.$set(this.$data.treeNav, 'left', [
          {
            label: 'vue-tree-nav',
            icon: 'home',
            href: '#/home'
          }, {
            label: 'Animals',
            children: [
              {
                label: 'Elephant',
                href: '#/animals/elephant'
              }, {
                label: 'Lion',
                href: '#/animals/lion'
              }, {
                label: 'Bear',
                href: '#/animals/bear'
              }, {
                label: 'Eagle',
                href: '#/animals/eagle'
              }, {
                label: 'Wolf',
                href: '#/animals/wolf'
              }, {
                label: 'More',
                children: [
                  {
                    label: 'Tiger',
                    href: '#/animals/tiger'
                  }, {
                    label: 'Shark',
                    href: '#/animals/shark'
                  }, {
                    label: 'Even More',
                    children: [
                      {
                        label: 'Monkey',
                        href: '#/animals/monkey'
                      }
                    ]
                  }
                ]
              }
            ]
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
            label: 'vue-tree-nav',
            icon: 'home',
            href: '#/home'
          }, {
            label: 'Animals',
            children: [
              {
                label: 'Elephant',
                href: '#/animals/elephant'
              }, {
                label: 'Lion',
                href: '#/animals/lion'
              }, {
                label: 'Bear',
                href: '#/animals/bear'
              }, {
                label: 'Eagle',
                href: '#/animals/eagle'
              }, {
                label: 'Wolf',
                href: '#/animals/wolf'
              }
            ]
          }, {
            label: 'Other',
            children: [
              {
                label: 'Vehicles',
                href: '',
                children: [
                  {
                    label: 'Car',
                    href: '#/other/vehicles/car'
                  }, {
                    label: 'Bike',
                    href: '#/other/vehicles/bike'
                  }, {
                    label: 'Plane',
                    href: '#/other/vehicles/plane'
                  }, {
                    label: 'Boat',
                    href: '#/other/vehicles/boat'
                  }
                ]
              }, {
                label: 'Landscape',
                children: [
                  {
                    label: 'Mountain',
                    href: '#/other/landscape/mountain'
                  }, {
                    label: 'Desert',
                    href: '#/other/landscape/desert'
                  }, {
                    label: 'Ocean',
                    href: '#/other/landscape/ocean'
                  }, {
                    label: 'Forest',
                    href: '#/other/landscape/forest'
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
