import React from "react";

import { Projects } from "@/constants";
import { Blogs } from "@/constants/blogs";
import ProjectCard from "@/components/sub/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "مقالات | جوبايت",
  description:
    "شركة برمجيات في مصر . جوبايت توفر لك تصميم مواقع و تصميم تطبيقات لتحقيق أهداف مشروعك · إنشاء المواقع الإلكترونية · إنشاء تطبيقات الجوال · خدمات التسويق الرقمي · تصميم الهوية ...",
};

const ProjectsSection = () => {
  return (
    <>
      {Blogs ? (
        <div
          className="flex flex-col items-center justify-center z-50 min-h-screen mt-24"
          id="projects"
        >
          <h1 className="text-4xl z-50 font-light text-white text-center leading-snug mb-10">
            أخر{" "}
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2">
              المقالات
            </span>
          </h1>
          <div className="px-20 z-50 max-md:px-10 max-sm:px-5 w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Blogs.map((blog) => (
              <div key={blog.id} className="flex items-center justify-center">
                <ProjectCard
                  image={blog.image}
                  title={blog.title}
                  description={blog.description}
                  link={`/blogs/${JSON.stringify(blog.id)}`}
                  icons={[]}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProjectsSection;
