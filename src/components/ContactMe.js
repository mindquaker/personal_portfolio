import { lime } from "color-name";
import React from "react";
import github from "./github_barcode.png";
import linkedin from "./linkedin_barcode.png";
export const ContactMe = () => {
  return (
    <div className='m-auto p-4 w-96  border-t-2 border-l-2 border-red-600  drop-shadow-2xl rounded-3xl  mt-6  shadow-2xl'>
      <div>
        <h2 className='text-md font-bold text-white '>
          Phone: +1 (973) 288-4668
        </h2>
        <h2 className='text-md font-bold text-white '>
          Email: ashutoshrana2098@gmail.com
        </h2>
      </div>
      <div className='text-md font-bold mt-10 text-white '>
        LinkedIn:{" "}
        <a href='https://www.linkedin.com/in/ashutosh-rana/'>
          https://www.linkedin.com/in/ashutosh-rana/
        </a>
        <img
          src={linkedin}
          alt='linkedin'
          className='mx-2 h-40 w-40 mt-10 rounded-md'
        />
      </div>
      <div className='text-md font-bold mt-10 text-white '>
        GitHub:{" "}
        <a href='https://github.com/mindquaker'>
          https://github.com/mindquaker
        </a>
        <img
          src={github}
          alt='github'
          className='mx-2 h-40 w-40 mt-10 rounded-sm'
        />
      </div>
      <br />
    </div>
  );
};

export default ContactMe;
