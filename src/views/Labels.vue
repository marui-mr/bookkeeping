<template>
  <Layout>
    <div class="tags">
      <router-link :to="`/labels/edit/${tag.id}`"
                   v-for="tag in tags" :key="tag.id" class="tag">
        <span>{{ tag.name }}</span>
        <Icon name="right"></Icon>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
/*eslint-disable*/
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import store from '@/store/index2';

@Component({
  components: {Button}
})
export default class Labels extends Vue {
  tags = store.tagList;

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name) {
      store.createTag(name);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;

    svg {
      width: 17px;
      height: 17px;
      color: #666;
      margin-right: 16px;
    }
  }
}

.createTag-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 28px;
}
</style>