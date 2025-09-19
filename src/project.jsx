import React, { useEffect } from "react";
import "./index.css";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

function Projects() {
   useEffect(() => {
      const elements = document.querySelectorAll(".description");
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
            } else {
              entry.target.classList.remove("animate");
            }
          });
        },
        { threshold: 0.2 }
      );
  
      elements.forEach((el) => observer.observe(el));
  
      // cleanup
      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }, []);
  return (
    <div id="projects" className="projects">
      <h1 className="text-center Pheading">Projects</h1>

      {/* Main Carousel */}
      <div id="carouselExample" className="carousel slide  ">
        
        <div className="carousel-inner">
           {/* Main Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <GrLinkPrevious  color="black" size={20} />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next  mt-5 "
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <GrLinkNext color="black" size={20}/>
          <span className="visually-hidden">Next</span>
        </button>
          {/* Project 1 */}
          <div className="carousel-item active pr-1">
            <div className="project1">
              <h2 className="PROJECTNAME">ECOMMERCE SITE</h2>

              <div className="description mt-2">
                <p className="text-center">
                  I developed a fully functional e-commerce website for a local
                  retail shop, where customers can browse products such as track
                  pants, shorts, socks, and uniforms. The platform features
                  user-friendly navigation, product listings, a shopping cart,
                  and a checkout system to create a seamless shopping
                  experience. It was built using <b>HTML, CSS, JavaScript, and
                  Bootstrap</b> for the frontend, with <b>Node.js and Express.js</b>{" "}
                  powering the backend and <b>PostgreSQL</b> as the database.
                  The project is deployed live and gave me valuable hands-on
                  experience in building real-world business solutions while
                  strengthening my full-stack development skills.
                </p>
              </div>

              {/* Inner carousel for images */}
              <div
                id="carouselExampleCaptions"
                className="carousel slide carousel1 mt-3"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="5"
                  ></button>
                </div>

                <div className="carousel-inner rounded-2">
                  <div className="carousel-item active">
                    <img
                      src="/BL-1.png"
                      className="d-block w-100"
                      alt="Slide 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/BL-2.png"
                      className="d-block w-100"
                      alt="Slide 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/BL-3.png"
                      className="d-block w-100"
                      alt="Slide 3"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/BL-4.png"
                      className="d-block w-100"
                      alt="Slide 4"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/BL-5.png"
                      className="d-block w-100"
                      alt="Slide 5"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/BL-6.png"
                      className="d-block w-100"
                      alt="Slide 6"
                    />
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                 <GrLinkPrevious  color="white" size={20} />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                 <GrLinkNext color="white" size={20}/>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="carousel-item pr-2">
            <div className="project2">
              <h2 className="PROJECTNAME">HOTEL WEBSITE</h2>
              <p className="text-center mt-2">
                A responsive hotel website showcasing rooms, services, and
                contact details. Built with <b>HTML, CSS, Bootstrap</b> and
                deployed live.
              </p>
              <img
                src="/"
                className="d-block w-100 rounded mt-3"
                alt="Hotel Website"
              />
            </div>
          </div>

          {/* Project 3 */}
          <div className="carousel-item pr-3">
            <div className="project3">
              <h2 className="PROJECTNAME">JOB PLATFORM</h2>
              <p className="text-center mt-2">
                A MERN stack job platform for posting and hiring. Includes user
                authentication, job posting, and applications. Built with{" "}
                <b>MongoDB, Express, React, Node.js</b>.
              </p>
              <img
                src="/job-platform.png"
                className="d-block w-100 rounded mt-3"
                alt="Job Platform"
              />
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Projects;
