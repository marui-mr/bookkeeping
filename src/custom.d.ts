/* eslint-disable */
type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number
  createdAt?: Date   // 等价于 Date | undefined
}
type Tag = {
  id: string
  name: string
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated'
  update: (id: string, name: string) => 'not found' | 'success' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}

interface Window {}
