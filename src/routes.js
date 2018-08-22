module.exports = [
  {
    name: 'Colors',
    path: '/colors',
    component: {
      template: '<div><h1>Color</h1><router-view></router-view></div>'
    },
    children: [
      {
        name: 'Blue',
        path: 'blue',
        href: '/colors/blue',
        component: {
          template: '<h3>Blue</h3>'
        }
      }, {
        name: 'Yellow',
        path: 'yellow',
        href: '/colors/yellow',
        component: {
          template: '<h3>Yellow</h3>'
        }
      }, {
        name: 'Red',
        path: 'red',
        href: '/colors/red',
        component: {
          template: '<h3>Red</h3>'
        }
      }, {
        name: 'Green',
        path: 'green',
        href: '/colors/green',
        component: {
          template: '<h3>Green</h3>'
        }
      }
    ]
  }, {
    name: 'Pets',
    path: '/pets',
    component: {
      template: '<div><h1>Pet</h1><router-view></router-view></div>'
    },
    children: [
      {
        name: 'Dog',
        path: 'dog',
        href: '/pets/dog',
        component: {
          template: '<h3>Dog</h3>'
        }
      }, {
        name: 'Cat',
        path: 'cat',
        href: '/pets/cat',
        component: {
          template: '<h3>Cat</h3>'
        }
      }, {
        name: 'Bird',
        path: 'bird',
        href: '/pets/bird',
        component: {
          template: '<h3>Bird</h3>'
        }
      }, {
        name: 'Horse',
        path: 'horse',
        href: '/pets/horse',
        component: {
          template: '<h3>Horse</h3>'
        }
      }
    ]
  }, {
    path: '*',
    redirect: '/colors/blue'
  }
]
