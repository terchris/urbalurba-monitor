// src/backend/app.ts
import express, { Request, Response } from 'express';
import path from 'path';

import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { ExpressAdapter } from '@bull-board/express';

import { queues } from '../worker/queues';
import { listQueues } from './listQueues';

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

const app = express();

// path to the frontend html file
const publicPath = path.join(__dirname, '..', '..', 'public');
app.use(express.static(publicPath));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/listQueues', async (req: Request, res: Response) => {
  try {
    const queues = await listQueues();
    res.json(queues);
  } catch (error) {
    console.error('Error listing queues:', error);
    res.status(500).json({ error: 'An error occurred while listing queues.' });
  }
});

async function initializeApp() {
  try {
    const resolvedQueues = await queues;

    const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard({
      // loop through the array of queues and create a new queue for each one
      queues: resolvedQueues.map((queue: any) => new BullMQAdapter(queue)),
      serverAdapter: serverAdapter,
    });

    // the path to bull-board is /admin/queues
    app.use('/admin/queues', serverAdapter.getRouter());
  } catch (error) {
    console.error('Error initializing the app:', error);
  }
}

initializeApp();

export default app;

/*
import express, { Request, Response } from 'express';
import path from 'path';

import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { ExpressAdapter } from '@bull-board/express';

import { queues } from '../worker/queues';

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

const app = express();

// path to the frontend html file
const publicPath = path.join(__dirname, '..', '..', 'public');
app.use(express.static(publicPath));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

async function initializeApp() {
  try {
    const resolvedQueues = await queues;

    const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard({
      // loop through the array of queues and create a new queue for each one
      queues: resolvedQueues.map((queue: any) => new BullMQAdapter(queue)),
      serverAdapter: serverAdapter,
    });

    // the path to bull-board is /admin/queues
    app.use('/admin/queues', serverAdapter.getRouter());
  } catch (error) {
    console.error('Error initializing the app:', error);
  }
}

initializeApp();

export default app;



import { enqueueJob } from './enqueueJob'; 


// path to the listing of queues as json data - used by fronend to display the list of queues
app.get('/queues', (req, res) => {
  const getCities = () => {
    const citiesWithTime = cities.map(city => timeToString(city));
    return citiesWithTime;
  };

  res.json(getCities());
});

app.get('/mergejobs', async (req, res, next) => {
  const getMergejobs = async () => {
    let mergeJobsArray: MergeJob[] = [];
    mergeJobsArray = await getMergeJobAll();
    return mergeJobsArray;
  };

  try {
    const mergeJobs = await getMergejobs();
    res.json(mergeJobs);
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});


// for adding a new job to the queue
app.post('/enqueue-job', enqueueJob);
 
 */