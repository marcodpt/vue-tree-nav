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
      path: {
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
        type: [String, Function]
      },
      level: {
        type: Number,
        default: 0
      },
      scale: {
        type: Number,
        required: true
      },
      fontColor: {
        type: String,
        required: true
      },
      borderColor: {
        type: String,
        required: true
      },
      hoverColor: {
        type: String,
        required: true
      },
      activeColor: {
        type: String,
        required: true
      }
    },
    data: function () {
      return {
        open: this.isActive() && this.children.length,
        hover: false
      }
    },
    methods: {
      run: function () {
        if (typeof this.href === 'function') {
          this.href()
        } else if (this.children.length){
          this.$data.open = !this.$data.open
        }
      },
      url: function () {
        return typeof this.href === 'string' ? this.href : null
      },
      isActive: function () {
        return this.path[this.level] === this.label
      },
      aStyle: function () {
        return {
          'font-weight': this.isActive() ? 'bold' : null,
          'font-style': this.children.length ? 'italic' : null,
          'font-size': Math.round(100 * this.scale) + '%',
          'color': this.isActive() ? this.activeColor : this.fontColor,
          'background-color': this.$data.hover ? this.hoverColor : null 
        }
      },
      ulStyle: function () {
        return {
          'border-left': `3px solid ${this.borderColor}`,
          'margin-left': `${(this.level + 1) * 10}px`
        }
      }
    }
  }
</script>

<template>
  <li class="tree_nav_item">
    <a
      @click="run"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      :href="url()"
      :style="aStyle()"
    >
      <icon v-if="icon" :scale="0.9 * scale" :name="icon"/> {{label}}
    </a>
    <ul v-if="open" :style="ulStyle()">
      <item
        v-for="child in children"
        v-bind="child"
        :level="level + 1"
        :path="path"
        :scale="scale"
        :fontColor="fontColor"
        :borderColor="borderColor"
        :hoverColor="hoverColor"
        :activeColor="activeColor"
      />
    </ul>
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

  .tree_nav_item a:hover {
    text-decoration: none;
    cursor: pointer;
  }
</style>
