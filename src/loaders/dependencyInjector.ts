import { Container } from 'typedi';
import LoggerInstance from './logger';
import config from '../config';
import TeamworkAPI from 'teamwork-api';

export default () => {
  try {
    Container.set('logger', LoggerInstance);

    // Teamwork API Wrapper
    const TW = TeamworkAPI(config.teamworkAPI.key, config.teamworkAPI.sub);
    Container.set('teamworkapi', TW);
  } catch (e) {
    LoggerInstance.error('Error on dependency injector loader: %o', e);
    throw e;
  }
}