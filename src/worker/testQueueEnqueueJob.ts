// src/backend/enqueueJob.ts
import { RequestHandler } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();
const URBALURBA_TEST_QUEUE = process.env.URBALURBA_TEST_QUEUE || 'urbalurba-test';


import { getQueueHandle } from './getQueueHandle';


export const enqueueJob: RequestHandler = async (req, res) => {
  const myQueueHandle = getQueueHandle(URBALURBA_TEST_QUEUE);  
  const requestJsonData = req.body; 


  if (!requestJsonData) {
    res.status(400).json({
      message: 'No job data provided',
    });
    return;
  }

  if (typeof requestJsonData !== 'object') {
    res.status(400).json({
      message: 'Invalid job data provided',
    });
    return;
  }




  let jobName = "my-job";
  let jobData: any = {
    some: "value"
  };


  if (requestJsonData?.name) {
    jobName = requestJsonData.name;
  }
  if (requestJsonData?.data) {
    // jobData is the content of requestJsonData.data
    jobData = requestJsonData.data;
    
  }

  const job = await myQueueHandle.add(jobName, jobData);

  res.json({
    message: 'Job enqueued',
    jobId: job.id,
  });
};
