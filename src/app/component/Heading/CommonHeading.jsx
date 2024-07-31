import React from 'react'

export const CommonHeading = ( {children, className} ) => {
  return (
    <>
       <h2 className={`${className} font-semibold text-[25px] text-[#3f3d3d]`}>{children}</h2>
    </>
  )
}
