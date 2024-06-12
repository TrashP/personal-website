import Header from './header/Header';
import SectionIntro from './SectionIntro';
import ScrollDown from './buttons/ScrollDown';
import Projects from './projects/Projects';
import Certifications from './certifications/Certifications';
import { useRef } from 'react';

function Content() {
  const ref = useRef(null);

  return (
    <div className="contentLayout">
      <Header />
      {/* ref passed up from SectionIntro is passed as prop down to ScrollDown button */}
      <ScrollDown scrollRef={ref} />
      <SectionIntro ref={ref} />
      <Projects />
      <Certifications />
    </div>
  );
}

export default Content;
