It still not working. It might be that the example we are using is outdated. This is a simpler example that works with the latest version. 
create a new index.ts based on this index.js:

const express = require('express');
const Queue = require('bull');
const QueueMQ = require('bullmq');
const { createBullBoard } = require('@bull-board/api');
const { BullAdapter } = require('@bull-board/api/bullAdapter');
const { BullMQAdapter } = require('@bull-board/api/bullMQAdapter');
const { ExpressAdapter } = require('@bull-board/express');

const someQueue = new Queue('someQueueName', {
  redis: { port: 6379, host: '127.0.0.1', password: 'foobared' },
}); // if you have a special connection to redis.
const someOtherQueue = new Queue('someOtherQueueName');
const queueMQ = new QueueMQ('queueMQName');

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard({
  queues: [new BullAdapter(someQueue), new BullAdapter(someOtherQueue), new BullMQAdapter(queueMQ)],
  serverAdapter: serverAdapter,
});

const app = express();

app.use('/admin/queues', serverAdapter.getRouter());

// other configurations of your server
  
app.listen(3000, () => {
  console.log('Running on 3000...');
  console.log('For the UI, open http://localhost:3000/admin/queues');
  console.log('Make sure Redis is running on port 6379 by default');
});

Add the code for reading the redis config:
This is how I get redis config in anotother project. use the same in index.ts
const REDIS_PORT = parseInt(process.env.REDIS_PORT || '6379');
const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || '';

console.log('REDIS_PORT', REDIS_PORT);
console.log('REDIS_HOST', REDIS_HOST);
console.log('REDIS_PASSWORD', REDIS_PASSWORD);

