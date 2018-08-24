<script type="text/babel">
  module.exports = {
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
        open: this.isActive() 
      }
    },
    methods: {
      toogle: function () {
        this.$data.open = !this.$data.open
      },
      style: function () {
        return {
          'padding-left': `${this.total + this.step}${this.unit}`,
          'color': this.isActive() ? 'black' : null,
          'font-weight': this.isActive() ? 'bold' : null
        }
      },
      isActive: function () {
        return this.path[this.total / this.step] === this.label
      }
    }
  }
</script>

<template>
  <div>
    <a
      v-if="close"
      @click="close"
      style="text-align:right;"
    >
      <div>
        &times;
      </div>
    </a>
    <a
      v-else-if="children.length"
      :style="style()"
      @click="toogle()"
    >
      <div style="font-style: italic;">
        {{label}}
      </div>
    </a>
    <a
      v-else
      :style="style()"
      :href="href"
    >
      <div :class="total ? 'tree_nav_section' : ''">{{label}}</div>
    </a>
    <tree
      v-for="child in children"
      v-if="child.label"
      v-show="open"
      v-bind="child"
      :step="step"
      :total="total + step"
      :unit="unit"
      :path="path"
    />
  </div>
</template>
