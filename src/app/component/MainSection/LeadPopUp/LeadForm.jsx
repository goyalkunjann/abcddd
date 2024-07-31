import React from "react";
import Image from "next/image";

import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/slice/slice";

import { CommonHeading } from "../../Heading/CommonHeading";
import { SubHeading } from "../../SubHeading/SubHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { SCREENS } from "../../Utils/CustomModal/Modal";
import { CustomField } from "../../Utils/CustomField/CustomField";
import { CommonButton } from "../../Button/CommonButton";

import logo from "../../../../../public/assets/images/logo.svg";

export const LeadForm = () => {
  const styles = "rounded-full shadow-md py-[15px] px-[40px] text-white bg-[#A46254] text-[20px] leading-[10px] w-fit  mb-[10px]";
  const dispatch = useDispatch();

  function openLink() {
    window.location.href = this;
  }
  const handleClose = () => {
    dispatch(closeModal({
      screen: SCREENS.LEAD_POPUP,
      visible: true,
    }));
  };

  return (
    <section className="lg:w-[450px] w-full h-full bg-white lg:rounded-[20px] rounded-none flex flex-col lg:h-auto shadow-md my-[20px] border-[0.5px] p-[24px]">
      <div className="flex justify-end">
        <FontAwesomeIcon
          icon={faClose} 
          onClick={handleClose}
          className="w-[23px] h-[23px] cursor-pointer text-[#9099A1]"
        />
      </div>
      <div className="flex flex-col items-center mt-[8px]">
        <Image src={logo} className="mb-[20px]" />
        <CommonHeading className={"text-[25px] font-extrabold"}>
          Book your appointment
        </CommonHeading>
        <SubHeading className={"text-center mt-[7px]"}>
          Get free consultation
        </SubHeading>

        {/* <form className="flex flex-col items-center gap-[10px] mt-[18px]"  onSubmit={(e) => {
            e.preventDefault(); 
          }}>
            <CustomField
              labelTitle="name"
              FieldType="text"
              placeholder="Name"
            />
            <CustomField
              labelTitle="phoneNo"
              FieldType="text"
              placeholder="Phone Number"
            />
            <CustomField
              labelTitle="location"
              FieldType="text"
              placeholder="Location of your Plot"
            />
            <SubmitButton
              type="submit"
              className={
                " rounded-full gradient-background py-[12px] w-[164px] text-[20px] font-medium text-white my-[10px]"
              }
            >
              <span>Book Now</span>
            </SubmitButton>
          </form> */}
        {/* <div className="flex flex-col gap-[15px] items-center mt-[18px]"> */}
          {/* <a href="tel:+919810431883">
            <button className= {styles}>
              Call Us
            </button>
          </a>
          <a href="mailto:support@housebanao.com">
            <button className= {styles}>
              Mail Us
            </button>
          </a> */}

          {/* <CommonButton onclick={openLink.bind('tel:+91 9810431883')}>Call Us</CommonButton> */}
          {/* <CommonButton onclick={openLink.bind('mailto:support@housebanao.com')}>Mail Us</CommonButton> */}
        <div className="flex flex-col gap-[15px] items-center mt-[18px]">
          <a href="tel:+919810232124">
            <button className='rounded-full shadow-md py-[15px] px-[40px] text-white bg-[#A46254] text-[20px] leading-[10px] w-[200px]'>
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" flip="horizontal" /> 
              Call
            </button>
          </a>
          <a href="https://wa.me/+919810431883">
            <button className='rounded-full shadow-md py-[15px] px-[40px] text-white bg-[#A46254] text-[20px] leading-[10px] w-[200px] flex items-center justify-center'>
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> 
              WhatsApp
            </button>
          </a>
        </div>
      {/* </div> */}
      </div>
    </section>
  );
};
