module.exports = [
  {
    label: 'Colors',
    path: '/colors',
    component: {
      template: '<h1>Color</h1><router-view></router-view>'
    },
    children: [
      {
        label: 'Blue',
        path: 'blue',
        component: {
          template: '<h3>Blue</h3>'
        }
      }, {
        label: 'Yellow',
        path: 'yellow',
        component: {
          template: '<h3>Yellow</h3>'
        }
      }, {
        label: 'Red',
        path: 'red',
        component: {
          template: '<h3>Red</h3>'
        }
      }, {
        label: 'Green',
        path: 'green',
        component: {
          template: '<h3>Green</h3>'
        }
      }
    ]
  }, {
    path: '*',
    redirect: '/colors/blue'
  }
]
