import React from 'react'
import { CommonHeading } from '../../Heading/CommonHeading'
import { SubHeading } from '../../SubHeading/SubHeading'
import { Gallery } from './Gallery/Gallery'

export const InteriorSection = () => {
  return (
    <>
        <div id="interior" className='flex flex-col h-auto lg:max-w-[1290px] mx-auto lg:w-[86%] w-[98%]'>
        <CommonHeading className={"lg:text-start text-center"}>Inspiration for home interior designs</CommonHeading>
        <SubHeading className={"lg:text-start text-center lg:px-0 px-[10px] mt-[3px]"}> Give your home a new look with these interior design ideas curated for you</SubHeading>
        <Gallery />
    </div>
    </>
  )
}