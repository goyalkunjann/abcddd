
import React from "react";

export const CustomField = ({
  labelTitle,
  FieldType,
  // FieldName,
  placeholder,
  className,
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={labelTitle}
        className="text-[15px] leading-5 font-medium flex flex-col items-start justify-center lg:text-[15px] lg:leading-[22px]"
      >
       <div className="p-[1.5px] rounded-full border-[1px]   w-[337px] h-[48px]">
         <input
             type={FieldType}
             // name={FieldName}
             placeholder={placeholder}
             className="w-full h-full bg-white rounded-full pt-[12px] pb-[11px] px-[17px] text-grey  font-normal "
          />
       </div>
        {/* <p className="text-[12px] pt-[3px]">
        <ErrorMessage name={FieldName} />
      </p> */}
      </label>
    </div>
  );
};
