import Header from "./components/Header";
import Footer from "./components/Footer";
import Cookie from "./components/Cookie";
import CartDrawer from "./components/CartDrawer";
import QuickViewModal from "./components/QuickViewModal";
import CompareDrawer from "./components/CompareDrawer";
import { ShopProvider } from "@/context/ShopContext";
import "../../../public/css/globals.css";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "MEANOVA CHAIRS | Designed for the way you sit",
  description:
    "Discover premium ergonomic chairs, luxury executive leather seating, high-performance office chairs, and gaming thrones engineered for health and comfort.",
  openGraph: {
    title: "MEANOVA CHAIRS | Designed for the way you sit",
    description: "Premium ergonomic, executive, office, and gaming chairs engineered for modern performance.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased font-outfit">
        <ShopProvider>
          <Header />
          <main className="min-h-screen">{children}</main>

          {/* Interactive Drawers & Modals */}
          <CartDrawer />
          <QuickViewModal />
          <CompareDrawer />

          <Footer />
          <Cookie />
        </ShopProvider>
      </body>
    </html>
  );
}
