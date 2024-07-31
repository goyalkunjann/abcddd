'use client'
import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';
import { LeadForm } from '../../MainSection/LeadPopUp/LeadForm';

export const SCREENS = {
    LEAD_POPUP: "lead_popup",
  };
  
  export default function Modal() {
    const [bgColor, setBgColor] = useState("bg-opacity-10");
    const { modal: {  screen, visible }, } = useSelector((state) => state.slice);
  
  
    useEffect(() => {
      if (visible) {
        document.body.style.height = `${window.innerHeight}px`;
        document.body.style.overflow = "hidden";
        setTimeout(() => {
          setBgColor("bg-opacity-60");
        }, 200);
      } else {
        document.body.style.height = "";
        document.body.style.overflow = "";
        setBgColor("bg-opacity-10");
      }
    }, [visible]);
  
    return visible ? (
      <main
        className={` ${bgColor} transition-all fixed inset-0 bg-black z-50 flex duration-500 items-center justify-center `}
      >
        {(() => {
          switch (screen) {
            case SCREENS.LEAD_POPUP:
              return <LeadForm />;
            default:
              return null;
          }
        })()}
      </main>
    ) : null;
  }
  
