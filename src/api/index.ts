import { Router } from 'express';
import hubspot from './routes/hubspot';
import teamwork from './routes/teamwork';

// guaranteed to get dependencies
export default () => {
	const app = Router();
  hubspot(app);
  teamwork(app);

	return app;
};
