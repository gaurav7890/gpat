import React from 'react';
import '../css/base.scss';
import '../css/experiences.scss';


export default class Experiences extends React.Component {
  render() {
    return (
      <div className="experiences">
        <div className="education resume-section-container">
          <h2>Education</h2>
          <div className="resume-section">
            <div className="resume-left">
              <div className="degree"><b>Master of Science</b></div>
              <div className="major">Computer Science</div>
            </div>
            <div className="resume-right">
              <div>University of Texas at Dallas</div>
              <div>Richardson, TX, USA</div>
              <div>Fall 2012 – Spring 2014</div>
            </div>
          </div>
          <div className="resume-section">
            <div className="resume-left">
              <div className="degree"><b>Bachelor of Engineering</b></div>
              <div className="major">Information Science &amp; Engineering</div>
            </div>
            <div className="resume-right">
              <div>B.M.S College of Engineering (Autonomous)</div>
              <div>Bangalore, KA, India</div>
              <div>Fall 2008 – Spring 2012</div>
            </div>
          </div>
        </div>
        <div className="resume-section-container">
          <h2>Professional Experiences</h2>
          <div className="resume-section">
            <div className="resume-left">
              <div className="employer"><b><a href="http://jnj.com/">Johnson and Johnson</a></b></div>
              <div className="role">Software Engineer - Fullstack</div>
              <div className="location">Seattle, WA, USA</div>
              <div className="timeline">Aug 2019 - present</div>
            </div>
            <div className="resume-right">
              <ul>
                <li>Crowd-sourced assessment of technical skills of a surgeon to provide insights, expert feedback for continuous growth and improvement.</li>
                <li>Built advanced filters in the “Academy” page which is a curated youtube-like webpage to look up surgery videos.</li>
                <li>Built the “Community” page with features like insights for surgeons, Peer Discussions, activity history, paid assessments, etc.</li>
                <li>Designed and built the login wizard, and the new login flow.</li>
                <li>Built mobile-friendly responsive pages across different parts of the application.</li>
                <li>Built the new skills summary section that ranks a surgeon’s skills with respect to their peers using graphs, and insights.</li>
                <li>Worked on multiple aspects of CCAP - the in-OR tablet that captures surgery videos.</li>
                <li><b>Technology Stack</b>: JavaScript, HTML/CSS/SCSS, Meteor, Blaze, Node, MongoDb</li>
              </ul>
            </div>
          </div>
          <div className="resume-section">
            <div className="resume-left">
              <div className="employer"><b><a href="https://www.usermind.com/">Usermind, Inc</a></b></div>
              <div className="role">Software Development Engineer II</div>
              <div className="location">Seattle, WA, USA</div>
              <div className="timeline">April 2019 - July 2019</div>
            </div>
            <div className="resume-right">
              <ul>
                <li>Customer engagement platform to help clients orchestrate customers’ transitions categorized by journeys and milestones to help trigger actions.</li>
                <li>Designed and built validations for Preview and Publish of a journey that helps users can check their errors beforehand.</li>
                <li>Designed and built validations for maps that helps users build a map entailing the correct schema.</li>
                <li>Designed and built segment suggestions that helps users create segments by looking at the insights provided.</li>
                <li><b>Technology Stack</b>: JavaScript, HTML/CSS/SCSS, EmberJS</li>
              </ul>
            </div>
          </div>
          <div className="resume-section">
            <div className="resume-left">
              <div className="employer"><b><a href="https://www.apptio.com/">Apptio, Inc</a></b></div>
              <div className="role">Software Development Engineer II</div>
              <div className="location">Seattle, WA, USA</div>
              <div className="timeline">May 2017 - April 2019</div>
            </div>
            <div className="resume-right">
              <ul>
                <li>Scalable Data Ingestion Web Application that can consume data from disparate source systems with features including Version Control, Auto-mapping of columns, Date-specific content, Multiple Workspaces, Error Surfacing, etc.</li>
                <li>Built and responsible for the entire front-end of the 4-page application.</li>
                <li>Worked Vertical slices of the application where I built and consumed APIs for some of the features – error surfacing, builds information, etc.</li>
                <li>Introduced and built shared components that can be consumed by other applications in the product/other products.</li>
                <li>Built the base functional UI test suite and added tests using selenide to ensure front-end validation and stability.</li>
                <li><b>Technology Stack</b>: JavaScript, TypeScript, ReactJS, Redux, Immutable-js, HTML/CSS/SCSS, Jest, Enzyme, Java, Selenium, Selenide</li>
              </ul>
            </div>
          </div>
          <div className="resume-section">
            <div className="resume-left">
              <div className="employer"><b><a href="https://www.sabre.com/">Sabre Corp</a></b></div>
              <div className="role">Contributer Software Engineer</div>
              <div className="location">Dallas, TX, USA</div>
              <div className="timeline">June 2016 - March 2017</div>
            </div>
            <div className="resume-right">
              <ul className="project-name">IROPS Reaccomodation
                <li>Web application that delivers passenger rebooking solutions for airlines during real-time and anticipated disruptions.</li>
                <li>Redesign and rebuild of the front-end of the application</li>
                <li>Introduced and built new features, reports to the product working in a test driven development.</li>
                <li><b>Technology Stack</b>: Java, Junit, Spring, JavaScript, ReactJS, Redux, karma, HTML/CSS</li>
              </ul>
            </div>
          </div>
          <div className="resume-section">
            <div className="resume-left">
              <div className="employer"><b><a href="https://www.cerner.com/">Cerner Corp</a></b></div>
              <div className="role">Software Engineer</div>
              <div className="location">Kansas City, MO, USA</div>
              <div className="timeline">Aug 2019 - May 2016</div>
            </div>
            <div className="resume-right">
              <ul className="project-name">HealtheIntent Data Upload Utility
                <li>Developed an intuitive tool to upload client’s healthcare data. (A tool that helps clients upload data files with ease that performs pre-upload validation.)</li>
                <li>Single-handedly worked on the client-end of the project that interacts with the service-end to get responses and performs validation in a test driven development.</li>
                <li><b>Technology Stack</b>: Java, Junit</li>
              </ul>
              <ul className="project-name">DataWorks: Data On-boarding and Profiling
                <li>Developed tools to ease the ingestion of desperate data sources (EMRs, HIEs, Payers, etc) to Cerner’s big data platform.</li>
                <li>Develop infrastructure for creating reports that profile the raw data being ingested into the platform.</li>
                <li><b>Technology Stack</b>: Java, Apache Crunch, MapReduce, Vertica, SAP BusinessObjects</li>
              </ul>
              <ul className="project-name">Uplift and creation of MapForce functions
                <li>Mapped xsd models to raw avdl models and created MapForce functions based on requirements.</li>
                <li>Created test mfds and junit tests to ensure correct emission of data.</li>
                <li><b>Technology Stack</b>: MapForce, Spring Tool Suite</li>
              </ul>
              <ul className="project-name">PopulationHealth Analytics Dev
                <li>Developed roles to create schema for ETL load test</li>
                <li>Modified Ad Hoc Reports to meet customer requirements using SAP Business Objects 4.0.</li>
                <li><b>Technology Stack</b>: Java, Apache Crunch, SAP BusinessObjects, Chef, Vertica</li>
              </ul>
              <ul className="project-name">Process Tutorials
                <li>Customized an e-learning interactive web application offering Jira, Git and Crucible learning modules.</li>
                <li><b>Technology Stack</b>: ava, Spring MVC, Spring Security, Hibernate ORM, JIRA REST API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
