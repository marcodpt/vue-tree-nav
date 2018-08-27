module.exports = [
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
  }, {
    path: '/home',
    component: {
      template: '<h1>Home</h1>'
    }
  }, {
    path: '/numbers/:n1/:n2',
    component: {
      template: '<div><h1>Numbers</h1><p>{{$route.params.n1}}</p><p>{{$route.params.n2}}</p></div>'
    }
  }, {
    path: '*',
    redirect: '/colors/blue'
  }
]
