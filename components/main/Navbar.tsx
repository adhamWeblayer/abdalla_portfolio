import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { Button } from "../ui/button";


const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/20 bg-black/50 backdrop-blur-md z-[99] px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo_text.png"
            alt="logo"
            width={180}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />

        </a>
{/* This appears if lg screen */}
<div className="hidden lg:flex w-[500px] h-full flex-row items-center justify-between md:ml-20">
        <div className="flex items-center justify-between w-full h-auto ml-[15px] px-[40px] py-[10px] rounded-full text-gray-200">
          <a href="/#partners" className="cursor-pointer">
          شركاؤنا
          </a>
          <a href="/#projects" className="cursor-pointer">
            مشاريع
          </a>
          <a href="/#testimonials" className="cursor-pointer">
          أراء
          </a>
          <a href="/blogs" className="cursor-pointer">
          مقالات
          </a>
        </div>
      </div>

      {/* This appears if sm or md screen */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <span className="sr-only">BurgerMenu</span>
            <Menu className="text-white" />
            </SheetTrigger>
          <SheetContent className="bg-gray-900 border border-transparent shadow-lg shadow-purple-400/70">
          <div className="flex flex-col items-center gap-4 w-full text-gray-200 pt-16">
          <a href="#partners" className="cursor-pointer text-xl">
          شركاؤنا
          </a>
          <a href="#projects" className="cursor-pointer text-xl">
          مشاريع
          </a>
          <a href="#testimonials" className="cursor-pointer text-xl">
          أراء
          </a>
          <a href="/blogs" className="cursor-pointer">
          مقالات
          </a>
        </div>
          </SheetContent>
        </Sheet>
      </div>

      </div>
    </div>
  );
};

export default Navbar;