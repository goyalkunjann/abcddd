"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../store/slice/slice";
import { SCREENS } from "../Utils/CustomModal/Modal";
import logo from "../../../../public/assets/images/logo.svg";

export const Header = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const menus = [
    { name: "About Us", link: "/aboutus" },
    { name: "Service", link: "/service" },
    { name: "Our Projects", link: "/ourprojects" },
    { name: "How It Works", link: "/howitwork" },  
    { name: "Contact Us", link: "/contactus", className: "ml-36" }
  ];

  const showMenu = () => setActive(!active);

  const handleConsultationClick = () => {
    dispatch(
      toggleModal({
        screen: SCREENS.LEAD_POPUP,
        visible: true,
      })
    );
    active && showMenu();  // This will close the mobile menu if it's open
  };

  return (
    <>
      <header className="w-[99%] m-auto top-0 sticky inset-x-0 z-[20] bg-white shadow-lg lg:max-h-[65px] h-[100px] lg:w-full lg:h-[70px] items-center justify-center flex rounded-[20px] lg:rounded-none">
        <div className="lg:max-w-[1290px] w-full mx-auto flex items-center justify-between py-[10px]">
          <div className="flex items-center gap-[80px] relative">
            <Link href="/">
              <span>
                <Image
                  src={logo}
                  alt="House Banao"
                  height={57}
                  width={150}
                  className="cursor-pointer"
                />
              </span>
            </Link>
            <div className="lg:flex gap-[25px] hidden">
              <nav className="lg:flex gap-[25px] text-regular">
                {menus.slice(0, -1).map((menu, index) => (
                  <Link key={index} href={menu.link}>
                    <span className="hover:text-gray-800 hover:underline cursor-pointer">{menu.name}</span>
                  </Link>
                ))}
                <Link href={menus[menus.length - 1].link} className={menus[menus.length - 1].className}>
                  <span>{menus[menus.length - 1].name}</span>
                </Link>
              </nav>
            </div>
          </div>
          <div className="absolute flex items-center gap-4 right-[16px] md:hidden top-[25px] scale-120">
            <FontAwesomeIcon
              icon={faBars}
              className="w-[20px] h-[20px]"
              onClick={showMenu}
            />
          </div>

          <div className={`${active ? "block" : "hidden"} absolute w-full bg-white top-3/4 left-0 z-50 flex flex-col items-center gap-4 py-5`}>
            <FontAwesomeIcon
              icon={faClose}
              onClick={showMenu}
              className="cursor-pointer w-[23px] h-[23px] absolute text-2xl right-8 top-6"
            />
            {menus.map((menu, index) => (
              <Link key={index} href={menu.link}>
                <span onClick={showMenu} className={`text-center ${menu.className || ''}`}>{menu.name}</span>
              </Link>
            ))}
          </div>
          <button className="hidden lg:flex w-fit h-[40px] rounded-[88px] mr-12 border-[0.5px] p-[14px] justify-between items-center bg-brown mb-0"
                  onClick={handleConsultationClick}>
            <span className="font-medium text-regular bg-brown text-white">
              Book Consultation Now
            </span>
          </button>
        </div>
      </header>
    </>
  );
};
