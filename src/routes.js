template = function (P) {
  view = '<fieldset>'
  view += '<legend>Current View: '
  P.forEach(p => {
    view += '/{{$route.params.'+p+'}}'
  })
  view += '</legend>'
  view += '<img :src="\'https://source.unsplash.com/300x300/?\' + $route.params.x">'
  view += '</fieldset>'

  return view
} 

home = '<fieldset>'
home += '<legend>Current View: /home</legend>'
home += '<h3>Vue tree nav home</h3>'
home += '<p>Change menu page and see a random nice image!</p>'
home += '<p>Pay attention to menu top bar when change page!</p>'
home += '<p>You can complete customize the menu bar and side bar changing the parameters down!</p>'
home += '<p>If you like your result just copy the json at the end of the page and use it in vue-tree-nav</p>'
home += '<p>Please if you did something beautiful share with us! Send a pull request in file <b>colorschema.json</b></p>'
home += '</fieldset>'


module.exports = [
  {
    path: '/home',
    component: {
      template: home
    }
  }, {
    path: '/:x',
    component: {
      template: template(['x'])
    }
  }, {
    path: '/:y/:x',
    component: {
      template: template(['y', 'x'])
    }
  }, {
    path: '/:z/:y/:x',
    component: {
      template: template(['z', 'y', 'x'])
    }
  }, {
    path: '*',
    redirect: '/home'
  }
]
