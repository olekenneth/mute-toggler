export const cacheHeaders = {
  "cache-control": "max-age=30s",
  "surrogate-control": "max-age=0",
};

export const JSONCacheHeaders = Object.assign(
  {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  cacheHeaders
);

export const SSEHeaders = {
  "Cache-Control": "no-cache",
  "Content-Type": "text/event-stream",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Cache-Control, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
};
