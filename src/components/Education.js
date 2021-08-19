import React from "react";
import Resume from "./Resume";

export const Education = () => {
  return (
    <div>
      <div className='h-60 w-96 ml-80  drop-shadow-2xl bg-red-500 p-4 rounded-2xl  mt-20 shadow-2xl '>
        <h2 className='text-md font-bold text-white '>
          New Jersey Institue of Technology, Newark, NJ.
        </h2>

        <li className='text-md font-light text-white'>
          Bachelor of Science in Computer Science.{" "}
        </li>
        <li className='text-md font-light text-white'>
          September 2019 – Expected May 2022
        </li>
        <li className='text-md font-light text-white'>
          Minor in Innovation and Entrepreneurship.{" "}
        </li>
        <li className='text-md font-light text-white'>
          Featured in Dean’s list for four consecutive semesters.
        </li>
        <li className='text-md font-light text-white'>
          {" "}
          E-board member and Treasurer at Entrepreneur Society NJIT.{" "}
        </li>
      </div>
      <div className='h-44 w-96 ml-80  drop-shadow-2xl bg-red-500 p-4 rounded-2xl  mt-20 shadow-2xl '>
        <h2 className='text-md font-bold text-white '>
          Passaic County Community College, Peterson, NJ.
        </h2>

        <li className='text-md font-light text-white'>
          Associate of Science in Computer Science.{" "}
        </li>
        <li className='text-md font-light text-white'>
          September 2016 – May 2019
        </li>
        <li className='text-md font-light text-white'>
          Graduated with: Cum Laude Honors.
        </li>
        <li className='text-md font-light text-white'>
          Member of Pi Theta Kappa Honor Society.
        </li>
      </div>
    </div>
  );
};

export default Education;
