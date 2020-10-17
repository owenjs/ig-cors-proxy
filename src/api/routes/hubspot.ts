import { Router, Request, Response, NextFunction } from 'express'
import { Container } from 'typedi';
import HubspotAPI from '../../services/hubspot';
import winston from 'winston';

const route = Router();

export default (app: Router) => {
  // Base URL
  app.use('/hs', route);

  const hubspotAPIInstance = Container.get(HubspotAPI);

  route.get('/deals', async (req: Request, res: Response, next: NextFunction) => {
    const logger = Container.get<winston.Logger>('logger');
    logger.info('Calling HubSpot Deals Endpoint');

    try {
      const response = await hubspotAPIInstance.api.deals.get();
      logger.info('HubSpot Deals Received');
      return res.status(200).json(response);
    } catch(e) {
      logger.error('Get HubSpot Deals Error: %o', e);
      return next(e);
    }
  });
}
