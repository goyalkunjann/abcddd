"use client";

import React, { useState } from "react";
import { CommonHeading } from "../../Heading/CommonHeading";
import { SubHeading } from "../../SubHeading/SubHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus, faMinus, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export const Packages = () => {
  const packages = [
    {
      id: 1,
      title: "Construction starts from ₹990/sq.ft",
      items: ["Ground + 1", "Ground + 1 + 2", "Ground + 1 + 2 + 3", "Ground + 1 + 2 + 3 + 4"],
    },
    {
      id: 2,
      title: "Construction + interior starts from ₹1499/sq.ft",
      items: [
        "Designs and drawings",
        "Structure",
        "Kitchen",
        "Bathroom",
        "Doors and windows",
        "Painting",
        "Flooring",
        "Electrical",
        "Miscellaneous",
      ],
      details: {
        "Designs and drawings": [
          "Architectural Layout in 2D Format, including detailed Floor plans",
          "Structural Drawings with Foundation, Beams & Column Details.",
          "Electrical Drawings, Plumbing Drawings.",
          "Building Elevation plan, designed as per your choice with options."
        ],
        "Structure": [
          "Preparation of floors with brick bat filling where required.",
          "Excavation, back-filling, ramming, watering & compacting as per architect recommendations.",
          "Vibrator and Hammer used for proper mixing and smoothing."
        ],
        "Kitchen": [
          "Wall tiles 2 ft height above slab up to Rs. 40 psf.",
          "One Main sink mixer faucet up to Rs. 1200/-. Any other faucets or connectors or accessories - ISI marked.",
          "One Single sink Stainless Steel up to Rs. 3000/-.",
          "Kitchen Cabinets with high gloss lamination."
        ],
        "Bathroom": [
          "Wall tiles of 2x2 ft up to 7’ height up to Rs. 40 psf.",
          "Sanitary ware, CP, Shower, Mixer, Washbasin, fittings up to Rs. 30,000/- per bathroom.",
          "CPVC Pipelines used - Astral or equivalent.",
          "Doors - Flush doors of 30mm with Laminates and Handles, Lock/Latch, door-stopper fittings.",
          "One Geyser 15 Litres up to Rs. 8000/- per bathroom."
        ],
        "Doors and windows": [
          "Main Door - Flush door of 30 mm, up to 8’ ft height, with Laminate up to 1000/- psf with Locks, hinges, stoppers, Magic eye/Peephole wide angle lens, Chain lock and tall chitkani, all ISI mark.",
          "Main door lock up to Rs. 2500/- internal door locks up to 1200/-.",
          "Internal Doors - Flush door of 30 mm, up to 8’ ft height, with Laminate up to 1000/- psf with Locks, hinges, Door stoppers.",
          "External/Balcony doors of UPVC with Fixed and sliding portions, with mosquito mesh included for bedrooms and drawing room where applicable as per architect design."
        ],
        "Painting": [
          "Interior Paint - JK Putty + Tractor Emulsion or equivalent.",
          "Exterior Paint - Asian Primer + Asian exterior paint.",
          "Enamel Paint work on all MS railings."
        ],
        "Flooring": [
          "Drawing / Dining Room area Bedrooms - Vitrified tiles up to Rs. 50 psf.",
          "Kitchen Floor - Vitrified tiles up to Rs. 50 psf.",
          "Balconies and Open areas including terrace - Anti Skid tiles up to Rs. 40 psf.",
          "Stilt Parking area - Granite up to Rs. 70 psf."
        ],
        "Electrical": [
          "Wires - Fire resistant wires by Finolex, Havells or equivalent.",
          "Switches and Sockets by Anchor or North West or equivalent.",
          "Branded ceiling lights up to Rs. 250 each up to 8 lights per bedroom.",
          "Branded ceiling lights up to Rs. 250 each up to 14 lights for drawing room."
        ],
        "Miscellaneous": [
          "Double layer overhead water tanks of Sintex of 1000 litres per dwelling unit.",
          "Underground water storage of 2000 liters per dwelling unit.",
          "1 water motor per floor of Crompton brand.",
          "Drainage connection up to 10 ft from the plot included."
        ]
      }
    },
  ];

  const [expandedPackage, setExpandedPackage] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (packageId, item) => {
    if (expandedPackage === packageId && expandedItem === item) {
      setExpandedItem(null);
      setExpandedPackage(null);
    } else {
      setExpandedPackage(packageId);
      setExpandedItem(item);
    }
  };

  const getIcon = (packageId, item) => {
    return expandedPackage === packageId && expandedItem === item ? faMinus : faPlus;
  };

  return (
    <section className="flex flex-col items-center mt-8 font-poppins">
      <CommonHeading className="text-[25px] font-extrabold mt-[5px]">Packages</CommonHeading>
      <SubHeading className="text-center mt-[7px]">Find the best home construction packages</SubHeading>
      <div className="flex justify-center mt-8 w-full max-w-[1290px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {packages.map((pkg) => (
            <div key={pkg.id} className="border-2 border-brown rounded-md flex flex-col items-center justify-between w-full max-w-[600px] mx-auto">
              <div className="bg-brown rounded-t-md w-full p-5">
                <h1 className="text-white text-center text-[15px]">{pkg.title}</h1>
              </div>
              <div className="bg-white w-full p-5 flex flex-col items-start flex-grow text-[#575757]">
                {pkg.items.map((item) => (
                  <div key={item} className="w-full mb-2">
                    <div className="flex justify-between items-center">
                      <span onClick={() => handleItemClick(pkg.id, item)} className="cursor-pointer">{item}</span>
                      <FontAwesomeIcon icon={getIcon(pkg.id, item)} className="cursor-pointer" onClick={() => handleItemClick(pkg.id, item)} />
                    </div>
                    {expandedPackage === pkg.id && expandedItem === item && (
                      <div className="text-sm text-gray-600 pl-4 mt-2 list-disc">
                        {Array.isArray(pkg.details[item]) ? pkg.details[item].map((detail, idx) => <li key={idx}>{detail}</li>) : <li>{pkg.details[item]}</li>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="w-full flex flex-col items-center justify-center text-[#575757]">
                <p className="text-center mb-auto p-5">
                  View More
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs text-[#575757]" />
                </p>
                <Link href="/contactus">
                  <button className="hidden lg:flex w-fit h-[40px] rounded-[88px] border-[0.5px] p-[14px] justify-between items-center bg-brown mb-4">
                    <span className="font-medium text-regular bg-brown text-white">Book Consultation now</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[20px] bg-white"></div>
    </section>
  );
};

export default Packages;
