import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'

const connection = mysql.createPool({
  host: 'sql6.freesqldatabase.com',
  user: 'sql6700352',
  database: 'sql6700352',
  password: 'c3ZeZW3J23',
  port: 3306,
})

export const db = drizzle(connection)
