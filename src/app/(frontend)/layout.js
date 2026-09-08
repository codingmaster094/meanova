// layout.js (app/layout.js)

import Header from "../(frontend)/header/page"; // <-- PROBLEM IS HERE
import "../../../public/css/globals.css";
import Footer from "../(frontend)/footer/page";
import Cookie from "./components/Cookie";

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Header />
        {children}
        <Footer />
         <Cookie />
      </body>
    </html>
  );
}