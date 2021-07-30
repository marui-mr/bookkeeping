type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number
  createdAt?: Date   // 等价于 Date | undefined
}