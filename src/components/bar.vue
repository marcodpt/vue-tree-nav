<script type="text/babel">
  import tree from './tree.vue'
  import overBody from 'vue-over-body'

  module.exports = {
    name: 'vue-tree-nav',
    components: {
      'tree': tree,
      'vue-over-body': overBody
    },
    props: {
      routes: {
        type: Array,
        default: () => []
      },
      location: {
        type: String,
        default: ''
      }
    },
    data: function () {
      return {
        sideBar: 0,
        path: '',
        tree: [],
        links: {},
      }
    },
    mounted: function () {
      this.setRoutes()
    },
    methods: {
      open: function () {
        this.$data.sideBar += 1;
      },
      close: function () {
        this.$data.sideBar = 0;
      },
      setLocation: function () {
        this.$data.path = ''
        Object.keys(this.$data.links).sort().forEach(key => {
          if (`#${this.location}`.indexOf(key) !== -1) {
            this.$data.path = this.$data.links[key]
          }
        })
        this.close()
      },
      setRoutes: function () {
        this.$data.tree = []
        this.$data.links = {}
        this.transverse(this.routes, this.$data.tree, '', '#')
        this.setLocation ()
      },
      transverse: function (Input, Output, label, path) {
        Input.forEach(input => {
          var abs = input.path && input.path.substr(0, 1) === '/'

          var newLabel = input.label || input.name || (abs ? input.path.substr(1) : input.path)
          if (newLabel && (input.path || '').indexOf(':') === -1 && !input.redirect) {
            Output.push({})
            var i = Output.length - 1

            Output[i].label = newLabel
            newLabel = (label ? `${label} / ` : '') + newLabel

            var newPath = abs ? `#${input.path}` : `${path || ''}/${input.path}`
            if (input.children) {
              Output[i].children = []
              this.transverse(input.children, Output[i].children, newLabel, newPath)
            } else {
              Output[i].href = input.href || newPath
              this.$data.links[input.href || newPath] = newLabel
            }
          }
        })
      }
    },
    watch: {
      location: function () {
        this.setLocation()
      },
      routes: function () {
        this.setRoutes()
      }
    }
  }
</script>

<template>
  <div>
    <div class="tree_nav_bar">
      <div class="tree_nav_subbar" style="text-align:left;">
        <a v-if="tree.length" @click="open" style="font-size:250%">&#8801;</a>
        <slot name="left" :path="path"></slot>
      </div>
      <div class="tree_nav_subbar" style="text-align:center;">
        <slot :path="path"></slot>
      </div>
      <div class="tree_nav_subbar" style="text-align:right;">
        <slot name="right" :path="path"></slot>
      </div>
    </div>
    <vue-over-body v-if="tree.length" :open="sideBar" before="tree_nav_before" after="tree_nav_after">
      <tree :close="close"/>
      <tree v-for="leaf in tree" v-bind="leaf" :location="location"/>
      <div style="height:20px"></div>
    </vue-over-body>
  </div>
</template>

<style>
  .tree_nav_bar {
    display: table; 
    background-color:#eee;
    position: relative;
    width: 100%;
    color: #4a4a4a;
    margin: 0 0 20px 0;
  }

  .tree_nav_subbar {
    display: table-cell;
    vertical-align: middle;
    padding: 0 15px;
    margin: 0;
  }

  .tree_nav_bar a {
    color: #4a4a4a;
    text-decoration:none;
    padding: 0 10px;
  }
  .tree_nav_bar a:hover, .tree_nav_bar a:focus {
    color: #42b983;
    cursor: pointer;
    text-decoration:none;
  }

  .tree_nav_before {
    height: 100%;
    min-width: 300px;
    top: 0;
    left: -300px;
    background-color: #eee;
    position:absolute;
    overflow-y:auto;
  }

  .tree_nav_after {
    left: 0;
  }
</style>
