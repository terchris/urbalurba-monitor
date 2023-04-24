//  src/worker/getQueueNames.ts

// get all queue names from the mergeJobs table

// for now we just return a static array of queue names


export const TMP_URBALURBA_QUEUE_ARRAY = [
"urbalurba:webpage_info2merge",
"urbalurba:jalla",
];

export async function getQueueNames() : Promise<string[]> {
    return TMP_URBALURBA_QUEUE_ARRAY;
}

