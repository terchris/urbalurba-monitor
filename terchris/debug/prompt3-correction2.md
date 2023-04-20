write a full index.ts after fixin the problems. 
This will not work: import { Queue as QueueMQ, Worker, QueueScheduler } from 'bullmq';
The QueueScheduler is deprecated from BullMQ 2.0 and onwards. The information below is only relevant for older versions. we are now using "bullmq": "^3.12.0",

This will not work: import {
    createBullBoard,
    BullMQAdapter,
  } from '@bull-board/api';

Module '"@bull-board/api"' has no exported member 'BullMQAdapter'.ts(2305)
look in the example index.js from the example is below.
const { BullMQAdapter } = require('@bull-board/api/bullMQAdapter');

This is how I get redis config in anotother project. use the same in index.ts
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
