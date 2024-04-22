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

export const createTodoItem = async (req: Request, res: Response) => {
  const { task, description, created, completed } = req.body as todoListItem
  try {
    await db.insert(todo).values({
      task,
      description,
      completed,
      created,
    })

    return res.status(201).json({
      message: 'Created Successfully',
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: error })
  }
}
