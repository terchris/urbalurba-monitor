// worker.ts
import { Queue, Worker } from 'bullmq';
import * as dotenv from 'dotenv';

dotenv.config();
const URBALURBA_TEST_QUEUE = process.env.URBALURBA_TEST_QUEUE || 'urbalurba-test';


import { connectionOptions } from './initializeQueues';

const queueName = URBALURBA_TEST_QUEUE;

console.log("worker for queueName:", queueName);
const queue = new Queue(queueName, { connection: connectionOptions });

const worker = new Worker(queueName, async (job) => {
    const data = job.data;
    console.log(`Processing job with ID: ${job.id} and data:`, data);

    // Simulate job processing
    const text = data.text;
    console.log(`Processed text: ${text}`);
}, { connection: connectionOptions });

worker.on('completed', (job) => {
    console.log(`Job with ID ${job.id} completed!`);
});

worker.on('failed', (job: any, err) => {
    console.log(`Job with ID ${job.id} failed: ${err.message}`);
});
