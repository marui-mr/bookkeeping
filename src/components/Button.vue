<template>
  <button class="button" @click="$emit('click',$event)">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Button extends Vue {

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.button {
  background: $color-highlight;
  color: #333;
  border-radius: 4px;
  border: none;
  height: 38px;
  padding: 0 14px;
}
</style>