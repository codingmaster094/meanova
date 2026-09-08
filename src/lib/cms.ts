import { getPayload } from 'payload'
import config from '@payload-config'
import type { GlobalSlug } from 'payload'

const FETCH_TIMEOUT_MS = 4000

function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error(`${label} timed out`)), ms)
  })
  return Promise.race([promise, timeout]).finally(() => {
    if (timer) clearTimeout(timer)
  })
}

export function toPlain<T>(data: T): T | null {
  if (!data) return null
  try {
    return JSON.parse(JSON.stringify(data)) as T
  } catch {
    return null
  }
}

export async function getPayloadClient() {
  if (!process.env.DATABASE_URI) return null
  return withTimeout(getPayload({ config }), FETCH_TIMEOUT_MS, 'getPayload')
}

export async function getGlobal<T = Record<string, unknown>>(slug: GlobalSlug | string) {
  try {
    const payload = await getPayloadClient()
    if (!payload) return null
    const data = await withTimeout(
      payload.findGlobal({ slug: slug as GlobalSlug, depth: 2 }),
      FETCH_TIMEOUT_MS,
      `findGlobal:${slug}`,
    )
    return toPlain(data) as T | null
  } catch (error) {
    console.error(`getGlobal(${slug}) failed:`, error)
    return null
  }
}

export async function getPageBySlug(slug: string) {
  try {
    const payload = await getPayloadClient()
    if (!payload) return null
    const result = await withTimeout(
      payload.find({
        collection: 'pages',
        depth: 2,
        limit: 1,
        pagination: false,
        where: { slug: { equals: slug } },
      }),
      FETCH_TIMEOUT_MS,
      `findPage:${slug}`,
    )
    return toPlain(result.docs[0] ?? null)
  } catch (error) {
    console.error(`getPageBySlug(${slug}) failed:`, error)
    return null
  }
}
