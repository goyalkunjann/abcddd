'use client'
import React from 'react';
import offerimage01 from "../../../../public/assets/images/offerimage01.png";
import offerimage02 from "../../../../public/assets/images/offerimage02.png";
import Image from 'next/image';
import { CommonButton } from '../Button/CommonButton';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../store/slice/slice'
import { SCREENS } from '../Utils/CustomModal/Modal';

export const Offer = () => {
    const dispatch = useDispatch();
    const data = [
        {score: '400+', title: 'Project Complete'},
        {score: '600+', title: 'Satisfied Clients'},
        {score: '100+', title: 'Unique Styles'}
    ]
  function handleClick() {
    dispatch(
      toggleModal({
        screen: SCREENS.LEAD_POPUP,
        visible: true,
      })
    );
  }

  return (
    <div className='flex flex-col lg:max-w-[1290px] mx-auto w-full mt-[30px] mb-[80px] gap-[20px] lg:px-0 px-[20px]'>
        <div className='flex justify-between items-center gap-[30px] lg:flex-row flex-col'>
            <div className='w-full'>
                <div className='lg:w-[380px] w-full flex flex-col gap-[20px]'> 
                    <h2 className='text-[#1F1F1F] font-medium lg:text-[57px] text-[43px]'>What we do?</h2>
                    <p className='text-[17px]'>We offer comprehensive services that cater to a broad spectrum of needs and clients, ensuring satisfaction across diverse requirements.</p>
                </div>
            </div>
            <Image src={offerimage01} alt='mockup frames living room interior with chair ' width={465} height={320}  className='w-[465px] h-[320px]'/>
        </div>
        <div className='flex justify-between items-center gap-[30px] lg:flex-row flex-col'>
        <div className='flex flex-col gap-[20px]'>
                <div className='flex gap-[30px] flex-col'> 
                    <CommonButton onclick={handleClick} >Start your construction</CommonButton>
                    <div className='flex gap-[24px]'>
                        {data.map((item, index) => (
                            <div key={index}>
                            <p className='text-[40px]'>{item.score}</p>
                            <p className='text-[14px]'>{item.title}</p>
                           </div>
                        ))}
                    </div>
                </div>
            </div>
            <Image src={offerimage02} alt='gray sofa white living room with copy space'  width={500} height={320}  className='w-[500px] h-[320px] lg:pr-[40px] pr-0'/>
        </div>
    </div>
  )
}

