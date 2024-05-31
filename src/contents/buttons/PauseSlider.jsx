function PauseSlider() {
  const handleClick = (e) => {
    const slider = document.querySelector('#imageSlider');
    slider.classList.toggle('pause');
    e.target.textContent = e.target.textContent == '||' ? '>' : '||';
  };

  return (
    <button className="pause" type="button" onClick={handleClick}>
      ||
    </button>
  );
}

export default PauseSlider;
