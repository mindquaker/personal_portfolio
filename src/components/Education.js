import React, { useState } from "react";
import Iframe from "react-iframe";

export const Education = () => {
  const [clickNjit, setClickNjit] = useState(false);
  const [clickPCCC, setClickPCCC] = useState(false);
  function onClickNjit() {
    setClickNjit(!clickNjit);
  }
  function onClickPCCC() {
    setClickPCCC(!clickPCCC);
  }
  return (
    <div>
      <div
        className='flex
        flex-column'>
        <div
          className='h-60 w-96 ml-80 border-t-2 border-l-2 border-red-600 cursor-pointer drop-shadow-2xl bg-red-500 p-4 rounded-2xl  mt-20 shadow-2xl '
          onClick={() => onClickNjit()}>
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
        {clickNjit ? (
          <div className='h-64 w-96 mt-20  ml-20  drop-shadow-2xl  rounded-2xl   shadow-2xl'>
            <Iframe
              url='https://www.youtube.com/embed/n-z3m1IrC3s'
              display='initial'
              position='relative'
              className='h-64 w-96  border-red-600  drop-shadow-2xl rounded-2xl'
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className='flex flex-row'>
        <div
          className='h-44 w-96 ml-80  border-t-2 border-l-2 border-red-600  cursor-pointer  drop-shadow-2xl bg-red-500 p-4 rounded-2xl  mt-20 shadow-2xl '
          onClick={() => onClickPCCC()}>
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
        {clickPCCC ? (
          <div className='h-64 w-96 mt-20  ml-20  drop-shadow-2xl  rounded-2xl   shadow-2xl'>
            <Iframe
              url='https://www.youtube.com/embed/FP6sQH6RdHs'
              display='initial'
              position='relative'
              className='h-64 w-96  border-red-600  drop-shadow-2xl rounded-2xl'
            />
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default Education;
