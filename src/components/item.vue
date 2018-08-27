<script type="text/babel">
  import icon from 'vue-awesome'

  module.exports = {
    components: {
      'icon': icon
    },
    name: 'item',
    props: {
      children: {
        type: Array,
        default: () => []
      },
      label: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      href: {
        type: [String, Function],
        default: ''
      },
      active: {
        type: Boolean,
        default: false
      },
      level: {
        type: Number,
        default: 0
      }
    },
    methods: {
      run: function () {
        if (typeof this.href === 'function') {
          this.href()
        }
      },
      url: function () {
        return typeof this.href === 'string' ? this.href : null
      },
      style: function () {
        return {
          'font-weight': this.active ? 'bold' : null,
          'font-style': this.children.length ? 'italic' : null,
          'color': this.active ? 'black' : '#666'
        }
      }
    }
  }
</script>

<template>
  <li class="tree_nav_item">
    <a
      @click="run"
      :href="url()"
      :style="style()"
    >
      <icon v-if="icon" :name="icon"/> {{label}}
    </a>
    <slot></slot>
  </li>
</template>

<style>
  .tree_nav_item a {
    text-decoration: none;
    padding: 14px 16px;
    transition: 0.3s;
    display:block;
  }

  .tree_nav_item a:hover:not(.tree_nav_label) {
    text-decoration: none;
    cursor: pointer;
    background-color: #ddd;
  }
</style>
