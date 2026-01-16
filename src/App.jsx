import { useState } from 'react'
import './App.css'
import {
  FaRegFileLines, FaCode, FaHtml5, FaCss3Alt,
  FaReact, FaNodeJs, FaPhp, FaPython, FaBootstrap, FaJava,
} from "react-icons/fa6";
import { SlLocationPin } from 'react-icons/sl';
import { MdOutlineEmail, MdVerified } from 'react-icons/md';
import { IoIosGitBranch } from "react-icons/io";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import Resume from './assets/resume.pdf'
import profile from './assets/Profile.jpeg'
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CircularGallery from './CircularGallery'


function App() {

  AOS.init();

  const [darkMode, setDarkMode] = useState(false);
  const aboutPhrase = [
    { id: 1, text: "I am Juan Carlo David, a recent Bachelor of Science in Information Technology from Our Lady of Fatima University. Over four years of rigorous academic training, I developed my expertise in software development, and system analysis." },
    { id: 2, text: "Beyond academics, I engaged in extracurricular activities that developed my leadership and teamwork skills. As an active student, I always grabbed opportunities to join coding competitions and create projects that pushed my limits. These experiences taught me the value of collaboration and effective communication in achieving shared goals." },
    { id: 3, text: "I also do freelance work, where I apply my skills to real-world projects, delivering solutions that meet client needs. This hands-on experience has honed my ability to adapt to different project requirements and work efficiently under deadlines." }
  ]

  const experiences = [
    { id: 1, title: "Freelance Web Developer", duration: "2023 - Present", description: "Building responsive web applications using React, Node.js, and Tailwind CSS for various clients.", active: true },
    { id: 2, title: "Customize Meal Planner Machine Learning", duration: "", description: "Machine learning system for personalized meal recommendations based on dietary preferences and nutritional goals.", active: false },
    { id: 3, title: "Advertisement Video Analyzer", duration: "", description: "Computer vision system analyzing advertisement videos for brand visibility and emotional sentiment metrics.", active: false },
    { id: 4, title: "Anemia Detection System", duration: "", description: "Image processing tool for non-invasive anemia detection from conjunctival images.", active: false },
    { id: 5, title: "Coffee Shop Management System", duration: "", description: "POS and inventory management system with order processing and sales tracking features.", active: false },
    { id: 6, title: "Employee Performance Evaluation System", duration: "", description: "Web platform for performance reviews, KPI tracking, and 360-degree feedback.", active: false },
    { id: 7, title: "Weed in Rice Field Detection", duration: "", description: "Deep learning solution for identifying weeds in rice fields to optimize herbicide use.", active: false },
  ]

  const techStacks = [
    {
      name: "Front-end", data: [
        { id: 1, name: "HTML", icon: <FaHtml5 className='stack-icon' />, tooltip: "HTML5" },
        { id: 2, name: "CSS", icon: <FaCss3Alt className='stack-icon' />, tooltip: "CSS3" },
        { id: 3, name: "Reactjs", icon: <FaReact className='stack-icon' />, tooltip: "ReactJS" },
        { id: 4, name: "JavaScript", icon: <RiJavascriptFill className='stack-icon' />, tooltip: "JavaScript" },
        { id: 8, name: "Bootstrap", icon: <FaBootstrap className='stack-icon' />, tooltip: "Bootstrap" },
        { id: 9, name: "Tailwind CSS", icon: <RiTailwindCssFill className='stack-icon' />, tooltip: "Tailwind CSS" },
      ]
    },
    {
      name: "Back-end", data: [
        { id: 5, name: "Nodejs", icon: <FaNodeJs className='stack-icon' />, tooltip: "Node.js" },
        { id: 6, name: "PHP", icon: <FaPhp className='stack-icon' />, tooltip: "PHP" },
        { id: 7, name: "Python", icon: <FaPython className='stack-icon' />, tooltip: "Python" },
      ]
    },
    {
      name: "Database", data: [
        { id: 8, name: "MySQL", icon: <SiMysql className='stack-icon' />, tooltip: "MySQL" },
      ]
    },
    {
      name: "Others", data: [
        { id: 10, name: "Java", icon: <FaJava className='stack-icon' />, tooltip: "Java" },
        { id: 11, name: "Git", icon: <IoIosGitBranch className='stack-icon' />, tooltip: "Git" },
      ]
    }
  ]

  const recentAwards = [
    { id: 5, title: "Dean's Lister", description: "Our Lady of Fatima University", year: "2023-2025", active: true, event: "Academic Year" },
    { id: 1, title: "1st Place - Public Defense", description: "Our Lady of Fatima University", year: "2025", false: true, event: "Research Conference" },
    { id: 2, title: "1st Place - Web Development", description: "Our Lady of Fatima University", year: "2024", active: false, event: "CodeFest" },
    { id: 3, title: "3rd Place - Java Programming", description: "Our Lady of Fatima University", year: "2024", active: false, event: "Intercampus Programming Contest" },
    { id: 4, title: "4th Place - CodeChum", description: "Our Lady of Fatima University", year: "2024", active: false, event: "National CodeChum Competition" },
  ]

  const recentCertifications = [
    { id: 1, title: "IT Specialist - Networking", issuer: "Certiport", year: "2025", active: true },
    { id: 2, title: "IT Specialist - Python", issuer: "Certiport", year: "2025", active: false },
    { id: 3, title: "AWS Lambda Foundations", issuer: "Amazon Web Services", year: "2025", active: false },
    { id: 4, title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2025", active: false },
    { id: 5, title: "Computer Security and Safety, Ethics, and Privacy ", issuer: "EPCPS", year: "2025", active: false },
  ]

  const socialLinks = [
    { id: 1, name: "LinkedIn", url: "https://www.linkedin.com/in/juan-carlo-david-8221b7216/", icon: <FaLinkedin className='social-icon' /> },
    { id: 2, name: "GitHub", url: "https://github.com/", icon: <FaGithub className='social-icon' /> },
    { id: 3, name: "Facebook", url: "https://www.facebook.com/jcdiff123/", icon: <FaFacebook className='social-icon' /> },
    { id: 4, name: "Email", url: "mailto:juancarlodavid14@gmail.com", icon: <MdOutlineEmail className='social-icon' /> },
  ]

  const contactInfo = [
    { id: 1, label: "Email", value: "juancarlodavid14@gmail.com", icon: <MdOutlineEmail /> },
    { id: 2, label: "Phone", value: "+63 956 219 6895", icon: <FaPhoneAlt /> },
    { id: 3, label: "Location", value: "Caloocan City, Philippines", icon: <SlLocationPin /> },
  ]

  const goals = [
    {
      id: 1, title: "Short-term", items: [
        "Master advanced React and Node.js development patterns",
        "Contribute to open-source projects regularly",
        "Earn AWS and Google Cloud certifications"
      ]
    },
    {
      id: 2, title: "Long-term", items: [
        "Become a senior full-stack developer",
        "Launch an AI-driven tech startup",
        "Mentor aspiring developers in the community"
      ]
    }
  ]


  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Juan_Carlo_David_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className={`flex-center ${darkMode ? 'light-mode' : 'dark-mode'} main-container`}>
        <div className="container-wrapper">
          <header className='flex-center'>
            <div className="profile" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
              <img src={profile} alt="Profile" />
              <div className="header-details">
                <h1>Juan Carlo David <MdVerified className='icon-verified' /></h1>
                <div className="location"><SlLocationPin /> Caloocan City, Philippines</div>
                <div className="position">Freelance Web Developer</div>
                <div className="actions flex-center">
                  <button className='btn-primary' onClick={handleDownloadResume}>
                    <FaRegFileLines /> Download Resume
                  </button>
                  <a href="mailto:juancarlodavid14@gmail.com"><button className='btn-secondary'><MdOutlineEmail /> Send Email </button></a>
                </div>
              </div>
            </div>

            {/* <div className="theme-toggle"> */}
            <div>
              <StyledWrapper>
                <div className="toggle-switch">
                  <label className="switch-label">
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                    />
                    <span className="slider" />
                  </label>
                </div>
              </StyledWrapper>
            </div>
          </header>


          <div className="flex-center main-con">
            <div className="flex-about">
              <div className="about" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                <h2><IoIosGitBranch className='icon-branch' /> About Me</h2>
                <div className="about-phrase">
                  {aboutPhrase.map(phrase => (
                    <p key={phrase.id}>{phrase.text}</p>
                  ))}
                </div>
              </div>

              <div className="about" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">
                <h2><IoIosGitBranch className='icon-branch' /> Technical Skills</h2>
                <div className="stack-list">
                  {techStacks.map((category, index) => (
                    <div key={index} className="stack-category">
                      <h3>{category.name}</h3>
                      <div className="stack-items">
                        {category.data.map(stack => (
                          <div className='stack-container' key={stack.id}>
                            {stack.icon}
                            <div className="tooltip">{stack.tooltip}</div>
                            <div>{stack.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="exp" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
              <h2><FaCode className='icon-code' /> Experience</h2>
              <div className="exp-list">
                {experiences.map(exp => (
                  <div className="exp-item" key={exp.id}>
                    <div className="height-line"></div>
                    <div className={`dot-line ${exp.active ? 'active' : ''}`}></div>
                    <h3>{exp.title}</h3>
                    <span>{exp.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-center awards-cert-container">
            <div className="awards" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
              <h2><IoIosGitBranch className='icon-branch' /> Recent Awards</h2>
              <div className="awards-list">
                {recentAwards.map(award => (
                  <div className="award-item" key={award.id}>
                    <div className="height-line"></div>
                    <div className={`dot-line ${award.active ? 'active' : ''}`}></div>
                    <h3>{award.title}</h3>
                    <span className="event-name">{award.event}</span>
                    <span className="description">{award.description} • {award.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="certifications" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
              <h2><IoIosGitBranch className='icon-branch' /> Recent Certifications</h2>
              <div className="cert-list">
                {recentCertifications.map(cert => (
                  <div className="cert-item" key={cert.id}>
                    <h3>{cert.title}</h3>
                    <span>{cert.issuer} • {cert.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bottom-sections">
              <div className="left-column">
                <div className="contact-card" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                  <h2><MdOutlineEmail className='section-icon' /> Get In Touch</h2>
                  <div className="contact-grid">
                    {contactInfo.map(contact => (
                      <div key={contact.id} className="contact-row">
                        <span className="contact-label">{contact.label}</span>
                        <span className="contact-value">{contact.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="social-card" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                  <h2><IoIosGitBranch className='section-icon' /> Connect With Me</h2>
                  <div className="social-grid">
                    {socialLinks.map(social => (
                      <a href={social.url} target="_blank" rel="noopener noreferrer" key={social.id} className="social-link">
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="goals-card" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                <h2><FaCode className='section-icon' /> Career Goals</h2>
                <div className="goals-wrapper">
                  {goals.map(goal => (
                    <div key={goal.id} className="goal-section">
                      <div className="goal-header">{goal.title}</div>
                      <div className="goal-list">
                        {goal.items.map((item, index) => (
                          <div key={index} className="goal-line">{item}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
            <h2 className="gallery-title">Gallery</h2>
            <div style={{ height: '600px', position: 'relative' }}>
              <CircularGallery
                bend={0}
                textColor={darkMode ? "#424242" : "#fff"}
                borderRadius={0.05}
                scrollEase={0.02}
              />
            </div>
          </div>
        </div>
      </div>

      <footer className={`flex-center ${darkMode ? 'light-mode' : 'dark-mode'} footer`}>
        <span>© 2025 Juan Carlo David. All rights reserved.</span>
      </footer>
    </>
  )
}

const StyledWrapper = styled.div`
  .toggle-switch {
    position: relative;
    width: 100px;
    height: 50px;
    --light: #d8dbe0;
    --dark: #3c3e42;
    --link: rgb(27, 129, 112);
    --link-hover: rgb(24, 94, 82);
  }

  .switch-label {
    position: absolute;
    width: 100%;
    height: 30px;
    background-color: var(--dark);
    border-radius: 25px;
    cursor: pointer;
    border: 3px solid var(--dark);
  }

  .checkbox {
    position: absolute;
    display: none;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider {
    background-color: var(--light);
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    -webkit-box-shadow: inset 12px -4px 0px 0px var(--light);
    box-shadow: inset 12px -4px 0px 0px var(--light);
    background-color: var(--dark);
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider::before {
    -webkit-transform: translateX(50px);
    -ms-transform: translateX(50px);
    transform: translateX(50px);
    background-color: var(--dark);
    -webkit-box-shadow: none;
    box-shadow: none;
  }`;

export default App
