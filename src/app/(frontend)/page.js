'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { PRODUCTS, CATEGORIES, COLLECTIONS, WHY_CHOOSE_US } from '@/lib/seedData'
import ProductCard from './components/ProductCard'

export default function HomePage() {
  const featuredProducts = PRODUCTS.filter((p) => p.featured || p.bestSeller).slice(0, 4)
  const [activeErgoTab, setActiveErgoTab] = useState('lumbar')

  const ergoDetails = {
    lumbar: {
      title: 'Dynamic Lumbar Matrix',
      description: 'Automatically adjusts to your lower spine curvature, actively reducing lumbar disk pressure by up to 40%.',
      image: 'https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?q=80&w=800&auto=format&fit=crop',
    },
    armrests: {
      title: '4D Fluid Multidirectional Armrests',
      description: 'Adjust height, width, depth, and pivot angle to eliminate shoulder tension and wrist strain during typing.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
    },
    recline: {
      title: '135° Synchro-Tilt Recline',
      description: 'Seamlessly shift between deep focus and relaxed brainstorming with 4 lockable recline angles.',
      image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=800&auto=format&fit=crop',
    },
    mesh: {
      title: 'Italian Elastomeric Breathable Mesh',
      description: 'Engineered for maximum thermal dissipation, keeping you cool and comfortable even through marathon workdays.',
      image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=800&auto=format&fit=crop',
    },
  }

  return (
    <div className="space-y-24 sm:space-y-36 pb-24 sm:pb-36">
      {/* 1. HERO SECTION */}
      <section className="relative bg-neutral-950 text-white overflow-hidden py-24 sm:py-32 lg:py-44">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-neutral-900/90 to-transparent z-10" />
        
        {/* Background Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Ergonomic Executive Chair"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 scale-105"
        />

        <div className="relative z-20 container">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              Next-Generation Seating Technology
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-outfit tracking-tight leading-tight text-white">
              Sit Better. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-300 to-amber-200">
                Work Better. Live Better.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-light">
              Engineering state-of-the-art ergonomic chairs, luxury executive leather seating, and high-performance task chairs designed for health, endurance, and refined spaces.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <Link
                href="/chairs"
                className="px-9 py-4.5 bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-2xl hover:bg-neutral-200 transition shadow-2xl text-center min-h-[48px] flex items-center justify-center"
              >
                Explore All Chairs
              </Link>
              <Link
                href="/collections"
                className="px-9 py-4.5 bg-neutral-900/80 backdrop-blur border border-neutral-700 text-white font-bold text-xs uppercase tracking-wider rounded-2xl hover:bg-neutral-800 transition text-center min-h-[48px] flex items-center justify-center"
              >
                View Collections
              </Link>
            </div>

            {/* Key Metrics */}
            <div className="pt-10 sm:pt-12 grid grid-cols-3 gap-6 sm:gap-8 border-t border-neutral-800 text-xs">
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-outfit text-white">10-Year</span>
                <span className="text-neutral-400 text-xs sm:text-sm">Frame Warranty</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-outfit text-white">30-Day</span>
                <span className="text-neutral-400 text-xs sm:text-sm">Risk-Free Trial</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-outfit text-white">Free</span>
                <span className="text-neutral-400 text-xs sm:text-sm">Express Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED CATEGORIES */}
      <section className="container space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-outfit">Curated Selection</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-neutral-900 tracking-tight">Browse by Chair Category</h2>
          </div>
          <Link href="/categories" className="text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-amber-700 transition">
            View All Categories →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  {cat.productCount} Products Available
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-outfit group-hover:text-amber-200 transition-colors">{cat.name}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS */}
      <section className="container space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-outfit">Flagship Seating</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-neutral-900 tracking-tight">Best-Selling Chairs</h2>
          </div>
          <Link href="/chairs" className="text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-amber-700 transition">
            Explore All Chairs →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US / CRAFTSMANSHIP */}
      <section className="bg-neutral-900 text-white py-24 sm:py-32">
        <div className="container space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-outfit">The MEANOVA Standard</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit tracking-tight">Engineered Without Compromise</h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Every MEANOVA chair represents hundreds of hours of ergonomic refinement, structural testing, and luxury material selection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="bg-neutral-850 p-8 rounded-3xl border border-neutral-800 space-y-4 hover:border-neutral-700 transition shadow-xl">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-amber-400 font-bold text-xl font-outfit">
                  0{idx + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-outfit text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE ERGONOMIC EXPERIENCE */}
      <section className="container space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-outfit">Precision Engineering</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-neutral-900 tracking-tight">The Anatomy of Perfect Sitting</h2>
          <p className="text-xs sm:text-sm text-neutral-600">Click below to explore how our chairs protect your spine and maintain optimal energy levels.</p>
        </div>

        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center shadow-sm">
          {/* Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {Object.keys(ergoDetails).map((key) => (
              <button
                key={key}
                onClick={() => setActiveErgoTab(key)}
                className={`w-full text-left p-5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                  activeErgoTab === key
                    ? 'bg-neutral-900 text-white shadow-xl sm:translate-x-2'
                    : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                }`}
              >
                {ergoDetails[key].title}
              </button>
            ))}
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl shadow-md border border-neutral-100">
            <div className="h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-neutral-100 shadow-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ergoDetails[activeErgoTab].image}
                alt={ergoDetails[activeErgoTab].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Featured Technology</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-neutral-900">{ergoDetails[activeErgoTab].title}</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{ergoDetails[activeErgoTab].description}</p>
              <Link
                href="/chairs"
                className="inline-block px-6 py-3.5 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition shadow-md"
              >
                Find Chairs with This Feature
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COLLECTIONS SHOWCASE */}
      <section className="container space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-outfit">Signature Lines</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-neutral-900 tracking-tight">Curated Design Collections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {COLLECTIONS.slice(0, 2).map((col) => (
            <div key={col.id} className="group relative h-96 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-end p-8 sm:p-12 text-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={col.image}
                alt={col.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">{col.tagline}</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold font-outfit">{col.name}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-md leading-relaxed">{col.description}</p>
                <Link
                  href={`/collections/${col.slug}`}
                  className="inline-block mt-4 px-7 py-3.5 bg-white text-neutral-900 text-xs font-bold uppercase tracking-wider rounded-2xl hover:bg-neutral-200 transition shadow-lg"
                >
                  Explore Collection →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <section className="bg-neutral-50 py-24 sm:py-32 border-y border-neutral-200">
        <div className="container space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-outfit">Verified Feedback</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-neutral-900 tracking-tight">What Chair Owners Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 space-y-5">
              <div className="flex text-amber-500 text-base">★★★★★</div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-serif italic">
                “As a software architect sitting 10+ hours a day, the ErgoPro Apex completely eliminated my chronic lower back strain within two weeks.”
              </p>
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="font-bold text-neutral-900">Dr. Marcus Vance</span>
                <span className="text-neutral-400">Verified Buyer</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 space-y-5">
              <div className="flex text-amber-500 text-base">★★★★★</div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-serif italic">
                “The Monarch Sovereign leather executive chair is the centerpiece of our boardroom. Meticulous craftsmanship and unbelievable comfort.”
              </p>
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="font-bold text-neutral-900">Elena Rostova</span>
                <span className="text-neutral-400">Executive VP</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 space-y-5">
              <div className="flex text-amber-500 text-base">★★★★★</div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-serif italic">
                “The 30-day risk-free trial gave us total confidence. We ordered 15 AeroMesh chairs for our creative studio and couldn’t be happier.”
              </p>
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="font-bold text-neutral-900">David K.</span>
                <span className="text-neutral-400">Studio Director</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PROMINENT CTA */}
      <section className="container">
        <div className="bg-neutral-900 text-white rounded-3xl p-10 sm:p-16 lg:p-20 text-center space-y-8 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-outfit">Find Your Perfect Fit</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-outfit tracking-tight">Ready to Elevate Your Daily Comfort?</h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Browse our full chair collection or use our interactive comparison tool to find the exact model for your body and workspace.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link
                href="/chairs"
                className="px-9 py-4.5 bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-2xl hover:bg-neutral-200 transition shadow-xl text-center"
              >
                Explore All Chairs
              </Link>
              <Link
                href="/contact"
                className="px-9 py-4.5 bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-2xl hover:bg-neutral-700 transition text-center"
              >
                Visit Showroom
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
