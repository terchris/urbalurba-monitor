// src/worker/queues.ts
import { Queue, ConnectionOptions } from 'bullmq';
import { getQueueNames } from './getQueueNames';

import * as dotenv from 'dotenv';

dotenv.config();

const REDIS_PORT = parseInt(process.env.REDIS_PORT || '6379');
const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || '';

// Configure your Redis connection options
export const connectionOptions: ConnectionOptions = {
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD,
};

console.log('REDIS_PORT', REDIS_PORT);
console.log('REDIS_HOST', REDIS_HOST);
console.log('REDIS_PASSWORD', REDIS_PASSWORD);

async function initializeQueues(): Promise<Queue[]> {
  const queueArray = await getQueueNames();

  // loop through the array of queues and create a new queue for each one
  return queueArray.map((queueName: string) => {
    return new Queue(queueName, {
      connection: connectionOptions,
    });
  });
}

export const queues = initializeQueues();


