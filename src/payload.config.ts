// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Header } from './globals/Header/config'
import { Footer } from './globals/Footer/config'
import { menus } from './globals/menus/config'
import { HomePage } from './globals/home/config'
import { Impressum } from './globals/impressum/config'
import { Datenschutzerklärung } from './globals/datenschutzerklärung/config'
import { Robots } from './globals/robots/config'
import { Pages } from './collections/Pages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

function resolveSiteURL() {
  if (process.env.NEXT_PUBLIC_SERVER_URL) {
    return process.env.NEXT_PUBLIC_SERVER_URL.replace(/\/$/, '')
  }

  // Always use the current Vercel host so admin API calls stay same-origin.
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, '')}`
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/^https?:\/\//, '')}`
  }

  return (process.env.BASE_DOAMAIN || 'http://localhost:3000').replace(/\/$/, '')
}

const siteURL = resolveSiteURL()

const allowedOrigins = [
  siteURL,
  process.env.BASE_DOAMAIN,
  process.env.NEXT_PUBLIC_SERVER_URL,
  'https://meanova.vercel.app',
  'https://mea-nova.vercel.app',
  'http://localhost:3000',
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, '')}` : '',
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/^https?:\/\//, '')}`
    : '',
]
  .filter(Boolean)
  .map((origin) => origin.replace(/\/$/, ''))

export default buildConfig({
  serverURL: siteURL,
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  cors: allowedOrigins,
  csrf: allowedOrigins,
  collections: [Users, Media , Pages],
  globals: [
    Header,
    Footer,
    menus,
    HomePage,
    Impressum,
    Datenschutzerklärung,
    Robots,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'payload-secret-placeholder',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://127.0.0.1:27017/meanova',
    connectOptions: {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    },
  }),
  sharp,
  plugins: [
     vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})

