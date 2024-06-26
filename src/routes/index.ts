import { Application } from 'express';
import userRouter from '@src/routes/user.routes';
import bookRoutes from '@src/routes/book.routes';

class RouterManager {
  static initializeRoutes(app: Application): void {
    app.use('/users', userRouter.router);
    app.use('/books', bookRoutes.router);
  }
}

export default RouterManager;
