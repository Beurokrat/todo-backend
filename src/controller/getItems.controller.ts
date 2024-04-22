import { Request, Response } from 'express'
import { db } from '../db/client'
import { todo } from '../db/schema/tasks'
import { count } from 'drizzle-orm'

export const getTodoItem = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = 7
    const offset = (page - 1) * limit

    const todoItems = await db.select().from(todo).limit(limit).offset(offset).execute()
    const [{ count: totalCount }] = await db.select({ count: count() }).from(todo)
    return res.status(200).json({
      success: true,
      data: todoItems,
      pagination: {
        page: page,
        limit: limit,
        total: totalCount,
        totalPages: Math.ceil(totalCount / limit),
      },
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: error })
  }
}
