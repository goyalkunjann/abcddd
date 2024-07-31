import React from 'react';
import House3 from '../component/MainSection/House/House3'; 
import House6 from '../component/MainSection/House/House6'; 
import Floor from '../component/MainSection/Floor/Floor'; 
import BookingPopTwo from '../component/MainSection/BookingPopTwo/BookingPopTwo';

const Page = () => {
  return (
    <div className='bg-white'>
      <House3 />
      
      <Floor />
      <BookingPopTwo />
      <House6 />
    </div>
  );
};

export default Page;
