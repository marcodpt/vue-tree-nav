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
      location: {
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
        var isActive = this.href && `#${this.location}`.indexOf(this.href) !== -1
        return {
          'padding-left': `${this.total + this.step}${this.unit}`,
          'color': isActive ? 'black' : null,
          'font-weight': isActive ? 'bold' : null
        }
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
      :location="location"
    />
  </div>
</template>
