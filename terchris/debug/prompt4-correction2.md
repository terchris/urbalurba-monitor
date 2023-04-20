It get: 'Queue' only refers to a type, but is being used as a value here.ts(2693)

there must be is something wrong with the example. in the example there are a import of bull.
const Queue = require('bull');
const QueueMQ = require('bullmq');

But the bull is expired and replaced by bullmq. So it should not be there. I think this is the reason for the arror message. 

I have a working project that uses bullmq and the definition is in the src/worker/queue.ts

remove the const Queue = require('bull'); and write a new index.ts If possible use the src/worker/queue.ts provided below.

// src/worker/queue.ts
import { Queue, ConnectionOptions } from 'bullmq';

//import dotenv from 'dotenv';
import * as dotenv from 'dotenv';

dotenv.config();


const REDIS_PORT = parseInt(process.env.REDIS_PORT || '6379');
const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || '';

console.log('REDIS_PORT', REDIS_PORT);
console.log('REDIS_HOST', REDIS_HOST);
console.log('REDIS_PASSWORD', REDIS_PASSWORD);

// Configure your Redis connection options
export const connectionOptions: ConnectionOptions = {
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD,
};

export const myQueue = new Queue('my-queue', {
  connection: connectionOptions,
});
