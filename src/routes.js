module.exports = [
  {
    path: '/home',
    component: {
      template: '<h3>Edit fields below and see the result in navbar</h3>'
    }
  }, {
    path: '/:section',
    component: {
      template: '<div><h1>{{$route.params.section}}</h1></div>'
    }
  }, {
    path: '/:section/:page',
    component: {
      template: '<div><h1>{{$route.params.section}}</h1><h3>{{$route.params.page}}</h3></div>'
    }
  }, {
    path: '/:section/:page/:subpage',
    component: {
      template: '<div><h1>{{$route.params.section}}</h1><h3>{{$route.params.page}}</h3><h5>{{$route.params.subpage}}</h5></div>'
    }
  }, {
    path: '*',
    redirect: '/home'
  }
]
