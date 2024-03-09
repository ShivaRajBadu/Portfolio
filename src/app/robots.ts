import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://portfolio-git-main-shivarajbadu.vercel.app/sitemap.xml",
  };
}
