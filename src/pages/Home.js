import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Typewriter from 'typewriter-effect';
import "../styles/Home.css";
import myImage from '../images/profilepic.jpg';
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2 className = "typetext" style={{ marginTop: "0px"}}> 
          <Typewriter 
            
            options={{ 
            strings:["Hi, My Name is Justin!","Welcome to my Website!"],
            autoStart:true,
            delay:130,
            loop:true
            }}
            
          /> 
        </h2>
        <img className="Profilepic" src = {myImage} alt = "Profile picture" style={{ width: 'auto', height: '280px', marginTop: '35px'}} />
        <div className="prompt">
          <p>I'm a Junior studying Computer Science at Boston University with a passion for learning and creating software applications.</p>
          <a href = "https://www.linkedin.com/in/justinchaeminlee">
          <LinkedInIcon className = "LinkedInIcon"/>
          </a>
          <a href="mailto:juslee@bu.edu">
            <EmailIcon />
          </a>
          <a href = "https://github.com/just2nlee">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Languages</h2>
            <span>
              Python, Java, C, HTML/CSS, JavaScript, SQL, matplotlib, scikit-Learn, Go, MySQL
            </span>
          </li>
          <li className="item">
            <h2>Developer Tools</h2>
            <span>
              VS Code, Postman, Heroku, Jira
            </span>
          </li>
          <li className="item">
            <h2>Frameworks</h2>
            <span>Git, GitHub, Flask, Firebase, Agile, React.js, TensorFlow, NumPy, Pandas, NetworkX, Scrum, Figma</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
