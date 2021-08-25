//eslint-disable
import React from "react";
import Iframe from "react-iframe";

export const Experience = () => {
  return (
    <div>
      <div className='flex flex-row '>
        <div
          className='h-72 w-96 ml-10 border-t-2 border-l-2 border-red-600  drop-shadow-2xl 
           bg-red-500 p-4 rounded-2xl  mt-12 shadow-2xl'>
          <h2 className='text-md font-bold text-white '>
            Frontend Developer at Up Cancer Org, Hartford, CT
          </h2>

          <li className='text-md font-light text-white'>
            June 2021 – Present.{" "}
          </li>
          <li className='text-md font-light text-white'>
            Created a multi-step Admin signup procedure for a CRM Software that
            allows a firm's admin to enter different information about their
            business and set up their account in the system.
          </li>
          <li className='text-md font-light text-white'>
            Embraced modern technologies such as React.js to structure a web
            app, CSS and Bootstrap to style it.{" "}
          </li>
        </div>

        <div className='h-72  w-7/12 mt-12  ml-20  drop-shadow-2xl  rounded-2xl   shadow-2xl'>
          <Iframe
            url='https://www.upcancer.org/'
            display='initial'
            position='relative'
            className='h-full w-full  border-red-600  drop-shadow-2xl rounded-2xl'
          />
        </div>
      </div>
      <div className='flex flex-row '>
        <div className='h-60 w-96 ml-10   border-t-2 border-l-2 border-red-600  drop-shadow-2xl bg-red-500 p-4 rounded-2xl  mt-20 shadow-2xl '>
          <h2 className='text-md font-bold text-white '>
            Web Designing Intern at NJIT CDC, Newark, NJ.
          </h2>

          <li className='text-md font-light text-white'>
            November 2019 – February 2020
          </li>
          <li className='text-md font-light text-white'>
            Modified the layout of a web app so that it would fit on any screen
            size.
          </li>
          <li className='text-md font-light text-white'>
            Implemented Responsive Web Designing techniques to redesign more
            than 100 webpages with the help of Bootstrap.
          </li>
        </div>

        <div className='h-72 w-7/12 mt-20  ml-20  drop-shadow-2xl  rounded-2xl   shadow-2xl'>
          <Iframe
            url='https://cecc.njit.edu/'
            display='initial'
            position='relative'
            className='h-full w-full  border-red-600  drop-shadow-2xl rounded-2xl'
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
