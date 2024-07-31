'use client';  
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export const Accordion = ({ data }) => {
  const [openStates, setOpenStates] = useState(new Array(data.length).fill(false));

  const handleClick = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  }

  return (
    <section className='my-[30px] w-full lg:max-w-[1290px] mx-auto h-auto flex flex-col'>
        {data.map((item, index) => (
          <div className='mb-[20px] rounded-lg' key={index}>
            <div onClick={() => handleClick(index)} className={`bg-white flex justify-between cursor-pointer items-center ${!openStates[index] && ''} border-[#e0dede] px-[20px] py-[12px] text-[16px] text-black font-medium `}> 
               <p>{item.question}</p>
               <span className='w-[23px] h-[23px] p-[6px] bg-white border border-[#e0dede] flex items-center text-[10px] rounded-full'>
                 <FontAwesomeIcon icon={openStates[index] ? faChevronUp : faChevronDown} className=''/>
               </span>
            </div>
            {openStates[index] ? <div className='w-full mx-auto py-[20px] px-[21px] rounded-lg h-auto text-black bg-white'>{item.answer}</div> : ""} 
          </div>
        ))}
    </section>
  )
}