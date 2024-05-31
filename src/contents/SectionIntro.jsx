/* eslint-disable react/no-unescaped-entities */
import { forwardRef } from 'react';
import ImageSlider from './imageSlider/ImageSlider';
import PauseSlider from './buttons/PauseSlider';

// forwardRef wrapper is used pass ref to parent element
const SectionIntro = forwardRef(function (props, ref) {
  return (
    <section>
      {/* ref used in h3 element to scroll into view on click */}
      <h3 ref={ref}>About me</h3>

      <p>
        I'm moving towards a new direction in my career and my life. For the
        past couple of years, I've been self-learning various concepts in
        Computer Science and doing some web dev with JavaScript and data science
        with Python. I'm currently enrolled in a M.Sc. Computer Science
        programme at University College London.
      </p>

      <p>
        I love creating new user experiences, implementing eye pleasing designs,
        and making them come to life with the best software development
        practices. I hope to continue learning more and more about this
        profession and build my career in this field. As a person, I'm
        detail-oriented and I like working in a systematic and well-planned
        manner.
      </p>

      <p>
        I'm looking for opportunities to work as a software developer. I expect
        a steep learning curve on the job and I feel confident in my ability to
        tackle any challenges that come along the way. Contact me if you think
        I'm up for it!
      </p>

      <h3>
        Languages, Tools, and Frameworks <PauseSlider />
      </h3>

      <ImageSlider />
    </section>
  );
});

SectionIntro.displayName = 'SectionIntro';

export default SectionIntro;
