import dependencyInjectorLoader from './dependencyInjector';
import expressLoader from './express';
import Logger from './logger';

export default async ({ expressApp }) => {
  await dependencyInjectorLoader();
  Logger.info('Dependencies injected into container');

  await expressLoader({ app: expressApp });
  Logger.info('Express loaded');
};
