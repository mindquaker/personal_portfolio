//eslint-disable
import React from "react";
import PropTypes from "prop-types";
export const SkillsDiv = (props) => {
  const { skill, image_link } = props;

  let list_element = (
    <h2 className='  w-44 text-left text-lg  text-white'>{skill}</h2>
  );

  let image_element = (
    <img
      src={image_link}
      alt='skill img '
      className='h-20 w-20  border-2 rounded-full ml-36'
    />
  );
  function displaySkillls() {
    return (
      <div className=' p-6 flex flex-row'>
        {list_element}
        {image_element}
      </div>
    );
  }
  return <div>{displaySkillls()}</div>;
};
PropTypes.SkillsDiv = {
  skill: PropTypes.string.isRequired,
  image_link: PropTypes.string.isRequired,
};
export default SkillsDiv;
