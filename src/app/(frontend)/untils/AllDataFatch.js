import { getPayload } from "payload";
import config from "@payload-config";

const FETCH_TIMEOUT_MS = 4000;

function withTimeout(promise, ms, label) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(`${label} timed out`)), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

function toPlain(data) {
  if (!data) return null;
  try {
    return JSON.parse(JSON.stringify(data));
  } catch {
    return null;
  }
}

export default async function Alldata(params) {
  if (!process.env.DATABASE_URI) {
    console.error("Alldata skipped: DATABASE_URI is not set");
    return null;
  }

  try {
    const payload = await withTimeout(
      getPayload({ config }),
      FETCH_TIMEOUT_MS,
      "getPayload",
    );
    const data = await withTimeout(
      payload.findGlobal({
        slug: params,
        depth: 2,
      }),
      FETCH_TIMEOUT_MS,
      `findGlobal:${params}`,
    );
    return toPlain(data);
  } catch (error) {
    console.error("Error in Alldata:", error);
    return null;
  }
}
