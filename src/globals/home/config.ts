import type { GlobalConfig } from 'payload'
import { revalidateHome } from './hooks/revalidateHome'
import slugify from 'slugify'
import { Hero } from '@/app/components/Hero/config'
import { SEO } from '@/app/components/SEO/config'
import FaqSection from '@/app/components/FaqSection/config'
import Unternehmen from '@/app/components/Unternehmen/config'
import Personalvermittlung from '@/app/components/Personalvermittlung/config'
import OffeneStellen from '@/app/components/offeneStellen/config'
import { Contact } from '@/app/components/Contact/config'

export const HomePage: GlobalConfig = {
  slug: 'home',
  label: {
    en: 'Homepage',
    de: 'Startseite',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
      label: {
        en: 'Title',
        de: 'Titel',
      },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
      label: { en: 'Author', de: 'Autor' },
      admin: { position: 'sidebar' },
      maxDepth: 2,
    },
    // {
    //   name: 'relatedPage',
    //   type: 'relationship',
    //   relationTo: 'pages',
    //   maxDepth: 0,
    //   label: {
    //     en: 'Link to a Page',
    //     de: 'Mit einer Seite verknüpfen',
    //   },
    //   admin: {
    //     position: 'sidebar',
    //   },
    // },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: {
        en: 'Slug',
        de: 'Kurzlink',
      },
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ siblingData, value }) => {
            if (siblingData?.title) {
              return slugify(siblingData.title, { lower: true })
            }
            return value
          },
        ],
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'Hero',
            de: 'Held',
          },
          fields: [Hero],
        },
        {
          label: {
            en: 'Personalvermittlung',
            de: '',
          },
          fields: [Personalvermittlung],
        },
        {
          label: 'Unternehmen & Kandidat:innen',
          fields: [Unternehmen],
        },
        {
          label: {
            en: 'OffeneStellen',
            de: '',
          },
          fields: [OffeneStellen],
        },
        {
          label: {
            en: 'Faq Section',
            de: 'FAQ-Abschnitt', // Filled in missing DE label
          },
          fields: [FaqSection],
        },
        {
          label: {
            en: 'Contact',
            de: '', // Filled in missing DE label
          },
          fields: [Contact],
        },
        {
          label: {
            en: 'SEO',
            de: 'SEO',
          },
          fields: [SEO],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: {
        en: 'Published At',
        de: 'Veröffentlicht am',
      },
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHome],
  },
}
