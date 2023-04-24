// enpointsworking.test.ts

import { baseURL } from '../../shared/gethostconfig';


describe('endpoints working', () => {

  it('should check if listQueues json is returned', async () => {
    // Add the baseURL to your fetch call
    const response = await fetch(`${baseURL}/listQueues`);
    const queues = await response.json();
    expect(queues).toBeDefined();
  });



});
