import { boolean, text, mysqlTable, date, int } from 'drizzle-orm/mysql-core'

export const todo = mysqlTable('adil_todo_list_2', {
  id: int('id').primaryKey().autoincrement(),
  task: text('task'),
  description: text('description'),
  completed: boolean('completed'),
  priority: int('priority'),
  created: date('created_at'),
  updated: date('updated_at'),
})
