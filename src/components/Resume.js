import React from "react";
import Iframe from "react-iframe";
export const Resume = () => {
  return (
    <div className='h-5/6  w-11/12 mt-12  ml-12  drop-shadow-2xl  rounded-2xl   shadow-2xl'>
      <Iframe
        url='https://web.njit.edu/~ajr72/Ashutosh%20Rana%20Resume.pdf'
        display='initial'
        position='relative'
        className='h-full w-full  border-red-600  drop-shadow-2xl rounded-2xl'
      />
    </div>
  );
};
export default Resume;
