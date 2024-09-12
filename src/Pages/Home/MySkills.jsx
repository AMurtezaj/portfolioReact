import React from 'react';

export default function MySkills() {
  // Define skills data directly within the component
  const skillsData = [
    {
      id: "1",
      src: "./img/product-chain-1.png",
      title: "Front-End",
      description: `Proficient in front-end development technologies such as HTML, CSS, JavaScript, and frameworks like React.js. Skilled in creating responsive and visually appealing user interfaces to enhance user experience. 
      Able to effectively collaborate with designers to implement design mockups and translate them into functional code. Familiar with front-end build tools like Webpack and Babel to optimize development workflow and performance.`
    },
    {
      id: "2",
      src: "./img/tag-1.png",
      title: "BackEnd",
      description: `Experienced in back-end development using languages like Java, .NET, and C#. Proficient in building robust server-side applications, implementing RESTful APIs, and working with databases to handle data efficiently. 
      Skilled in debugging and troubleshooting complex backend issues and optimizing code for scalability and performance. Familiar with backend frameworks like Spring Boot and ASP.NET MVC.`
    },
    {
      id: "3",
      src: "./img/feather-pen-2.png",
      title: "UI & UX Design",
      description: `Skilled in creating intuitive and user-friendly interfaces by applying principles of UI/UX design. Proficient in wireframing, prototyping, and creating design mockups to ensure seamless user interactions and engagement. 
      Able to conduct user research and usability testing to gather feedback and iterate on designs for optimal user experience. Familiar with design tools like Adobe XD, Sketch, and Figma.`
    },
    
  ];

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {skillsData.map((item) => (
          <div key={item.id} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Skill Icon" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}