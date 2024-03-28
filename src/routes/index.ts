import { Application } from 'express';
import usersRouter from './usersRoutes';

class RouterManager {
  static initializeRoutes(app: Application): void {
    app.use('/users', usersRouter.router);
  }
}

export default RouterManager;
