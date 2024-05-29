import Header from './header/Header';
import SectionIntro from './SectionIntro';
import ScrollDown from './buttons/ScrollDown';
import { useRef } from 'react';

function Content() {
  const ref = useRef(null);

  return (
    <div className="contentLayout">
      <Header />
      {/* ref passed up from SectionIntro is passed as prop down to ScrollDown button */}
      <ScrollDown scrollRef={ref} />
      <SectionIntro ref={ref} />
    </div>
  );
}

export default Content;
