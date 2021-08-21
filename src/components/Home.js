import React from "react";
import profile from "./profile-modified.png";
export const Home = () => {
  return (
    <div>
      <div className='h-2/6 w-full  pl-96 pt-12 flex flex-row  justify-start rounded-b-full bg-blue-200'>
        <div className='ml-20 text-size-2xl'>
          <div>I am a Programer.</div>
          <div>I am Frontend Developer.</div>
        </div>

        <div className='h-60 w-60 mt-2 ring-4 ring-indigo-400 rounded-full bg-red-500'>
          <img src={profile} alt='profile' md className='h-full w-full' />
        </div>
        <div>
          <div>I am a Backend Developer</div>
          <div>I am an aspiring Software Engineer.</div>
        </div>
      </div>
      <div
        className='mt-20 m-auto text-xl rounded-2xl p-12 ring-4 ring-red-600 border-r-8
       border-red-600 shadow-2xl w-96 h-80 bg-red-400 text-left'>
        Welcome to my website, I am Ashutosh Rana, a Computer Science student. I
        am looking for an Internship or a parttime postion in the field of
        Computer Science where I can utilize my skills to add value to your
        company and have a great eperience.
      </div>
    </div>
  );
};

export default Home;
