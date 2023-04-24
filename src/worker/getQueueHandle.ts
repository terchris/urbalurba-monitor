
import { globalBullQueues } from '../backend/app';


export function getQueueHandle(queueName: string) {
    // if globalBullQueues is not yet initialized, we dont have a queue handle
    if (!globalBullQueues) {
        return null;
    }
    return globalBullQueues.find((queue: any) => queue.name === queueName);
  }