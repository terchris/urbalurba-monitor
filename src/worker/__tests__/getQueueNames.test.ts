// getQueueNames.test.ts

import { getQueueNames } from "../getQueueNames";


describe('getQueueNames working', () => {

  it('should check if getQueueNames retrns an array of strings', async () => {    
    const queueArray = await getQueueNames();
    expect(queueArray).toBeInstanceOf(Array);
  });

});
