import type { GlobalConfig } from 'payload'
import slugify from 'slugify'
import { Hero } from '@/app/components/Hero/config'
import { SEO } from '@/app/components/SEO/config'
import FaqSection from '@/app/components/FaqSection/config'
import Unternehmen from '@/app/components/Unternehmen/config'
import Personalvermittlung from '@/app/components/Personalvermittlung/config'
import OffeneStellen from '@/app/components/offeneStellen/config'
import { Contact } from '@/app/components/Contact/config'
import { anyone } from '@/access/anyone'

// Kept as a read-only compatibility source until the existing global data is migrated to Pages.
export const HomePage: GlobalConfig = {
  slug: 'home',
  label: { en: 'Legacy Homepage', de: 'Alte Startseite' },
  access: { read: anyone, update: () => false },
  admin: { hidden: true },
  fields: [
    { name: 'title', type: 'text' },
    { name: 'author', type: 'relationship', relationTo: 'users', hasMany: false, maxDepth: 2 },
    {
      name: 'slug',
      type: 'text',
      required: true,
      hooks: {
        beforeValidate: [({ siblingData, value }) => siblingData?.title ? slugify(siblingData.title, { lower: true }) : value],
      },
    },
    {
      type: 'tabs',
      tabs: [
        { label: 'Hero', fields: [Hero] },
        { label: 'Personalvermittlung', fields: [Personalvermittlung] },
        { label: 'Unternehmen & Kandidat:innen', fields: [Unternehmen] },
        { label: 'OffeneStellen', fields: [OffeneStellen] },
        { label: 'FAQ', fields: [FaqSection] },
        { label: 'Contact', fields: [Contact] },
        { label: 'SEO', fields: [SEO] },
      ],
    },
    { name: 'publishedAt', type: 'date' },
  ],
}