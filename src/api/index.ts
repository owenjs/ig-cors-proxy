import { Router } from 'express';
import hubspot from './routes/hubspot';

// guaranteed to get dependencies
export default () => {
	const app = Router();
	hubspot(app);

	return app;
};
