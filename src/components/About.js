import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../Style/About.css';
export default function About() {
  return (
    <div>
      <div className="section about" id="about">
        <h1>About</h1>
        <Row className="about-row">
          <Col lg={4} className="about-col text-center">
            <img className="about-image" src="images/me.png" alt="aboutImage" />
          </Col>
          <Col lg={8} className="about-row">
            <p>
              Hi guys I'm Rejil raj who loved to create and learn from
              experienced people for new creative ideas. I used to get inspired
              by a lot of texture on every aspect of the object in my
              surrounding. because of my emotional attachment to the computer
              which helped me a lot with learning new cool stuff during the
              pandemic, I utilized my vacations to learn website development and
              graphic designing. Gaming helped me to meet some friends who are
              working as a developer and designers .so I used to get ideas from
              them which made me think about how to be productive and utilize my
              time. First, I had no idea about my future career after discussing
              with them I got some idea about website development and graphic
              designing hope you guys won't get unsatisfied with my work
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
