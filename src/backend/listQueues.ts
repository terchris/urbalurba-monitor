// listQueues.ts

import { getQueueNames } from '../worker/getQueueNames';

export async function listQueues() : Promise<string[]> {
    const queueArray = await getQueueNames();
    return queueArray;
}