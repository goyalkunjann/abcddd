import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Cards = ( {icon, title, bgColor} ) => {
  return (
    <div className='rounded-[10px] mb-[13px] border-[0.5px] border-[#fafafa] lg:w-[200px]  h-[200px] flex flex-col gap-[15px] justify-center items-center py-[20px] px-[30px] bg-white'>
    <div className={`flex items-center justify-center rounded-full p-3 h-[90px] w-[90px] `} style={{background: bgColor}}>
      <FontAwesomeIcon icon={icon} className='h-[30px] w-[30px]' />
    </div>
    <p className='font-normal w-[122px] text-center'>{title}</p>
  </div>
  )
}