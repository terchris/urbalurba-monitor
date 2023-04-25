
// src/index.ts
import app from './backend/app';

import * as dotenv from 'dotenv';
dotenv.config();
const URBALURBA_MONITOR_PORT = parseInt(process.env.URBALURBA_MONITOR_PORT || '3000');


app.listen(URBALURBA_MONITOR_PORT, () => {
  console.log(`Server is running on http://localhost:${URBALURBA_MONITOR_PORT}`);
});
