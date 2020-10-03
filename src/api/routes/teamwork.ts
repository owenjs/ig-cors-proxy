import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import TeamworkAPI from '../../services/teamwork';
import config from '../../config';
import winston from 'winston';

const route = Router();

export default (app: Router) => {
  // Base URL
  app.use('/tw', route);

  const teamworkAPIInstance = Container.get(TeamworkAPI);

  route.get('/companies', async (req: Request, res: Response, next: NextFunction) => {
    const logger = Container.get<winston.Logger>('logger');
    logger.info('Calling Teamwork Companies Endpoint');

    try {
      const response = await teamworkAPIInstance.api.companies.get();
      logger.info('Teamwork Companies Received');
      return res.status(201).json(response);
    } catch(e) {
      logger.error('Get Teamwork Companies Error: %o', e);
      return next(e);
    }
  });
}
