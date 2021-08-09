/* eslint-disable */
import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';

const recordList = {
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  saveRecords() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
  createRecord(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date().toISOString();
    this.recordList && this.recordList.push(record2);
    recordList.saveRecords();
  }
};
recordList.fetchRecords();

export default recordList;