// listqueuesworking.test.ts

import { listQueues } from "../listQueues";


describe('listQueues working', () => {

  it('should check if listQueues can be read', async () => {    
    const queues = await listQueues();
    expect(queues).toBeDefined();
  });



});
