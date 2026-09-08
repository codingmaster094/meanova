import RenderBlocks from '../components/RenderBlocks'
import { getPageBySlug } from '@/lib/cms'
import Alldata from '../untils/AllDataFatch'
import HeroSection from '../components/HeroSection'
import Personalvermittlung from '../components/Personalvermittlung'
import OffenStellen from '../components/OffenStellen'
import FAQ from '../components/FAQ'
import Kontakt from '../components/Kontakt'
import Tab2 from '../components/Tab2'
import SEO_schema from '../components/SEO_schema'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const page = await getPageBySlug('home')

  if (page?.layout?.length) {
    return <RenderBlocks blocks={page.layout} />
  }

  const legacy = await Alldata('home')
  if (!legacy) return <div className="pagecontent">No homepage content available.</div>

  return (
    <>
      <SEO_schema slug="home" data={legacy} faqs={legacy?.FaqSection?.FaqContent} />
      <HeroSection Heading={legacy?.hero?.Heading} SubHeading={legacy?.hero?.SubHeading} BG_Image={legacy?.hero?.heroImage} BTN={legacy?.hero?.hero_link} Description={legacy?.hero?.richText?.root?.children} />
      <Personalvermittlung Side_Image={legacy?.personalvermittlung?.personalvermittlung_Image} Heading={legacy?.personalvermittlung?.Heading} Description={legacy?.personalvermittlung?.description?.root?.children} />
      <Tab2 data={legacy?.unternehmen} />
      <OffenStellen SideImage={legacy?.offeneStellen?.offeneStellenImage} Heading={legacy?.offeneStellen?.heading} Description={legacy?.offeneStellen?.description?.root?.children} BTN={legacy?.offeneStellen?.offeneStellen_link} />
      <FAQ Section_Show={legacy?.FaqSection?.enableFAQ} title={legacy?.FaqSection?.Heading} FAQ_Data={legacy?.FaqSection?.FaqContent} />
      <Kontakt Heading={legacy?.kontakt?.Heading} SubHeading={legacy?.kontakt?.SubHeading} FormHeading={legacy?.kontakt?.FormHeading} SubmitButton={legacy?.kontakt?.sumbimtedButtonLabel || 'Anfrage abschicken'} DatenschutzerklarungLink={legacy?.kontakt?.DatenschutzerklarungLink} />
    </>
  )
}
