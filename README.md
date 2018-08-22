# vue-tree-nav
Navigation menu with tree support build with vuejs

### [Live Demo](http://marcodpt.github.io/vue-tree-nav)

### Install
```
npm install --save vue-tree-nav
```

### Usage
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
```javascript
var routes = [
  {
    label: 'Colors',
    children: [
      {
        label: 'Blue',
        href: '/colors/blue'
      }, {
        label: 'Yellow',
        href: '/colors/yellow'
      }, {
        label: 'Red',
        href: '/colors/red',
      }, {
        label: 'Green',
        href: '/colors/green'
      }
    ]
  }, {
    label: 'Pets',
    children: [
      {
        label: 'Dog',
        href: '/pets/dog'
      }, {
        label: 'Cat',
        href: '/pets/cat'
      }, {
        label: 'Bird',
        href: '/pets/bird'
      }, {
        label: 'Horse',
        href: '/pets/horse'
      }
    ]
  }
]
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
   - label
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
