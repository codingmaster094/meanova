import type { GlobalConfig } from 'payload'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { SEO } from '@/app/components/SEO/config'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: {
    en: 'Site settings',
    de: 'Website-Einstellungen',
  },
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: { en: 'General', de: 'Allgemein' },
          fields: [
            {
              name: 'siteName',
              type: 'text',
              label: { en: 'Site name', de: 'Website-Name' },
              defaultValue: 'MeaNova',
            },
            {
              name: 'tagline',
              type: 'text',
              label: { en: 'Tagline', de: 'Untertitel' },
            },
          ],
        },
        {
          label: { en: 'Contact', de: 'Kontakt' },
          fields: [
            { name: 'email', type: 'email', label: 'E-Mail' },
            { name: 'phone', type: 'text', label: { en: 'Phone', de: 'Telefon' } },
            { name: 'address', type: 'textarea', label: { en: 'Address', de: 'Adresse' } },
          ],
        },
        {
          label: 'SEO',
          fields: [SEO],
        },
      ],
    },
  ],
}
