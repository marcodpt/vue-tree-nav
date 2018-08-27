<script type="text/babel">
  import item from './item.vue'
  import overBody from 'vue-over-body'

  module.exports = {
    name: 'vue-tree-nav',
    components: {
      'item': item,
      'vue-over-body': overBody
    },
    props: {
      side: {
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
      location: {
        type: String,
        default: ''
      },
      showPath: {
        type: Boolean,
        default: true 
      },
      barScale: {
        type: Number,
        default: 1
      },
      sideScale: {
        type: Number,
        default: 1
      },
      bgColor: {
        type: String,
        default: '#f3f3f3'
      },
      fontColor: {
        type: String,
        default: '#666666'
      },
      borderColor: {
        type: String,
        default: '#e7e7e7'
      },
      hoverColor: {
        type: String,
        default: '#dddddd'
      },
      activeColor: {
        type: String,
        default: '#000000'
      }
    },
    data: function () {
      return {
        sideBar: 0,
        path: '',
        tree: [],
        links: {},
        Path: []
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
        this.transverse(this.side, this.$data.tree, '', '#')
        this.transverse(this.left, [], '', '#')
        this.transverse(this.right, [], '', '#')
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
      side: function () {
        this.setRoutes()
      },
      left: function () {
        this.setRoutes()
      },
      right: function () {
        this.setRoutes()
      }
    }
  }
</script>

<template>
  <div class="tree_nav_bar">
    <ul :style="'border-bottom: 1px solid '+borderColor+';background-color:'+bgColor">
      <item
        icon="bars"
        :label="showPath ? path : ''"
        :href="open"
        style="float:left"
        :scale="barScale"
        :fontColor="fontColor"
        :borderColor="borderColor"
        :hoverColor="hoverColor"
        :activeColor="activeColor"
      ></item>
      <item
        v-for="item in left"
        v-bind="item"
        style="float:left"
        :path="Path"
        :scale="barScale"
        :fontColor="fontColor"
        :borderColor="borderColor"
        :hoverColor="hoverColor"
        :activeColor="activeColor"
      />
      <item
        v-for="item in right"
        v-bind="item"
        style="float:right"
        :path="Path"
        :scale="barScale"
        :fontColor="fontColor"
        :borderColor="borderColor"
        :hoverColor="hoverColor"
        :activeColor="activeColor"
      />
    </ul>
    <vue-over-body
      v-if="tree.length"
      :open="sideBar"
      :dialog-style="{'position': 'absolute'}"
      before="tree_nav_before"
      after="tree_nav_after"
    >
      <div :style="{
        'min-width': '300px',
        'height': '100%',
        'background-color': bgColor,
        'border-right': '1px solid '+borderColor,
        'overflow-y': 'auto'
      }">
        <ul>
          <item
            style="text-align:right;"
            icon="times" :href="close"
            :scale="sideScale"
            :fontColor="fontColor"
            :borderColor="borderColor"
            :hoverColor="hoverColor"
            :activeColor="activeColor"
          />
          <item
            v-for="item in tree"
            v-bind="item"
            :path="Path"
            :scale="sideScale"
            :fontColor="fontColor"
            :borderColor="borderColor"
            :hoverColor="hoverColor"
            :activeColor="activeColor"
          />
        </ul>
        <div style="height:20px"></div>
      </div>
    </vue-over-body>
  </div>
</template>

<style>
  .tree_nav_bar {
     margin-bottom:20px;
  }

  .tree_nav_bar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .tree_nav_before {
    height: 100%;
    top: 0;
    left: -300px;
  }

  .tree_nav_after {
    left: 0;
  }
</style>
