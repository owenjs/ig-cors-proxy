import { Container } from 'typedi';
import LoggerInstance from './logger';
import config from '../config';
import TeamworkAPI from 'teamwork-api';
import HubspotAPI from 'hubspot';

export default () => {
  try {
    Container.set('logger', LoggerInstance);

    // Teamwork API Wrapper
    const TW = TeamworkAPI(config.teamworkAPI.key, config.teamworkAPI.sub);
    Container.set('teamworkapi', TW);

    // HubSpot API Wrapper
    const HS = new HubspotAPI({ apiKey: config.hubspotAPI.key });
    Container.set('hubspotapi', HS);
  } catch (e) {
    LoggerInstance.error('Error on dependency injector loader: %o', e);
    throw e;
  }
}