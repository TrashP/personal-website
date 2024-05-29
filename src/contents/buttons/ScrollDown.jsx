/* eslint-disable react/prop-types */

// ref to sibling element is passed down as prop from common parent
const ScrollDown = function ({ scrollRef }) {
  const handleClick = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button type="button" className="scroll" onClick={handleClick}>
      Scroll Down
    </button>
  );
};

export default ScrollDown;
