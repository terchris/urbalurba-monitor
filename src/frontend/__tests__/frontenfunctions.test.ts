// frontendfunctions.test.ts
import { charInString } from '../frontendfunctions';
//import { baseURL } from '../../gethostconfig';


describe('charInString function', () => {
  it('should return true if the character is in the string', () => {
    const inputString = 'Hello World';
    const char = 'W';

    const result = charInString(char, inputString );

    expect(result).toBe(true);

  });

  it('should return false if the character is not in the string', () => {
    const inputString = 'Hello World';
    const char = 'Z';

    const result = charInString(char, inputString );

    expect(result).toBe(false);
  });

});
