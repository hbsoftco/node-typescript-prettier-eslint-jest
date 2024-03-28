import { Router, Request, Response } from 'express';

class UsersRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // GET /users
    this.router.get('/', this.getAllUsers.bind(this));
    this.router.get('/test', this.getAllUsers.bind(this));
  }

  private getAllUsers(req: Request, res: Response): void {
    // Fake data for demonstration
    const users = [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
      { id: 3, name: 'User 3' },
    ];
    res.json(users);
  }
}

export default new UsersRouter();
