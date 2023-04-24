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

## development starting point

It sets up a dev environment with webpack and typescript. It uses jest for testing.

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

## queue names

In the simplest form these are set in the file src/worker/getQueueNames.ts
You can extend this to read from a database or other source.

```ts
export const TMP_URBALURBA_QUEUE_ARRAY = [
"urbalurba:webpage_info2merge",
"urbalurba:jalla",
];
```
