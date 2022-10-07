import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../Style/Education.css';
import { MdOutlineStar } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';

import education from './data/education.js';

export default function Education() {
  return (
    <div>
      <section className="section education" id="education">
        <div>
          <h1>Education</h1>
          <h6>My qualifications</h6>
          <VerticalTimeline>
            {education.map((education, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{ background: '#34f14d', color: '#fff' }}
                contentArrowStyle={{ borderLeft: '7px solid  #34f14d' }}
                date={education.date}
                dateClassName="education-date"
                iconStyle={{ background: '#34f14d', color: 'rgb(41, 39, 39)' }}
                icon={<FaUserGraduate />}
              >
                <h3 dangerouslySetInnerHTML={{ __html: education.event }} />
                <h5 dangerouslySetInnerHTML={{ __html: education.detail }} />
              </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
              iconStyle={{
                background: 'rgb(41, 39, 39)',
                color: '#34f14d',
              }}
              icon={<MdOutlineStar />}
            />
          </VerticalTimeline>
        </div>
      </section>
    </div>
  );
}
