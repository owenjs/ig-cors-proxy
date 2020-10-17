import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import ReloadClosingList from '../../services/reloadClosingList';
import winston from 'winston';

const route = Router();

export default (app: Router) => {
  // Base URL
  app.use('/at', route);

  const logger = Container.get<winston.Logger>('logger');
  const ReloadClosingListInstance = Container.get(ReloadClosingList);

  route.get('/reload', async (req: Request, res: Response, next: NextFunction) => {
    ReloadClosingListInstance.reload();
    logger.info('Airtable Closing List reload has been triggered');
    return res.status(202).send('Reloading'); // @ToDo create state machine
  });
}
