# vue-tree-nav
Navigation menu with tree support build with vuejs

### [Live Demo](http://marcodpt.github.io/vue-tree-nav)

### Install
```
npm install --save vue-tree-nav
```

### Usage
```javascript
  import Vue from 'vue'
  import VueRouter from 'vue-router'

  import treeNav from 'vue-tree-nav'

  Vue.use(VueRouter)

  const router = new VueRouter({
    routes: routes
  })

  new Vue({
    router: router,
    components: {
      'vue-tree-nav': treeNav
    },
    data: {
      routes: [
        {
          name: 'Colors',
          children: [
            {
              name: 'Blue',
              href: '/colors/blue'
            }, {
              name: 'Yellow',
              href: '/colors/yellow'
            }, {
              name: 'Red',
              href: '/colors/red',
            }, {
              name: 'Green',
              href: '/colors/green'
            }
          ]
        }, {
          name: 'Pets',
          children: [
            {
              name: 'Dog',
              href: '/pets/dog'
            }, {
              name: 'Cat',
              href: '/pets/cat'
            }, {
              name: 'Bird',
              href: '/pets/bird'
            }, {
              name: 'Horse',
              href: '/pets/horse'
            }
          ]
        }
      ] 
    }
  }).$mount('#app')
```

```html
  <vue-tree-nav :routes="routes">
    <h4>
      Vue Tree Nav
    </h4>
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

### Props
routes
 - type: Array
 - default: []
 - items (Object):
   - children
     - type: Array
     - default: []
   - name
     - type: String
     - default: ""
   - href
     - type: String
     - default: ""

### Contribute
We need help! Our goals are:
 - CSS Themes out of the box
 - CSS transitions
 - Add tests
 - More usage examples and better home page
 - Add support to most browsers and devices

What is outside of the scope of this project
 - Use any css framework! Althought we want themes compatible!
