<script type="text/babel">
  import icon from 'vue-awesome'
  import item from './item.vue'

  module.exports = {
    components: {
      'icon': icon,
      'item': item
    },
    name: 'tree',
    props: {
      children: {
        type: Array,
        default: () => []
      },
      label: {
        type: String,
        default: ''
      },
      href: {
        type: String,
        default: ''
      },
      path: {
        type: Array,
        default: () => []
      },
      close: {
        type: Function
      },
      level: {
        type: Number,
        default: 0
      }
    },
    data: function () {
      return {
        open: this.isActive() 
      }
    },
    methods: {
      toogle: function () {
        this.$data.open = !this.$data.open
      },
      isActive: function () {
        return this.path[this.level] === this.label
      },
      style: function () {
        return {
          'border-left': '3px solid #e7e7e7',
          'margin-left': `${(this.level + 1) * 10}px`
        }
      }
    }
  }
</script>

<template>
  <item v-if="close" icon="times" :href="close" style="text-align:right;"/>
  <item
    v-else
    :children="children"
    :label="label"
    :icon="icon"
    :href="children.length ? toogle : href"
    :active="isActive()"
    :level="level"
  >
    <ul v-if="children.length" :style="style()">
      <tree
        v-for="child in children"
        v-if="child.label"
        v-show="open"
        v-bind="child"
        :level="level + 1"
        :path="path"
      />
    </ul>
  </item>
</template>
