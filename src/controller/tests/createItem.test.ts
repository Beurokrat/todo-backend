import { Request, Response } from 'express';
import { db } from '../../db/client';
import { createTodoItem } from '../createItem.controller';

import { describe, it, beforeEach, expect } from '@jest/globals';

jest.mock('../../db/client');

describe('createTodoItem controller', () => {
  let req: any;
  let res: any;

  beforeEach(() => {
    req = {
      body: {
        task: 'Test Task',
        description: 'Test Description',
        completed: false,
        created: new Date(),
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should create a new todo item', async () => {
    (db.insert as jest.Mock).mockReturnValueOnce({ values: jest.fn().mockResolvedValueOnce() });

    await createTodoItem(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: 'Created Successfully' });
  });

  it('should handle errors', async () => {
    (db.insert as jest.Mock).mockRejectedValueOnce('Database error');

    await createTodoItem(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ success: false, message: 'Database error' });
  });
});
