import React from 'react';
import { CommonHeading } from "../../Heading/CommonHeading";
import Image from "next/image";
import Reviews from "../../../../../public/assets/images/Reviews.jpeg";

export const CustomerReviews = () => {
  return (
    <div className="lg:max-w-[1290px] w-full mx-auto lg:px-[18px] mt-[60px] mb-[40px]">
      <div className='text-left'>
        <CommonHeading>Check out some of our customer reviews</CommonHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Box 1 */}
          <div className="bg-white p-6 rounded-md border border-#575757 relative ">
            <div className="w-270 h-150">
              <Image src={Reviews} alt="Review 1" className="w-full h-auto rounded-lg" />
            </div>
            <o className="mt-4 text-sm block">
              Hats off to the entire house banao team. They completed the project ahead of time.
            </o>
          </div>

          {/* Box 2 */}
          <div className="bg-white p-6 rounded-md border border-#575757 relative">
            <div className="w-full h-auto">
              <Image src={Reviews} alt="Review 2" className="w-full h-auto rounded-lg" />
            </div>
            <o className="mt-4 text-sm block">
              Hats off to the entire house banao team. They completed the project ahead of time.
            </o>
          </div>

          {/* Box 3 */}
          <div className="bg-white p-6 rounded-md border border-#575757 relative">
            <div className="w-full h-auto">
              <Image src={Reviews} alt="Review 3" className="w-full h-auto rounded-lg" />
            </div>
            <o className="mt-4 text-sm block">
              Hats off to the entire house banao team. They completed the project ahead of time.
            </o>
          </div>
        </div>
      </div>
    </div>
  );
};