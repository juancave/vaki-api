import express from 'express';
import router from './routes/index.js';
import logRequests from './middlewares/logger.middleware.js';

const app = express();
const port = 3001;

app.use(logRequests);
app.use(express.json());

app.use('/api', router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Vaki endpoints are ready on port ${port}`);
});

export default app;
