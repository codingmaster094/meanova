import React from 'react'
import HeroSection from "../components/HeroSection"
import Personalvermittlung from "../components/Personalvermittlung"
import OffenStellen from "../components/OffenStellen"
import FAQ from "../components/FAQ"
import Kontakt from "../components/Kontakt"
import Tab2 from "../components/Tab2"
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import Alldata from "../untils/AllDataFatch"
import SEO_schema from "../components/SEO_schema"
export const dynamic = "force-dynamic";

const page = async() => {
   let HomePageData;
  try {
    HomePageData = await Alldata("home");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!HomePageData) {
    return <div>No data available.</div>;
  }
  return (
    <>
      <SEO_schema slug="home" faqs={HomePageData?.FaqSection?.FaqContent} />
      <HeroSection
        Heading={HomePageData?.hero?.Heading}
        SubHeading={HomePageData?.hero?.SubHeading}
        BG_Image={HomePageData?.hero?.heroImage}
        BTN={HomePageData?.hero?.hero_link}
        Description={HomePageData?.hero?.richText?.root?.children}
      />
      <Personalvermittlung
        Side_Image={HomePageData?.personalvermittlung?.personalvermittlung_Image}
        Heading={HomePageData?.personalvermittlung?.Heading}
        Description={HomePageData?.personalvermittlung?.description?.root?.children}
      />
      <Tab2 data={HomePageData?.unternehmen} />
      <OffenStellen
        SideImage={HomePageData?.offeneStellen?.offeneStellenImage}
        Heading={HomePageData?.offeneStellen?.heading}
        Description={HomePageData?.offeneStellen?.description?.root?.children}
        BTN={HomePageData?.offeneStellen?.offeneStellen_link}
      />
      <FAQ
        Section_Show={HomePageData?.FaqSection?.enableFAQ}
        title={HomePageData?.FaqSection?.Heading}
        FAQ_Data={HomePageData?.FaqSection?.FaqContent}
      />
      <Kontakt
        Heading={HomePageData?.kontakt?.Heading}
        SubHeading={HomePageData?.kontakt?.SubHeading}
        FormHeading={HomePageData?.kontakt?.FormHeading}
        SubmitButton={HomePageData?.kontakt?.sumbimtedButtonLabel || "Anfrage abschicken"}
        DatenschutzerklarungLink={HomePageData?.kontakt?.DatenschutzerklarungLink}
      />
    </>
  )
}

export default page
