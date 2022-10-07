import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import Button from 'react-bootstrap/esm/Button';
import About from './components/About';
import Education from './components/Education';
import SKILLS from './components/Skillbar';
import SkillBar from 'react-skillbars';
import ImageGrid from './components/ImageGrid';

function App() {
  const [state] = useState({
    title: 'Hi,',
    titleTwo: "I'm",
    titleThree: 'REJIL AKA MATERIKZEN',
    image: 'images/matrix.png',
  });

  return (
    <div
      className="grid-container d-flex flex-column"
      style={{ minHeight: '100vh' }}
    >
      <header className="p-2">
        <Navbar collapseOnSelect expand="lg" fixed="top" className="nav-bar">
          <Container>
            <Navbar.Brand href="#home">
              <b>MATERIKZEN</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="#deets">Home</Nav.Link>
                <Nav.Link href="#deets">About Me</Nav.Link>
                <Nav.Link href="#deets">Education</Nav.Link>
                <Nav.Link href="#deets">Skills</Nav.Link>
                <Nav.Link href="#deets">Service</Nav.Link>
                <Nav.Link href="#deets">Experience</Nav.Link>
                <Nav.Link href="#deets">Contact Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="heading">
          <div className="title-intro">
            <h2>
              <div className="title">
                <b>{state.title}</b>
              </div>
              <div className="titleTwo">{state.titleTwo}</div>
              <div className="titleThree">{state.titleThree}</div>
            </h2>
            <div className="text">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  strings: [
                    "I'm a Web Developer.",
                    "I'm a Graphic designer.",
                    "I'm a Gamer.",
                    "I'm a Youtuber.",
                    "I'm a Tech Enthusiast.",
                  ],
                }}
              />
              <Button className="title-btn">Contact me</Button>
            </div>
          </div>
          <br></br>

          <div className="home-image">
            <img
              className="matrix-logo d-none d-md-block img-fluid"
              src={state.image}
              alt=""
            ></img>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 550"
          preserveAspectRatio="none"
        >
          <polygon
            fill="#34f14d"
            points="1920.11 -0.15 1920.11 439.38 1868.11 439.38 1868.11 164.38 1834.11 164.38 1834.11 376.38 1782.11 376.38 1782.11 164.38 1744.11 164.38 1744.11 248.38 1692.11 248.38 1692.11 164.38 1655.11 164.38 1655.11 469.38 1603.11 469.38 1603.11 164.38 1567.11 164.38 1567.11 534.38 1515.11 534.38 1515.11 164.38 1476.11 164.38 1476.11 439.38 1424.11 439.38 1424.11 164.38 1383.11 164.38 1383.11 388.38 1331.11 388.38 1331.11 164.38 1284.11 164.38 1284.11 516.38 1232.11 516.38 1232.11 164.38 1191.11 164.38 1191.11 469.38 1139.11 469.38 1139.11 164.38 1099.11 164.38 1099.11 296.38 1047.11 296.38 1047.11 164.38 1004.11 164.38 1004.11 369.38 952.11 369.38 952.11 164.38 910.11 164.38 910.11 439.38 858.11 439.38 858.11 164.38 814.11 164.38 814.11 510.38 762.11 510.38 762.11 164.38 717.11 164.38 717.11 248.38 665.11 248.38 665.11 164.38 620.11 164.38 620.11 483.38 568.11 483.38 568.11 164.38 519.11 164.38 519.11 439.38 467.11 439.38 467.11 164.38 424.11 164.38 424.11 534.38 372.11 534.38 372.11 164.38 329.11 164.38 329.11 369.38 277.11 369.38 277.11 164.38 238.11 164.38 238.11 483.38 186.11 483.38 186.11 164.38 145.11 164.38 145.11 304.38 93.11 304.38 93.11 164.38 52.11 164.38 52.11 408.38 0.11 408.38 0.11 -0.15 1920.11 -0.15"
          />
        </svg>
      </header>
      <main className="p-4">
        <About />
        <Education />
        <h1 className="skills">Skills</h1>
        <div className="Skillbar">
          <SkillBar skills={SKILLS} />
        </div>
        <div className="service">Services</div>
        <h2 className="imagegrid-title">Gaming Logo Works</h2>
        <div className="imagegrid">
          <ImageGrid
            images={[
              'videos/viper.mp4',
              'videos/md.mp4',
              'images/fury.jpg',
              'images/matrixfull.jpg',
              'images/solid.jpg',
            ]}
          />
          <h5>These are some of my logo works.That i would like to show you</h5>
        </div>
      </main>

      <footer className="border p-2 mt-auto text-center">
        I am the footer
      </footer>
    </div>
  );
}

export default App;
