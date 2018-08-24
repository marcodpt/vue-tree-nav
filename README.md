# vue-tree-nav
 Navigation tree menu component with nice integration with vue-router 
 - Ready out of the box! 

### [Live Demo](http://marcodpt.github.io/vue-tree-nav)

### Install
```
npm install --save vue-tree-nav
```

### Usage 

##### without vue router
```javascript
  import Vue from 'vue'
  import treeNav from 'vue-tree-nav'

  new Vue({
    components: {
      'vue-tree-nav': treeNav
    },
    data: {
      routes: [
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
      ]
    }
  }).$mount('#app')
```

##### with vue router
  It will do some magic but will ignore routes with :variable or with redirect for obvious reasons

```javascript
  import Vue from 'vue'
  import VueRouter from 'vue-router'

  import treeNav from 'vue-tree-nav'

  Vue.use(VueRouter)

  var routes = [
    {
      path: '/colors',
      component: {
        template: '<div><h1>Color</h1><router-view></router-view></div>'
      },
      children: [
        {
          path: 'blue',
          component: {
            template: '<h3>Blue</h3>'
          }
        }, {
          path: 'yellow',
          component: {
            template: '<h3>Yellow</h3>'
          }
        }, {
          path: 'red',
          component: {
            template: '<h3>Red</h3>'
          }
        }, {
          path: 'green',
          component: {
            template: '<h3>Green</h3>'
          }
        }
      ]
    }, {
      path: '/pets',
      component: {
        template: '<div><h1>Pet</h1><router-view></router-view></div>'
      },
      children: [
        {
          path: 'dog',
          component: {
            template: '<h3>Dog</h3>'
          }
        }, {
          path: 'cat',
          component: {
            template: '<h3>Cat</h3>'
          }
        }, {
          path: 'bird',
          component: {
            template: '<h3>Bird</h3>'
          }
        }, {
          path: 'horse',
          component: {
            template: '<h3>Horse</h3>'
          }
        }
      ]
    }
  ]

  const router = new VueRouter({
    routes: routes
  })

  new Vue({
    router: router,
    components: {
      'vue-tree-nav': treeNav
    },
    data: {
      routes: routes 
    }
  }).$mount('#app')
```

##### HTML usage
  If you are not using vue router you should pass a string with the current location
  maybe window.location.href do the job
  
```html
  <vue-tree-nav :routes="routes" :location="$route.fullPath">
    <h3 slot-scope="{path}">
      Vue Tree Nav <small>{{path}}</small>
    </h3>
    <template slot="right">
      <a href="https://github.com/marcodpt/vue-tree-nav">
        GitHub
      </a>
    </template>
  </vue-tree-nav>
```

### Slots
 - left
 - right
 - default (center)

### Slot scope
 - path
   - type: String
   - description: Path of the current state based on label of the state

### Props
 - routes
   - type: Array
   - default: []
   - items (Object):
     - children
       - type: Array
       - default: []
     - label
       - type: String
       - default: ""
     - href
       - type: String
       - default: ""
 - location
   - type: String
   - default: ""
   - description: Current location use $route.fullPath with vue-router or window.location.href without, it is useful for highlight current state in the menu side bar and create current path variable for slot

### Contribute
We need help! Our goals are:
 - CSS Themes out of the box
 - CSS transitions
 - Add tests
 - More usage examples and better home page
 - Add support to most browsers and devices

What is outside of the scope of this project
 - Use any css framework! Althought we want themes compatible!
