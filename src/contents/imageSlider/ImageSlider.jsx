/* eslint-disable react/prop-types */
import pythonLogo from '../../assets/python.png';
import javascriptLogo from '../../assets/javascript.png';
import htmlLogo from '../../assets/html-5.png';
import cssLogo from '../../assets/css-3.png';
import webpackLogo from '../../assets/webpack.png';
import npmLogo from '../../assets/npm.png';
import gitLogo from '../../assets/commit-git.png';
import reactLogo from '../../assets/react.svg';
import viteLogo from '../../assets/vite.svg';

const ImageSlider = function () {
  return (
    <div id="imageSlider">
      <ImageDiv
        src={pythonLogo}
        alt="python logo"
        name="PYTHON"
        href="https://www.flaticon.com/free-icons/python"
        link="https://www.python.org/"
      />

      <ImageDiv
        src={javascriptLogo}
        alt="javascript logo"
        name="JAVASCRIPT"
        href="https://www.flaticon.com/free-icons/javascript"
        link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      />

      <ImageDiv
        src={htmlLogo}
        alt="html 5 logo"
        name="HTML"
        href="https://www.flaticon.com/free-icons/html"
        link="https://developer.mozilla.org/en-US/docs/Web/HTML"
      />

      <ImageDiv
        src={cssLogo}
        alt="css logo"
        name="CSS"
        href="https://www.flaticon.com/free-icons/css"
        link="https://developer.mozilla.org/en-US/docs/Web/CSS"
      />

      <ImageDiv
        src={webpackLogo}
        alt="webpack logo"
        name="WEBPACK"
        href=""
        link="https://webpack.js.org/"
      />

      <ImageDiv
        src={npmLogo}
        alt="npm logo"
        name="NPM"
        href=""
        link="https://www.npmjs.com/"
      />

      <ImageDiv
        src={gitLogo}
        alt="git logo"
        name="GIT"
        href="https://www.flaticon.com/free-icons/commit-git"
        link="https://git-scm.com/"
      />

      <ImageDiv
        src={reactLogo}
        alt="react logo"
        name="REACT"
        href=""
        link="https://react.dev/"
      />

      <ImageDiv
        src={viteLogo}
        alt="vite logo"
        name="VITE"
        href=""
        link="https://vitejs.dev/"
      />

      <ImageDiv
        src={pythonLogo}
        alt="python logo"
        name="PYTHON"
        href="https://www.flaticon.com/free-icons/python"
        link="https://www.python.org/"
      />

      <ImageDiv
        src={javascriptLogo}
        alt="javascript logo"
        name="JAVASCRIPT"
        href="https://www.flaticon.com/free-icons/javascript"
        link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      />

      <ImageDiv
        src={htmlLogo}
        alt="html 5 logo"
        name="HTML"
        href="https://www.flaticon.com/free-icons/html"
        link="https://developer.mozilla.org/en-US/docs/Web/HTML"
      />

      <ImageDiv
        src={cssLogo}
        alt="css logo"
        name="CSS"
        href="https://www.flaticon.com/free-icons/css"
        link="https://developer.mozilla.org/en-US/docs/Web/CSS"
      />

      <ImageDiv
        src={webpackLogo}
        alt="webpack logo"
        name="WEBPACK"
        href=""
        link="https://webpack.js.org/"
      />

      <ImageDiv
        src={npmLogo}
        alt="npm logo"
        name="NPM"
        href=""
        link="https://www.npmjs.com/"
      />

      <ImageDiv
        src={gitLogo}
        alt="git logo"
        name="GIT"
        href="https://www.flaticon.com/free-icons/commit-git"
        link="https://git-scm.com/"
      />

      <ImageDiv
        src={reactLogo}
        alt="react logo"
        name="REACT"
        href=""
        link="https://react.dev/"
      />

      <ImageDiv
        src={viteLogo}
        alt="vite logo"
        name="VITE"
        href=""
        link="https://vitejs.dev/"
      />
    </div>
  );
};

const ImageDiv = function ({ src, alt, name, href, link }) {
  return (
    <a href={link} target="_blank">
      <div>
        <img src={src} alt={alt} />
        <a href={href} />
        <p>{name}</p>
      </div>
    </a>
  );
};

export default ImageSlider;
