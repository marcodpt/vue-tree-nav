<script type="text/babel">
  module.exports = {
    name: 'tree',
    props: {
      data: {
        type: Array,
        required: true
      },
      close: {
        type: Object,
        default: null
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
    methods: {
      toogle: function (item) {
        if (item.children) {
          this.$set(item, 'open', item.open ? false : true)
        }
        if (typeof item.click === 'function') {
          item.click()
        }
      },
      style: function (item) {
        return {
          'font-weight': item.children ? 'bold' : '',
          'padding-left': `${this.total + this.step}${this.unit}`
        }
      }
    }
  }
</script>

<template>
  <div>
    <div v-if="close">
      <a
        class="accordion"
        style="text-align:right;font-size:22px"
        @click="toogle(close)"
      >&times;</a>
    </div>
    <div v-for="item in data">
      <a
        :style="style(item)"
        class="accordion"
        @click="toogle(item)"
      >
        {{item.label}}
        <span v-if="item.children">[{{item.open ? '-' : '+' }}]</span>
      </a>
      <tree
        v-if="item.children && item.open"
        :data="item.children"
        :step="step"
        :total="total + step"
        :unit="unit"
      />
    </div>
  </div>
</template>

<style>
  .accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
    display:block;
    padding: 10px;
  }

  .accordion:hover {
    background-color: #ccc;
    text-decoration: none;
  }
</style>
