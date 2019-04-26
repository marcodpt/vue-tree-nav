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
home += '<h3>vue-tree-nav</h3>'
home += '<p>This is a live demo of what you can do with <b>vue-tree-nav</b></p>'
home += '<p>If you change the state you will see a random image just as an example</p>'
home += '<p>There are some themes to choose below!</p>'
home += '<p>You can complete customize the color and scale of the <b>vue-tree-nav</b> in the <b>settings</b> form</p>'
home += '<p>You can customize <b>vue-tree-nav</b> left, right and side panel links and dropdowns</p>'
home += '<p>At the end of the page you see the result json of you did that you can directly use <b>v-bind</b> prop in <b>vue-tree-nav</b></p>'
home += '<p>Please if you did something beautiful share with us! Send a pull request in file <b>colorschema.json</b></p>'
home += '<p>Any suggestion, help, bug fix, feature is deeply appreciate! Hope you enjoy it!</p>'
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
