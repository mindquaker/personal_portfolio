//eslint-disable
import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const style =
    "p-3 text-red-500 hover:text-indigo-400 hover:shadow-md transition ease-in duration-150 ";
  return (
    <div>
      <navbar>
        <nav className=' md:flex w-full space-x-7  items-center justify-left'>
          <Link className={style} to='/'>
            <h3>Who Am I?</h3>
          </Link>

          <Link className={style} to='/education'>
            <h3>Education</h3>
          </Link>
          <Link className={style} to='/experience'>
            <h3>Experience</h3>
          </Link>
          <Link className={style} to='/skills'>
            <h3>Skills</h3>
          </Link>
          <Link className={style} to='/projects'>
            <h3>Projects</h3>
          </Link>
          <Link className={style} to='/resume'>
            <h3>Resume</h3>
          </Link>
          <Link className={style} to='/contact'>
            <h3>Contact Me</h3>
          </Link>
        </nav>
      </navbar>
    </div>
  );
};

export default Nav;
