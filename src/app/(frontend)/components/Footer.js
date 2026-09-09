"use client";
import React from "react";
import Link from "next/link";
import { brandConfig } from "@/lib/brand";
import { CATEGORIES } from "@/lib/seedData";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 pt-20 pb-14">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 pb-20 border-b border-neutral-850">
          {/* Brand Info */}
          <div className="sm:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white text-neutral-950 font-extrabold flex items-center justify-center rounded-2xl text-xl tracking-tighter shadow-md font-outfit">
                M
              </div>
              <span className="font-outfit font-black text-2xl tracking-tight text-white">
                {brandConfig.brandName}
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              {brandConfig.brandDescription}
            </p>
            <div className="pt-2 text-xs sm:text-sm text-neutral-400 space-y-2">
              <p><strong className="text-neutral-200">Showroom & HQ:</strong> {brandConfig.address}</p>
              <p><strong className="text-neutral-200">Email:</strong> {brandConfig.contactEmail}</p>
              <p><strong className="text-neutral-200">Phone:</strong> {brandConfig.phone}</p>
            </div>
          </div>

          {/* Chair Categories */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-amber-400 font-outfit">Categories</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/categories/${cat.slug}`} className="hover:text-white transition py-1 block">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-amber-400 font-outfit">Customer Support</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li><Link href="/chairs" className="hover:text-white transition py-1 block">All Chairs Catalog</Link></li>
              <li><Link href="/collections" className="hover:text-white transition py-1 block">Signature Collections</Link></li>
              <li><Link href="/compare" className="hover:text-white transition py-1 block">Chair Comparison Tool</Link></li>
              <li><Link href="/wishlist" className="hover:text-white transition py-1 block">Saved Wishlist</Link></li>
              <li><Link href="/cart" className="hover:text-white transition py-1 block">Shopping Cart</Link></li>
              <li><Link href="/contact" className="hover:text-white transition py-1 block">Contact & Showroom</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-amber-400 font-outfit">Stay Informed</h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Subscribe for ergonomics advice, new seating releases, and exclusive member discounts.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-2xl text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 font-medium"
              />
              <button
                type="submit"
                className="w-full py-3.5 bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-2xl hover:bg-neutral-200 transition shadow-lg min-h-[48px]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-neutral-500 gap-6 text-center sm:text-left font-medium">
          <p>© {new Date().getFullYear()} {brandConfig.brandName}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/datenschutzerklaerung" className="hover:text-neutral-300">Privacy Policy</Link>
            <Link href="/impressum" className="hover:text-neutral-300">Terms of Service</Link>
            <Link href="/contact" className="hover:text-neutral-300">Warranty Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
