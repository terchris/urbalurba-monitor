// src/gethostconfig.ts
export const URBALURBA_MONITOR_PORT = process.env.URBALURBA_MONITOR_PORT || 3000;
export const host = process.env.HOSTNAME || "http://localhost";
export const baseURL = `${host}:${URBALURBA_MONITOR_PORT}`;
