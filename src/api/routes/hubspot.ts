import { Router, Request, Response, NextFunction } from 'express'
import config from '../../config'

const route = Router();

export default (app: Router) => {
  // Base URL
  app.use('/hs', route);

  route.get('/deals', async (req: Request, res: Response, next: NextFunction) => {
    res.send('HubSpot Deals!');
  });
}
