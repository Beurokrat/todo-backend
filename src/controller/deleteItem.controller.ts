import { Request, Response } from 'express'
import { db } from '../db/client'
import { todo } from '../db/schema/tasks'
import { sql } from 'drizzle-orm'

export const deleteTodoItem = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await db.execute(sql`delete from ${todo} where ${todo.id} = ${id}`)

    return res.status(200).json({
      message: 'Deleted Successfully',
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: error })
  }
}
