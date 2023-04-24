// frontendfunctions.ts
// this is functions that are used in the frontend


/** charInString
 * takes a character and a string and returns true if the character is in the string
 * @param searchChar 
 * @param inputString 
 * @returns 
 */
export function charInString(searchChar: string, inputString: string): boolean {
    return inputString.includes(searchChar);
  }
  