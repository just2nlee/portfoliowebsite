import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css"

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#000000">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2016 - June 2020"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            BCA (Hackensack, NJ)
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Academy for Medical Science Technology
          </h4>
          <p>
            <img src={require("../images/BCA.png")} alt="Highschool Emblem" style={{ width: '100%', height: 'auto' }} /> 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2020 - Expected (May 2024)"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Boston University (Boston, MA)
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Computer Science Bachelor's Degree
          </h4>

          <p>
            <img src={require("../images/Boston-University.jpg")} alt="Highschool Emblem" style={{ width: '100%', height: 'auto' }} /> 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2022 - September 2022"
          iconStyle={{ background: "#EEFDFD", color: "#000000" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Empathie (San Francisco, CA)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Engineer Intern
          </h4>
          <p>
            <img src={require("../images/empathie.png")} alt="empathie" style={{ width: '100%', height: 'auto' }} /> 
          </p>
          <p>Developed the backend infrastructure for recommending activities on mobile application.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Summer 2023"
          iconStyle={{ background: "#EEFDFD", color: "#000000" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Accenture (Seattle, WA)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Incoming Business & Integration Architecture Analyst Intern
          </h4>
          <p>
          <img src={require("../images/accenture.png")} alt="empathie" style={{ width: '100%', height: 'auto' }} /> 
          </p>
          <p>
            Working with the song development team.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      {/* <a href="path_to_your_resume.pdf" download>
        <button>Download Resume</button>
      </a>
      <div>
        <iframe src="path_to_your_resume.pdf" width="100%" height="600px" frameborder="0"></iframe>
      </div> */}
    </div>
  );
}

export default Experience;
