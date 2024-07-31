import React from 'react'

export const SubHeading = ( {children, className} ) => {
  return (
    <p className={`${className} text-[14px] text-[#3f3d3d] w-full font-normal`}>{children}</p>
  )
}
