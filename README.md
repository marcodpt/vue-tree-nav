# vue-tree-nav
 Navigation tree menu component with nice integration with vue-router 
 - Ready out of the box! 

### [Live Demo](http://marcodpt.github.io/vue-tree-nav)

## Install
```
npm install --save vue-tree-nav
```

## Usage 

```javascript
  import Vue from 'vue'
  import treeNav from 'vue-tree-nav'

  new Vue({
    components: {
      'vue-tree-nav': treeNav
    },
    data: {
      side: [
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
      ],
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
      ]
    }
  }).$mount('#app')
```

```html
  <vue-tree-nav
    :side="side"
    :left="left"
    :right="right"
  ></vue-tree-nav>
```
   - If you pass directly your vue-router routes in **side**, **left** or **right** prop it will do some magic, ignoring routes with :variable and redirect for obvious reasons

### Props
 - side
   - type: Array
   - default: []
   - description: Side navigation menu, see section **Items** below
 - left
   - type: Array
   - default: []
   - description: Top bar on the left, see section **Items** below
 - right
   - type: Array
   - default: []
   - description: Top bar on the right, see section **Items** below
 - location
   - type: String
   - default: ""
   - description: Current location use $route.fullPath with vue-router or window.location.href without
 - showPath
   - type: Boolean
   - default: true
   - description: show current path near hamburguer menu
 - barScale
   - type: Number
   - default: 1
   - description: scale of icons and font in top bar
 - sideScale
   - type: Number
   - default: 1
   - description: scale of icons and font in side bar
 - bgColor
   - type: String
   - default: '#f3f3f3'
   - description: background color of top and side bar
 - fontColor
   - type: String
   - default: '#666666'
   - description: font color of top and side bar
 - borderColor
   - type: String
   - default: '#e7e7e7'
   - description: border color and nasted tree levels border
 - hoverColor
   - type: String
   - default: '#dddddd'
   - description: background color in case of hovering any link
 - activeColor
   - type: String
   - default: '#000000'
   - description: active font color of top and side bar, active items will change font color

### Items of side, left, right
   - items (Object):
     - label
       - type: String
       - default: ""
       - description: label that appear in the screen
     - href
       - type: String, Function
       - default: ""
       - description: string it will be a normal link, otherwise it will call the function
     - icon
       - type: String
       - default: ""
       - description: One of [Font Awesome Icons](https://fontawesome.com/icons?d=gallery&s=solid&m=free)
     - children
       - type: Array
       - default: []
       - description: Again it is an array of items, in the side menu you can go infinity depth, in the top bar it will ignore, soon we will create a dropdown

## Contribute
We need help! Our goals are:
 - CSS Themes out of the box
 - CSS transitions
 - Add tests
 - More usage examples and better home page
 - Add support to most browsers and devices

What is outside of the scope of this project:
 - Use any css framework! Althought we want themes compatible!
