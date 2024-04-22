import { Request, Response } from 'express'
import { db } from '../db/client'
import { todo } from '../db/schema/tasks'

interface todoListItem {
  id?: number
  task: string
  description: string
  completed: boolean
  created: Date
}

export const updateTodoItem = async (req: Request, res: Response) => {
  const { id, completed } = req.body as todoListItem
  try {
    await db
      .insert(todo)
      .values({
        id,
        completed,
      })
      .onDuplicateKeyUpdate({ set: { completed } })

    return res.status(200).json({
      message: 'Updated Successfully',
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: error })
  }
}
