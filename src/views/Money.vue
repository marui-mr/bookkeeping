<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"></NumberPad>
    <Tabs :data-source="recordTypeList" :value.sync="record.type"></Tabs>
    <div class="notes">
      <FormItem field-name="备注" placeholder="在这里输入备注" :value.sync="record.notes"></FormItem>
    </div>
    <Tags @update:value="onUpdateValue" :selectedTags="value"></Tags>
  </Layout>
</template>

<script lang="ts">
/*eslint-disable*/
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tabs, Tags, FormItem, NumberPad},
})
export default class Money extends Vue {
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };
  recordTypeList = recordTypeList;
  value: Tag[] = [];

  get recordList() {
    return this.$store.state.recordList;
  }

  created() {
    this.$store.commit('fetchRecords');
  }

  onUpdateValue(value: Tag[]) {
    this.record.tags = value;
    this.value = value;
  }

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert('请至少选择一个标签');
    }
    this.$store.commit('createRecord', this.record);
    this.record.notes = '';
    this.value = [];
  }
};
</script>

<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 9px 0;
}
</style>