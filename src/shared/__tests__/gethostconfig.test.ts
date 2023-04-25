// gethostconfig.test.ts

import { baseURL } from "../gethostconfig";


describe('gethostconfig working', () => {

  it('should check if baseURL is defined', async () => {    
    const baseURLRegex = /http:\/\/localhost:\d{4}/u;
    expect(baseURL).toMatch(baseURLRegex);
  });

});
