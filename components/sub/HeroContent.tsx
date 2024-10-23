

"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { CubeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Download } from "lucide-react";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 max-md:px-6 mt-20 w-full z-[20]"
    >
      <div className="h-full max-md:h-[60vh] w-full flex flex-col gap-5 justify-center max-md:items-center m-auto text-start">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop}
          className="max-md:hidden welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-90"
        >
          <CubeIcon className="text-[#b49bff] mx-[10px] h-5 w-5" />
          <h1 className="welcome-text text-[13px]">
            الأفضل في مشاريع الذكاء الصناعي
          </h1>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.2)}
          className="flex flex-col gap-6 mt-6 text-6xl max-md:text-[56px] max-sm:text-[32px] font-bold text-white max-w-[600px] max-md:max-w-full max-md:w-full w-auto h-auto"
        >
          <span className="leading-[80px] max-sm:leading-[50px] max-md:text-center">
            I am{" "}
            <TypeAnimation
              className="text-transparent text-[60px] max-md:text-[48px] max-sm:text-[32px] font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
              sequence={[
                "Abdalla Tawfig",
                3000,
                "Mobile Developer",
                2000,
                "Native Android",
                2000,
                "Flutter Expert",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />{" "}
            <br />
          </span>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.5)}
          className="text-lg text-gray-400 my-5 max-w-[600px] max-md:text-center"
        >
          👋 Hi, Im Abdalla, A passionate Software Engineering student at
          Üsküdar University with hands-on experience in Kotlin, Native Android,
          and Flutter development. My journey in mobile development has equipped
          me with a solid foundation in building high-quality, user-friendly
          applications. I thrive in collaborative environments and am dedicated
          to delivering innovative solutions that enhance user experiences.
        </motion.p>
        <motion.a
          initial="hidden"
          animate="visible"
          href="/#footer"
          variants={slideInFromLeft(0.8)}
          className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <div className="flex gap-2 justify-center items-center">
            <Download className="w-5 h-5" />
            Download CV
          </div>
        </motion.a>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromRight(0.5)}
        className="w-full h-full flex flex-center items-center max-md:hidden"
      >
        <Image
          src="/mainIconsdark.svg"
          width={650}
          height={650}
          alt="icons"
          priority
          layout="responsive"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;






