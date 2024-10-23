import { Blogs } from "@/constants/blogs";
import { url } from "inspector";

export default async function sitemap() {
  const baseUrl = "https://jubyte.vercel.app";
  const blogUrls = Blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.id}`,
    lastModified: new Date(),
  }));
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/blogs`, lastModified: new Date() },
    { url: `${baseUrl}/blogs/[slug]`, lastModified: new Date() },
    ...blogUrls,
  ];
}
