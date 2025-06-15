import React from "react";
import project from "./data/projects.json";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data, index) => (
            <div
              key={data.id || index} // Use index as fallback if id is missing/duplicate
              className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
            >
              <div
                className="card bg-dark text-light"
                style={{
                  width: "18rem",
                  border: "1px solid yellow",
                  boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="img d-flex justify-content-center align-content-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt={data.title || "Project image"}
                    style={{
                      width: "250px",
                      height: "200px",
                      border: "2px solid yellow",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.descriptionShort}</p>
                  {/* <a 
                    href={data.demo} 
                    className="btn btn-primary mx-3"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a> */}
                  <Link
                    to="/project-details"
                    state={{ project: data }}
                    className="btn btn-warning"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;