import Header from "./components/Header";
import Footer from "./components/Footer";
import Cookie from "./components/Cookie";
import Alldata from "./untils/AllDataFatch";
import "../../../public/css/globals.css";

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }) {
  let HeaderData = null;
  let MenusData = null;
  let FooterData = null;

  try {
    const [header, menus, footer] = await Promise.all([
      Alldata("header"),
      Alldata("menus"),
      Alldata("footer"),
    ]);
    HeaderData = header;
    MenusData = menus;
    FooterData = footer;
  } catch (error) {
    console.error("Layout CMS fetch failed:", error);
  }

  return (
    <html lang="de">
      <body>
        <Header HeaderData={HeaderData} MenusData={MenusData} />
        {children}
        <Footer FooterData={FooterData} />
        <Cookie />
      </body>
    </html>
  );
}
