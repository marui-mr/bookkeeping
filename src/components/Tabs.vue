<template>
  <ul class="tabs" :class="{[classPrefix+'-tabs']:classPrefix}">
    <li v-for="item in dataSource" :key="item.value" @click="select(item)"
        class="tabs-item"
        :class="{selected:item.value === value,[classPrefix+'-tabs-item']:classPrefix}">{{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = { text: string, value: string }

@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;

  select(item: DataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>

<style scoped lang="scss">
.tabs {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 22px;

  &-item {
    width: 50%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: #333;
    }
  }
}
</style>