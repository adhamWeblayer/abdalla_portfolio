"use client";

import { Blogs } from "@/constants/blogs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Head from "next/head";

type Blog = {
  id: number;
  title: string;
  image: string;
  description: string;
  content: string;
};

const BlogPost = () => {
  const router = useRouter();
  const [slug, setSlug] = useState<string | undefined>(undefined);
  const [blog, setBlog] = useState<Blog | undefined>(undefined);

  useEffect(() => {
    const path = window.location.pathname.split("/");
    const slugFromUrl = path[path.length - 1];
    setSlug(slugFromUrl);
  }, []);

  useEffect(() => {
    if (slug) {
      const foundBlog = Blogs.find((blog) => blog.id.toString() === slug);
      setBlog(foundBlog);
    }
  }, [slug]);

  useEffect(() => {
    if (blog) {
      document.title = `${blog.title} | جوبايت سوفتوير`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", blog.description);
      } else {
        const description = document.createElement("meta");
        description.name = "description";
        description.content = blog.description;
        document.head.appendChild(description);
      }
    }
  }, [blog]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  const canonicalUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="container mx-auto p-4 flex flex-col items-center pt-20 z-20">
      <Head>
        <title>{`${blog.title} | جوبايت سوفتوير`}</title>
        <meta name="description" content={blog.description} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <h1 className="lg:text-3xl md:text-2xl sm:text-2xl text-center font-bold mb-6 text-white mt-5 z-20">
        {blog.title}
      </h1>
      <div className="lg:h-[450px] md:h-[300px] sm:h-auto max-sm:w-full object-cover mt-5 overflow-hidden rounded-[10px] z-20">
        <img src={blog.image} alt={blog.title} className="w-full h-full z-20" />
      </div>
      <div
        className="blog_content lg:text-[18px] md:text-[18px] sm:text-[16px] text-white text-right mt-10 z-20 w-full px-5 overscroll-contain break-words"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
    </div>
  );
};

export default BlogPost;
