import { getPayload } from "payload";
import config from "@payload-config";

export default async function Alldata(params) {
  try {
    const payload = await getPayload({ config });
    return await payload.findGlobal({
      slug: params,
      depth: 2,
    });
  } catch (error) {
    console.error("Error in Alldata:", error);
    throw error;
  }
}
