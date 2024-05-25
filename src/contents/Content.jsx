import Header from './Header';
import SectionIntro from './SectionIntro';
import ScrollDown from './buttons/ScrollDown';
import { useRef } from 'react';

function Content() {
  const ref = useRef(null);

  return (
    <div className="contentLayout">
      <Header />
      <ScrollDown scrollRef={ref} />
      <SectionIntro ref={ref} />
    </div>
  );
}

export default Content;
