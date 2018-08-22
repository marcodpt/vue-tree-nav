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
      }
    },
    data: function () {
      return {
        sideBar: 0,
        path: ''
      }
    },
    mounted: function () {
      this.build()
    },
    methods: {
      open: function () {
        this.$data.sideBar += 1;
      },
      close: function () {
        this.$data.sideBar = 0;
      },
      build: function () {
        this.$data.path = ''
        this.$route.matched.forEach(match => {
          if (this.$data.path) {
            this.$data.path += ' / '
          }
          this.$data.path += match.name
        })

        console.log(this.$data.path)
      }
    },
    watch: {
      '$route.fullPath': function () {
        this.build()
        this.close()
      }
    }
  }
</script>

<template>
  <div>
    <div class="tree_nav_bar">
      <div class="tree_nav_subbar" style="text-align:left;">
        <a v-if="routes.length" @click="open" style="font-size:250%">&#8801;</a>
        <slot name="left" :path="path"></slot>
      </div>
      <div class="tree_nav_subbar" style="text-align:center;">
        <slot :path="path"></slot>
      </div>
      <div class="tree_nav_subbar" style="text-align:right;">
        <slot name="right" :path="path"></slot>
      </div>
    </div>
    <vue-over-body v-if="routes.length" :open="sideBar" dialogClass="tree_nav_sidebar">
      <tree :close="close"/>
      <tree v-for="route in routes" v-bind="route"/>
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
    height:100%;

  }

  .tree_nav_bar a {
    color: #4a4a4a;
    text-decoration:none;
    padding: 0 10px;
    height:100%;
  }
  .tree_nav_bar a:hover, .tree_nav_bar a:focus {
    background-color: #616161;
    color: #fff;
    cursor: pointer;
    text-decoration:none;
  }

  .tree_nav_sidebar {
    height: 100%;
    width: 300px;
    top: 0;
    left: 0;
    background-color: #eee;
    position:absolute;
  }
</style>
