/*
import express from 'express';
import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { ExpressAdapter } from '@bull-board/express';

import { queues } from './worker/queues';

import * as dotenv from 'dotenv';
dotenv.config();
const URBALURBA_MONITOR_PORT = parseInt(process.env.URBALURBA_MONITOR_PORT || '3000');


const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard({

  // loop  through the array of queues and create a new queue for each one
  queues: queues.map((queue:any) => new BullMQAdapter(queue)),
  serverAdapter: serverAdapter,
});


const app = express();

app.use('/admin/queues', serverAdapter.getRouter());

// other configurations of your server

app.listen(URBALURBA_MONITOR_PORT, () => {
  console.log('Running on port:' + URBALURBA_MONITOR_PORT);
  console.log("For the UI, open http://localhost:" + URBALURBA_MONITOR_PORT + "/admin/queues");
  console.log('Make sure Redis is running on port 6379 by default');
});
*/



//--------------------------------------------------------------

// src/index.ts
import app from './backend/app';

import * as dotenv from 'dotenv';
dotenv.config();
const URBALURBA_MONITOR_PORT = parseInt(process.env.URBALURBA_MONITOR_PORT || '3000');


app.listen(URBALURBA_MONITOR_PORT, () => {
  console.log(`Server is running on http://localhost:${URBALURBA_MONITOR_PORT}`);
});
