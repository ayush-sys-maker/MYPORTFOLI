import React, { useEffect } from "react";
import './index.css'




function About (){

  useEffect(() => {
    const elements = document.querySelectorAll(".card");

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
    return <div id="about" className="about" >

<h1 className="text-center Aheading"  >About</h1>

<div   style={{backgroundColor:"#E2DED3"}} className="card card0   " >
    <div className="card-body">
        <p className="card-text" >
        Hi, I'm a Full Stack Developer based in Thrissur, India, with a passion for building clean, efficient, and user-friendly web applications. I specialize in working with the MERN stack — Node.js, Express.js, and React — along with PostgreSQL for robust backend data management.

Whether it's crafting responsive front-end interfaces or developing powerful server-side logic, I enjoy taking on challenges that allow me to solve real-world problems through code. I’m always exploring new technologies and best practices to stay up-to-date and deliver high-quality work.

I'm open to freelance projects, full-time roles, or collaboration with startups and developers who are building something meaningful.
        </p>
    </div>
</div>

<div className="skills">
        <div className="box1">
    <h3 className="text-xl font-semibold mb-4 font-ranade">Frontend</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
            </ul>
        </div>
        <div className="box2">
    <h3 className="text-xl font-semibold mb-4 font-ranade">Backend</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
        </div>
        <div className="box3">
    <h3 className="text-xl font-semibold mb-4 font-ranade">Tools</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
            </ul>
        </div>
        </div>


<div  style={{backgroundColor:"#E2DED3"}} className="card card2   " >
    <div className="card-body">
    <h4 className=" font-satoshi   ">Education</h4>

<div className="">
  {/* 12th */}
  <div className="eduhead">
    <h5 className=""    >12th Grade (Commerce)</h5>
    <p className="">Completed – 2025</p>
  </div>

  {/* BBA */}
  <div className="eduhead">
    <h5 className="">Bachelor of Business Administration (BBA)</h5>
    <p className="">IGNOU – Distance Learning</p>
    <p className="">Currently pursuing</p>
  </div>

  {/* Udemy */}
  <div className="eduhead">
    <h5 className="">Full-Stack Web Development</h5>
    <p className="">Udemy – Completed</p>
    <p className="">Click <a style={{textDecoration:"none"}} href="https://www.udemy.com/certificate/UC-5d0b5d0b-5d0b-5d0b-5d0b-5d0b5d0b5d0b/">here</a> to view certificate</p>
  </div>
    </div>
</div>
  
</div>
</div>
}



export default About



