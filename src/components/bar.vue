<script type="text/babel">
  import tree from './tree.vue'
  import overBody from 'vue-over-body'

  module.exports = {
    components: {
      'tree': tree,
      'vue-over-body': overBody
    },
    props: {
      routes: {
        type: Array,
        default: function () {
          return []
        }
      },
      change: {
        type: Number,
        default: 0
      },
      actions: {
        type: Array,
        default: function () {
          return []
        }
      },
      label: {
        type: String,
        default: ''
      },
      sublabel: {
        type: String,
        default: ''
      }
    },
    data: function () {
      return {
        sideBar: 0
      }
    },
    methods: {
      open: function () {
        this.$data.sideBar += 1;
      },
      close: function () {
        this.$data.sideBar = 0;
      }
    }
  }
</script>

<template>
  <div>
    <div class="bar">
      <div class="subbar" style="text-align:left;">
        <a @click="open" style="font-size:36px;">&#8801;</a>
      </div>
      <div class="subbar" style="text-align:center;">
        <h4>
          Vue Tree Nav
        </h4>
      </div>
      <div class="subbar" style="text-align:right;">
        <a v-for="action in actions" @click="action.onClick">
          {{action.label}}
        </a>
      </div>
    </div>
    <vue-over-body :open="sideBar" dialogClass="sidebar">
      <tree :data="routes" :close="{click: close}"/>
    </vue-over-body>
  </div>
</template>

<style>
  .bar {
    display: table; 
    background-color:#f8f8f8;
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    color: #777;
  }

  .subbar {
    display: table-cell;
    vertical-align: middle;
    padding: 5px 15px;
  }

  .bar a {
    color: #777;
  }
  .bar a:hover, .bar a:focus {
    color: #333;
    text-decoration:none;
  }

  .sidebar {
    height: 100%;
    width: 300px;
    top: 0;
    left: 0;
    background-color:#f8f8f8;
  }
</style>
