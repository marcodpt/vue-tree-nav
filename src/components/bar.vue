<script type="text/babel">
  import tree from './tree.vue'
  import item from './item.vue'
  import overBody from 'vue-over-body'
  import icon from 'vue-awesome'

  module.exports = {
    name: 'vue-tree-nav',
    components: {
      'icon': icon,
      'item': item,
      'tree': tree,
      'vue-over-body': overBody
    },
    props: {
      routes: {
        type: Array,
        default: () => []
      },
      left: {
        type: Array,
        default: () => []
      },
      right: {
        type: Array,
        default: () => []
      },
      label: {
        type: String,
        default: ''
      },
      showPath: {
        type: Boolean,
        default: true
      },
      offset: {
        type: String,
        default: '95px'
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
        Path: null
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
        this.$data.Path = this.$data.path.split(' / ')
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
  <div class="tree_nav_bar">
    <ul class="tree_nav_ul">
      <item icon="bars" :href="open" style="float:left"></item>
      <item
        v-for="item in left"
        v-bind="item"
        style="float:left"
      />
      <li class="tree_nav_item">
        <a class="tree_nav_label">
          <b v-if="label">{{label}}</b>
          <span v-if="showPath">{{path}}</span>
        </a>
      </li>
      <item
        v-for="item in right"
        v-bind="item"
        style="float:right"
      />
    </ul>
    <vue-over-body v-if="tree.length" :open="sideBar" before="tree_nav_before" after="tree_nav_after">
      <ul>
        <tree :close="close"/>
        <tree v-for="leaf in tree" v-bind="leaf" :path="Path"/>
      </ul>
      <div style="height:20px"></div>
    </vue-over-body>
  </div>
</template>

<style>
  .tree_nav_bar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #f3f3f3;
  }

  .tree_nav_ul {
    border: 1px solid #e7e7e7;
  }

  .tree_nav_before {
    height: 100%;
    min-width: 300px;
    top: 0;
    left: -300px;
    overflow-y:auto;
    background-color: #f3f3f3;
  }

  .tree_nav_after {
    left: 0;
  }

  .tree_nav_label {
    position: absolute;
    left: 40%;
    margin-left: -95px !important;
  }
</style>
