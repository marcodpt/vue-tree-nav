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
      position: {
        type: Number,
        default: 0
      },
      level: {
        type: Number,
        default: 0
      },
      scale: {
        type: Number,
        required: true
      },
      bgColor: {
        type: String,
        required: true
      },
      fontColor: {
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
      },
      callback: {
        type: Function,
        default: () => {}
      }
    },
    data: function () {
      return {
        open: this.isActive() && this.children.length && !this.position,
        hover: false,
        prevent: false
      }
    },
    methods: {
      run: function () {
        if (typeof this.href === 'function') {
          this.href()
        } else if (this.children.length && !this.$data.prevent){
          this.$data.open = !this.$data.open
        }
        if (this.position && !this.children.length) {
          this.callback()
        }
      },
      enter: function () {
        if (this.position && this.children.length) {
          this.$data.open = true
          this.$data.prevent = true
          setTimeout(() => this.$data.prevent = false, 600)
        }
      },
      leave: function () {
        if (this.position && this.children.length) {
          this.$data.open = false
        }
      },
      close: function () {
        this.leave();
        this.callback();
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
          'font-size': Math.round(100 * this.scale) + '%',
          'color': this.isActive() ? this.activeColor : this.fontColor,
          'background-color': this.$data.hover ? this.hoverColor : null 
        }
      },
      ulStyle: function () {
        return !this.position ? {
          'margin': `0 10px 10px 10px`
        } : {
          'position': this.level === 0 ? 'absolute' : null,
          'background-color': this.bgColor,
          'margin': this.level === 0 ? null : `0 10px 10px 10px`
        }
      }
    }
  }
</script>

<template>
  <li
    class="tree_nav_item"
    @mouseenter="enter()"
    @mouseleave="leave()"
  >
    <a
      @click="run()"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      :href="url()"
      :style="aStyle()"
    >
      <icon v-if="icon" :scale="0.9 * scale" :name="icon"/> {{label}}
      <icon 
        v-if="children.length"
        :scale="0.9 * scale"
        :class="['tree_nav_item_transition', open ? 'tree_nav_item_down' : '']"
        name="caret-down"
      />
    </a>
    <transition name="tree_nav_item">
      <ul v-if="open" :style="ulStyle()">
        <item
          v-for="child in children"
          v-bind="child"
          :level="level + 1"
          :position="position"
          :path="path"
          :scale="scale"
          :bgColor="bgColor"
          :fontColor="fontColor"
          :hoverColor="hoverColor"
          :activeColor="activeColor"
          :callback="close"
        />
      </ul>
    </transition>
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

  .tree_nav_item-enter-active, .tree_nav_item-leave-active {
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .tree_nav_item-enter, .tree_nav_item-leave-to {
    opacity: 0;
  }

  .tree_nav_item_transition {
    -moz-transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  .tree_nav_item_transition.tree_nav_item_down{
    -ms-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
</style>
