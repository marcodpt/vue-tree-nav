<script type="text/babel">
  module.exports = {
    name: 'tree',
    props: {
      children: {
        type: Array,
        default: () => []
      },
      name: {
        type: String,
        default: ''
      },
      href: {
        type: String,
        default: ''
      },
      close: {
        type: Function
      },
      step: {
        type: Number,
        default: 10
      },
      total: {
        type: Number,
        default: 0
      },
      unit: {
        type: String,
        default: 'px'
      }
    },
    data: function () {
      return {
        open: false
      }
    },
    methods: {
      toogle: function () {
        this.$data.open = !this.$data.open
      },
      style: function () {
        return {
          'padding-left': `${this.total + this.step}${this.unit}`
        }
      }
    }
  }
</script>

<template>
  <div>
    <a
      v-if="close"
      class="tree_nav_link tree_nav_child"
      @click="close"
      style="text-align:right;"
    >
      &#10006;
    </a>
    <a
      v-if="children.length"
      :style="style()"
      class="tree_nav_link tree_nav_parent"
      @click="toogle()"
    >
      {{name}}
      <span style="float:right;">{{open ? '&#9650;' : ' &#9660;' }}</span>
    </a>
    <router-link
      v-else-if="href"
      :style="style()"
      class="tree_nav_link tree_nav_child"
      active-class="tree_nav_active"
      :to="href"
    >
      {{name}}
    </router-link>
    <tree
      v-for="child in children"
      v-if="child.name"
      v-show="open"
      v-bind="child"
      :step="step"
      :total="total + step"
      :unit="unit"
    />
  </div>
</template>

<style>
  .tree_nav_parent {
    color: #4a4a4a;
  }

  .tree_nav_child {
    color: #2a2a2a;
    font-size: 110%;
  }

  .tree_nav_link {
    background-color: #eee;
    cursor: pointer;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
    display:block;
    padding: 10px;
    text-decoration: none;
  }

  .tree_nav_link:hover {
    background-color: #ccc;
    text-decoration: none;
  }

  .tree_nav_active {
    background-color: #616161;
    color: #fff;
  }
</style>
