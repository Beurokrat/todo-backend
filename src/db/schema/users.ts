import { boolean, text, serial, mysqlTable } from 'drizzle-orm/mysql-core'

export const users = mysqlTable('adil_todo_users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  email: text('email'),
  phone: text('phone'),
})
