import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[20]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-start justify-around flex-wrap">
                
                <div className="min-w-[200px] h-auto flex flex-col gap-y-4 items-center justify-start my-[15px]">
                    <div className="font-bold text-[16px]">تواصل معنا</div>
                    <a href="https://www.facebook.com/profile.php?id=61556629465035" className="flex flex-row items-center cursor-pointer">
                        <span className="text-[15px] ml-[6px]">Facebook</span>    
                        <FaFacebook />
                    </a>
                    <a href="https://wa.me/+905528139189" className="flex flex-row items-center cursor-pointer">
                        <span className="text-[15px] ml-[6px]">Whatsapp</span>    
                        <FaWhatsapp />
                    </a>
                        <span className="text-[15px] mr-[6px]">905528139189+</span>    
                        <span className="text-[15px] mr-[6px]">developedbyadham7@gmail.com</span>    
                </div>
                <div className="min-w-[200px] h-auto flex flex-col gap-y-4 items-center justify-start">
                    <div className="font-bold text-[16px]">عننا</div>
                   <p className="flex flex-row items-center cursor-pointer">
                     
                        <span className="text-[15px] mr-[6px]">كن شريك</span>    
                    </p>
                    <p className="flex flex-row items-center cursor-pointer">
                      
                        <span className="text-[15px] mr-[6px]">من نحن</span>    
                    </p>
                </div>
            </div>

            <div className="mt-[20px] text-[15px] text-center">
                &copy; Jubyte Software 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer