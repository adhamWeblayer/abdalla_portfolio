'use client'
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface Props {
  image: string;
  title: string;
  description: string;
  icons: string[];
  link: string;
}

const ProjectCard: React.FC<Props> = ({
  image,
  title,
  description,
  icons,
  link,
}) => {
  const router = useRouter()
  const truncateDescription = (description: string, length: number): string => {
    if (description.length > length) {
      return description.substring(0, length) + "...";
    }
    return description;
  };


  return (
    <button onClick={() => {router.push(link)}}>
      <CardContainer className="inter-var">
        <CardBody className="flex flex-col gap-y-2 bg-slate-300/10 border border-white/10 relative group/card w-full h-auto rounded-xl p-6">
          <CardItem translateZ="40" className="w-full">
            <Image
              src={image}
              height={1000}
              width={1000}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="cover"
            />
          </CardItem>
          <CardItem translateZ="55" className="text-xl font-bold text-white">
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="50"
            className="text-sm max-w-sm mt-2 text-white"
          >
            {truncateDescription(description, 170)}
          </CardItem>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-x-2">
              {icons?.map((icon, index) => (
                <div
                  key={index}
                  className="border border-gray-500 rounded-full bg-black w-8 h-8 flex justify-center items-center"
                >
                  <img src={icon} alt={`icon${index}`} className="p-2" />
                </div>
              ))}
            </div>
            <CardItem
              translateZ={20}
              as="a"
              href={link}
              target="__blank"
              className="flex items-center text-blue-500 hover:text-blue-300 transition px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <span className="sr-only">Visit</span>
              <FaLocationArrow />
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </button>
  );
};

export default ProjectCard;
