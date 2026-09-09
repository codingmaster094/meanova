'use client'

import React from 'react'
import Link from 'next/link'
import { brandConfig } from '@/lib/brand'

export default function AboutPage() {
  return (
    <div className="space-y-24 sm:space-y-36 pb-24 sm:pb-36">
      {/* Hero */}
      <section className="bg-neutral-950 text-white py-24 sm:py-32">
        <div className="container max-w-3xl text-center space-y-6 sm:space-y-8">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-outfit">Our Philosophy</span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-outfit tracking-tight">
            Designed for the Way You Sit.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-light leading-relaxed">
            At {brandConfig.brandName}, we believe seating is not merely furniture — it is the essential interface between human physiology, focused intellect, and architectural design.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
        <div className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-outfit">Craftsmanship & Science</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-neutral-900 tracking-tight">
            Precision Ergonomics Meets Luxury Aesthetics
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Founded with a commitment to eliminate desk fatigue, every model in our collection undergoes rigorous BIFMA load testing, spine biomechanics alignment, and luxury material selection.
          </p>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            From Italian elastomeric mesh to top-grain Nappa leathers and die-cast aluminum frames, our chairs are built to endure decades of intense daily performance.
          </p>
        </div>

        <div className="h-80 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl bg-neutral-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=1200&auto=format&fit=crop"
            alt="Handcrafting luxury chair leather"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-neutral-50 py-24 border-y border-neutral-200">
        <div className="container space-y-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-neutral-900 text-center">Our Four Design Pillars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-8 bg-white rounded-3xl border border-neutral-100 space-y-3 shadow-sm">
              <span className="text-3xl">⚡</span>
              <h3 className="font-bold text-base font-outfit text-neutral-900">Spine Alignment</h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">Active lumbar matrix adapting to natural curvature.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-neutral-100 space-y-3 shadow-sm">
              <span className="text-3xl">🌱</span>
              <h3 className="font-bold text-base font-outfit text-neutral-900">Thermal Comfort</h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">Breathable mesh for zero heat retention.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-neutral-100 space-y-3 shadow-sm">
              <span className="text-3xl">🛡️</span>
              <h3 className="font-bold text-base font-outfit text-neutral-900">10-Year Guarantee</h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">Heavy-duty structural integrity confidence.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-neutral-100 space-y-3 shadow-sm">
              <span className="text-3xl">🎨</span>
              <h3 className="font-bold text-base font-outfit text-neutral-900">Sculptural Form</h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">Architectural elegance elevating any space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-neutral-900">Experience the MEANOVA Difference</h2>
        <Link
          href="/chairs"
          className="inline-block px-9 py-4 bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider rounded-2xl hover:bg-neutral-800 transition min-h-[48px] shadow-lg"
        >
          Explore All Chairs Catalog
        </Link>
      </section>
    </div>
  )
}
