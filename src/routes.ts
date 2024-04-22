import { Express, Request, Response } from 'express';
import { defaultController } from './controller/default.controller';
import requireUser from './middleware/require-user';
import { deleteTodoItem } from './controller/deleteItem.controller';
import { getTodoItem } from './controller/getItems.controller';
import { createTodoItem } from './controller/createItem.controller';
import { updateTodoItem } from './controller/updateItem.controller';
import errorHandler from './middleware/error-handler';

export function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
  app.get('/todos', errorHandler, getTodoItem);
  app.post('/todos', errorHandler, createTodoItem);
  app.put('/todos/:id', errorHandler, updateTodoItem);
  app.delete('/todos/:id', errorHandler, deleteTodoItem);
}
