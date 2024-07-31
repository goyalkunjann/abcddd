'use client'
import React from 'react'
import { HeroSectionContent } from './HeroSectionContent'
import Image from 'next/image'
import whatsappicon from "../../../../public/assets/images/whatsapp.svg"
import phoneNoicon from "../../../../public/assets/images/phone.svg"
import messageicon from "../../../../public/assets/images/message.svg"
import { useDispatch } from 'react-redux'
import { toggleModal } from '../../store/slice/slice'
import { SCREENS } from '../Utils/CustomModal/Modal'

export const HeroSection = ( {bannerimage, altText} ) => {
  const dispatch = useDispatch();
  const style = ' cursor-pointer inline  z-[20] fixed  right-0 overflow-hidden  bg-white px-[10px] py-[7px]  rounded-l-[6px] shadow-xl flex items-center  w-[44px] h-[44px]'

  const handleButton = () => {
    dispatch(
      toggleModal({
        screen: SCREENS.LEAD_POPUP,
        visible: true,
      })
    );
  }

  function openLink (){
    window.location.href = this
  }

  return (
   <>
    <div className=" w-full relative">
        <img src={bannerimage} alt={altText} className=' w-full h-[500px] object-cover  object-bottom hidden'/>
      {/* <span onClick={() => window.open('https://api.whatsapp.com/send?phone=15551234567', '_blank')} className={`${style} top-[118px] `}>  <Image src={whatsappicon} alt='whatsapp' className=' w-[30px] '/></span>
      <span onClick={openLink.bind('tel:+91 9810431883')} className={` ${style} top-[180px] `}>  <Image src={phoneNoicon} alt='contact' className=' w-[21px] '/></span>
        */}

<a href="https://api.whatsapp.com/send?phone=15551234567" target="_blank" rel="noopener noreferrer" className={`${style} top-[118px]`}>
  <Image src={whatsappicon} alt='whatsapp' className='w-[30px]' />
</a>
<a href="tel:+919810431883" className={`${style} top-[180px]`}>
  <Image src={phoneNoicon} alt='contact' className='w-[21px]' />
</a>

      {/* <Image src={messageicon} alt='message'  onClick={handleButton}  className=' cursor-pointer absolute right-[20px] bottom-[30px] w-[50px] h-[50px]'></Image> */}
        <HeroSectionContent />
   </div>
   </>
  )
}