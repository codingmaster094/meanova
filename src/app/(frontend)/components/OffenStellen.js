'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Lenis from "@studio-freight/lenis";

const OffenStellen = (
    {
        SideImage,
        Heading,
        Description,
        BTN
    }
) => {
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

    // ✅ Smooth scroll handler for internal section links
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
            <section className='relative py-32 md:py-70 xl:py-160' id='jobs'>
                <div className="relative z-10" id="Gebrauchtwagen">
                    <div className="container">
                        <div className="flex flex-col-reverse lg:flex-row gap-20 lg:gap-64 justify-center items-start xxl:items-center">
                            <div className="w-full lg:w-1/2 xxl:w-9/12 flex flex-col gap-32 ">
                                <div className='mb-24'>
                                    <div className="mb-24">
                                        <h2 className="text-h2/snug font-normal font-jakarta" dangerouslySetInnerHTML={{ __html: Heading }}>
                                        </h2>
                                    </div>
                                    <div className='line max-w-225 w-full border-1 border-solid border-grey1'></div>
                                </div>
                                <div className="space-y-24 text-dark">
                                    {Description &&
                                        Description.map((block, index) => {
                                            if (block.type === "list") {
                                                return (
                                                    <ul key={index} className="pl-20 list-disc space-y-8">
                                                        {block.children.map((item, i) => (
                                                            <li key={i}>{item.children[0].text}</li>
                                                        ))}
                                                    </ul>
                                                );
                                            } else if (block.type === "paragraph") {
                                                return (
                                                    <p key={index}>
                                                        {block.children.map((child) => child.text).join(" ")}
                                                    </p>
                                                );
                                            } else if (block.type === "heading") {
                                                return (
                                                    <span
                                                        key={index}
                                                        className="block font-medium"
                                                        dangerouslySetInnerHTML={{
                                                            __html: block.children.map((child) => child.text).join(" "),
                                                        }}
                                                    ></span>
                                                );
                                            } else {
                                                return null;
                                            }
                                        })}

                                </div>
                                {
                                    BTN?.url ?
                                        <Link onClick={(e) => handleSmoothScroll(e, BTN.url)} href={BTN.url} aria-label="Kontaktieren Sie uns – Startseite" className="btn-dark block mt-24"><span>{BTN.label}</span></Link>
                                        :
                                        null
                                }
                            </div>
                            <div className="w-full lg:w-1/2 xxl:w-full xxl:-mr-[calc((100vw-1470px)/2)] relative lg:sticky lg:top-50">
                                {SideImage?.url ? (
                                <Image src={SideImage.url}  alt={SideImage?.alt || ""} role="img" width={1920} height={900} fetchPriority="high" sizes="(max-width: 1024px) 100vw, 1920px" className="relative lg:sticky lg:top-50  object-cover" />
                                ) : null}      
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default OffenStellen