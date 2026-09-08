'use client';
import Image from "next/image";
import Link from "next/link";
  import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
const Footer = ({ FooterData }) => {
  // Safely destructure data with default empty objects/arrays to ensure data paths exist
  const {
    // footerlogo = {},
    kontakt = {},
    social = [],
    sprechzeiten = [],
    navigation = [],
    legalLinks = [],
    copyright = ""
  } = FooterData || {}; 
  const navMenus = navigation[0]?.menus ?? [];

  const lenisRef = useRef(null);
  
    useEffect(() => {
      const scroller = new Lenis({
        duration: 1.2, // speed of scroll
        easing: (t) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        smoothTouch: false,
      });
  
      function raf(time) {
        scroller.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
      lenisRef.current = scroller;
  
      return () => {
        scroller.destroy();
      };
    }, []);

    const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetEl = document.querySelector(targetId);
    if (targetEl && lenisRef.current) {
      lenisRef.current.scrollTo(targetEl, {
        offset: -80, // adjust for sticky header height
        duration: 1.2,
      });
    }
    setIsOpen(false); // close off-canvas if open
  };
  return (
    <>
      <footer>
        <div className="footer-top pt-50 md:pt-80 pb-50 md:pb-100 bg-primary_1 text-white">
          <div className="container">
            <div className="inner flex justify-start xlg:justify-between items-start gap-20 xl:gap-40 flex-wrap xlg:flex-nowrap">
              {/* col1 */}
              {/* <div className='w-full sm:w-[calc(50%-20px)] md:w-[calc(33%-40px)] xlg:w-full'>
                {footerlogo.url && ( // Only render if the URL exists
                  <Link href="/">
                    <Image
                      src={footerlogo.url}
                      alt="company logo for footer"
                      width={48}
                      height={48}
                      role="img"
                      className='w-48 object-cover'
                    />
                  </Link>
                )}
              </div> */}
              {/* col2 */}
              <div className='foot-col1 flex flex-col gap-16 md:gap-32 w-full md:w-[calc(50%-20px)] lg:w-[calc(33%-40px)]  xlg:w-full'>
                <span className="font-jakarta font-medium text-h4">Kontakt</span>
                <ul className='md:space-y-8'>
                  {kontakt.address && (
                    <li>
                      <div className="flex items-start gap-8">
                        <Image src="/images/location.svg" alt="icon of location" role="img" width={20} height={20} className='w-20 h-20' />
                        <span dangerouslySetInnerHTML={{__html:kontakt.address}}></span>
                      </div>
                    </li>
                  )}
                  {kontakt.phone_urls && (
                    <li>
                      <Link href={`tel:${kontakt.phone_urls.replace(/[\s()-]/g, '')}`}role='link' className="flex items-start gap-8">
                        <Image src="/images/phone.svg" alt="icon of phone" role="img" width={20} height={20} className='w-20 h-20' />
                        <span>{kontakt.phone}</span>
                      </Link>
                    </li>
                  )}
                  {kontakt.email_url && (
                    <li>
                      <Link href={kontakt.email_url} role='link' className="flex items-start gap-8">
                        <Image src="/images/mail.svg" alt="icon of mail" role="img" width={20} height={20} className='w-20 h-20' />
                        <span>{kontakt.email}</span>
                      </Link>
                    </li>
                  )}
                </ul>
                <div className='flex gap-16 justify-start items-center'>
                  {
                    social.map((item, i) => item.social_url ? ( // Check for URL again for the Link prop
                      <Link href={item.social_url} role="link" target="_blank" key={i}>
                        <Image
                          src={item.social_icon?.url || ''} // Use optional chaining for nested object
                          alt={`${item.social_icon?.alt || 'social'} icon`}
                          role="img"
                          width={item.social_icon?.width || 24} // Provide a default width/height
                          height={item.social_icon?.height || 24}
                        />
                      </Link>
                    ) : null)
                  }
                </div>
              </div>
              {/* col3 */}
              <div className='flex flex-col gap-16 md:gap-32 w-full md:w-[calc(50%-20px)] lg:w-[calc(33%-40px)] xlg:w-full'>
                <span className="font-jakarta font-medium text-h4/snug">Öffnungszeiten</span>
                <ul className="timings-list [&_li]:grid [&_li]:grid-cols-[120px_1fr] space-y-8 *:leading-snug">
                  {
                    sprechzeiten.map((item, i) => (
                      <li key={i}>
                        <span className="font-semibold">{item.day}</span>{item.time}
                      </li>
                    ))
                  }
                </ul>
              </div>
              {/* col4 */}

              <div className='flex flex-col gap-16 md:gap-32 w-full md:w-[calc(50%-20px)] lg:w-[calc(33%-40px)] xlg:w-full'>
                <span className="font-jakarta font-medium text-h4/snug">Navigation</span>
                <ul className='space-y-8 *:leading-snug'>
                  {
                    navMenus.map((item, i) => { // Use the safely extracted navMenus
                      if (item.url) {
                        return (
                          <li key={i}>
                            <Link href={item.url} role='link' onClick={(e) => handleSmoothScroll(e, item.url)}>
                              {item.label}
                            </Link>
                          </li>
                        );
                      }
                      return null;
                    })
                  }
                </ul>

              </div>
              {/* col5 */}
              <div className='flex flex-col gap-16 md:gap-32 w-full md:w-[calc(50%-20px)] lg:w-[calc(33%-40px)] xlg:w-full'>
                <span className="font-jakarta font-medium text-h4/snug">Rechtliches </span>
                <ul className='space-y-8 *:leading-snug'>
                  {
                    legalLinks.map((item, i) => {
                      if (item.url) {
                        return (
                          <li key={i}>
                            <Link href={item.url} role='link'>
                              {item.label}
                            </Link>
                          </li>
                        );
                      }
                      return null;
                    })
                  }

                </ul>

              </div>
            </div>
          </div>
        </div>
        {
          copyright ? 
        <div className='footer-btm bg-white'>
          <div className='p-16 flex justify-center items-center text-center text-base text-primary'>
            <p>{copyright}</p>
          </div>
        </div> : null
        }
      </footer>
    </>
  )
}

export default Footer
