# urbalurba-monitor

This is a test setup for using bull-board with bullmq.

It connects to a redis server, creates some queues spin up a webserver that display the Bull Dashboard.
Making it simple for you to test how BullMQ and Bull Dashboard works.

Why I made it: I wanted to test BullMQ and Bull Dashboard and could not find any ready to use docker image that enabled me to play around with it.


## functionality

* Sets up a webserver with express that run Bull Dashboard on port 3000
* Simple backend that list queues /listQueues
* Simple frontend that query /listQueues and display the result in a table
* jest tests for the backend, frontend and worker
* vscode debug configuration for the backend, frontend and worker
* webpack configuration for the frontend
* typescript configuration for the backend, frontend and worker
* several build scripts for creating and testing it running in docker

## just testing it out

TODO: write how to clone and just run the thing

### displaying the dashboard

go to http://localhost:3000

Se below how to define queues. 


### adding jobs to the test queue

In a terminal run the command (server must be running)

```bash
yarn queue:add
```
It will add a job to the queue "urbalurba-test" with test data

In the dashboard you should see the job added to the queue.

### processing the jobs

To process the jobs in the queue run the command

```bash
yarn queue:worker
```

It will print the following on the console

```bash
Processing job with ID: 8 and data: { message: 'hello world' }
Processed text: undefined
Job with ID 8 completed!
```

## development starting point

It sets up a dev environment with webpack and typescript. It uses jest for testing.


## debugging using vscode

### debugging the backend

After building the backend. You start the server with the command

```bash
yarn servedebug
```

This starts up debugging on port 9293. In the debugger select the configuration "Debug backend"

## Testing using jest

Run the tests using jest

```bash
yarn test 
```

### configuring the tests

in the file jest.config.js you can configure the tests
The tests are in the folder __tests__ inside the backend, frontend and worker folders.
This is a description on how the frontent tests if the backend serves the json data at /listQueues

enpointsworking.test.ts is the test file

```ts
  it('should check if listQueues json is returned', async () => {
    // Add the baseURL to your fetch call
    const response = await fetch(`${baseURL}/listQueues`);
    const queues = await response.json();
    expect(queues).toBeDefined();
  });
```



## debugging using vscode




## configuration

## .env

```env
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=yourpassword
URBALURBA_MONITOR_PORT=3000
```

## Define queues

In the simplest form these are set in the file src/worker/getQueueNames.ts
You can extend this to read from a database or other source.

There is a queue added to the list of defined queies that is used for testing.
const URBALURBA_TEST_QUEUE = process.env.URBALURBA_TEST_QUEUE || 'urbalurba-test';

```ts
export const TMP_URBALURBA_QUEUE_ARRAY = [
"urbalurba:webpage_info2merge",
"urbalurba:jalla",
];
```


## Useful documentation and links

https://www.digitalocean.com/community/tutorials/how-to-handle-asynchronous-tasks-with-node-js-and-bullmq
https://roluquec.medium.com/job-queuing-101-start-using-bull-in-your-node-js-project-part-i-2be3ef36a42d
