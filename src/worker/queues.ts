// src/worker/queue.ts
import { Queue, ConnectionOptions } from 'bullmq';

//import dotenv from 'dotenv';
import * as dotenv from 'dotenv';

dotenv.config();


const REDIS_PORT = parseInt(process.env.REDIS_PORT || '6379');
const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || '';
const REDIS_QUEUE_ARRAY = process.env.REDIS_QUEUE_ARRAY || '["my-queue"]';


console.log('REDIS_PORT', REDIS_PORT);
console.log('REDIS_HOST', REDIS_HOST);
console.log('REDIS_PASSWORD', REDIS_PASSWORD);
console.log('REDIS_QUEUE_ARRAY', REDIS_QUEUE_ARRAY);


// Configure your Redis connection options
export const connectionOptions: ConnectionOptions = {
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD,
};



// loop through the array of queues and create a new queue for each one
export const queues = JSON.parse(REDIS_QUEUE_ARRAY).map((queueName: string) => {
  return new Queue(queueName, {
    connection: connectionOptions,
  });
});


