import generatePageMetadata from "./untils/generatePageMetadata";
import HomePage from "../(frontend)/home/page";

export const dynamic = "force-dynamic";

// Main component that renders the page content
export default async function Home() {
  return <HomePage />;
}

// This function is automatically called by Next.js to populate the <head>
export async function generateMetadata() {
  return generatePageMetadata("home", {
    title: "Home",
    description: "Welcome to the homepage",
  });
}
