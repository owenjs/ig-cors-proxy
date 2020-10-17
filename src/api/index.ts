import { Router } from 'express';
import hubspot from './routes/hubspot';
import teamwork from './routes/teamwork';
import airtable from './routes/airtable';

// guaranteed to get dependencies
export default () => {
	const app = Router();
  hubspot(app);
  teamwork(app);
  airtable(app);

	return app;
};
