import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1>SKILLS</h1>
        <div className="items">
{skills.map((skills, index) => (
            <>
              <div key={skills.id || index} // ✅ Has key prop
              
                className="item"
                // key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={`/assets/${skills.imageSrc}`} alt="" />
                <h3>{skills.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;