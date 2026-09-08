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

const siteURL = (
  process.env.BASE_DOAMAIN ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/^https?:\/\//, '')}`
    : 'https://mea-nova.vercel.app')
).replace(/\/$/, '')

export default buildConfig({
  serverURL: siteURL,
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  cors: [
    siteURL,
    'https://mea-nova.vercel.app',
    'https://meanova.vercel.app',
    'http://localhost:3000',
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '',
  ].filter(Boolean),
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
    url: process.env.DATABASE_URI || '',
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

