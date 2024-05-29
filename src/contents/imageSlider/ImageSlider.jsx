/* eslint-disable react/prop-types */
import pythonLogo from '../../assets/python.png';

const ImageSlider = function () {
  return (
    <div>
      <ImageDiv
        src={pythonLogo}
        alt="python logo"
        name="Python"
        href="https://www.flaticon.com/free-icons/python"
      />
    </div>
  );
};

const ImageDiv = function ({ src, alt, name, href }) {
  return (
    <div>
      <img src={src} alt={alt} />
      <a href={href} />
      <p>{name}</p>
    </div>
  );
};

export default ImageSlider;
