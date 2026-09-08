export async function GET() {
  try {
    const res = await fetch(`${process.env.BASE_DOAMAIN || "https://mea-nova.vercel.app"}/sitemap.xml`, {
      next: { revalidate: 3600 }, // revalidate every hour
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch sitemap: ${res.statusText}`);
    }

    const xml = await res.text();

    return new Response(xml, {
      headers: { "Content-Type": "application/xml" },
    });
  } catch (error) {
    console.error("sitemap.xml fetch error:", error);

    const fallbackXML = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${process.env.BASE_DOAMAIN || "https://mea-nova.vercel.app"}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    </urlset>`;

    return new Response(fallbackXML, {
      headers: { "Content-Type": "application/xml" },
    });
  }
}
