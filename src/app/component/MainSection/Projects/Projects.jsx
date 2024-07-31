import React from "react";
import { CommonHeading } from "../../Heading/CommonHeading";
import Image from "next/image";
import House1 from "../../../../../public/assets/images/House1.jpeg";
import House2 from "../../../../../public/assets/images/House2.jpg";
import House3 from "../../../../../public/assets/images/House3.jpeg";
import SquareIcon from "../../../../../public/assets/images/apartment.png";
import TriangleIcon from "../../../../../public/assets/images/floor.png";
import HouseIcon from "../../../../../public/assets/images/building.png";
import { SubHeading } from "../../SubHeading/SubHeading";

export const Projects = () => {
  const data = [
    {
      image: "/assets/images/House1.jpeg",
      HNO: "C-2/113",
      address: "West Enclave  , Pitampura-110034",
      floors: "G + 1" 
    },
    {
      image: "/assets/images/House2.jpg",
      HNO: "D-16/117-118",
      address: "Sector -3 Rohini -110085",
      floors: "G + 2" // Updated number of floors
    },
    {
      image: "/assets/images/House3.jpeg",
      HNO: "H-32/88",
      address: "sector -3 Rohini -110085",
      floors: "G + 3" // Updated number of floors
    },
  ];

  return (
    <div className="lg:max-w-[1290px] w-full mx-auto lg:px-[18px] mt-[2px] mb-[40px] px-4">
      <CommonHeading className="text-left">Our Projects</CommonHeading>
      <SubHeading className="text-left w-[630px] lg:px-0 px-[10px] text-[14px]">
        From a couple to a large Indian family, we have houses built with emotions for everyone.
      </SubHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="group bg-brown rounded-lg overflow-hidden border border-#575757 rounded-[5px]"
          >
            <div className="relative w-full h-[300px]">
              <Image
                src={item.image}
                alt={`House ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-white group-hover:bg-brown group-hover:text-white transition duration-300 ease-in-out">
              <div className="flex items-center justify-between">
                <div className="flex flex-col text-xs mr-4">
                  <p className="text-black group-hover:text-white transition duration-300 ease-in-out">
                    {item.HNO}
                  </p>
                  <p className="text-black group-hover:text-white transition duration-300 ease-in-out">
                    {item.address}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex flex-col items-center">
                    <Image
                      src={HouseIcon}
                      alt="House"
                      width={24}
                      height={24}
                      className="mb-1 filter invert group-hover:invert-0 transition duration-300 ease-in-out"
                    />
                    <p className="text-black text-[10px] group-hover:text-white transition duration-300 ease-in-out">
                      3964 sq.ft.
                    </p>
                    <p className="text-black text-[10px] group-hover:text-white transition duration-300 ease-in-out">
                      Area
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src={TriangleIcon}
                      alt="Floors"
                      width={24}
                      height={24}
                      className="mb-1 filter invert group-hover:invert-0 transition duration-300 ease-in-out"
                    />
                    <p className="text-black text-[10px] group-hover:text-white transition duration-300 ease-in-out">
                      {item.floors}
                    </p>
                    <p className="text-black text-[10px] group-hover:text-white transition duration-300 ease-in-out">
                      Floors
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src={SquareIcon}
                      alt="Package"
                      width={24}
                      height={24}
                      className="mb-1 filter invert group-hover:invert-0 transition duration-300 ease-in-out"
                    />
                    <p className="text-black text-[10px] group-hover:text-white transition duration-300 ease-in-out">
                      Classic
                    </p>
                    <p className="text-black text-[10px] group-hover:text-white transition duration-300 ease-in-out">
                      Package
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
