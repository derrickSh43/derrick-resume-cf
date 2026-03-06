import { MetadataRoute } from "next";

const routes = ["", "/about", "/projects", "/writing", "/resume", "/consulting", "/ask", "/contact", "/admin"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://example.com${route}`,
    lastModified: new Date()
  }));
}
