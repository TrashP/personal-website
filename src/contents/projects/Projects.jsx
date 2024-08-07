import memory from '../../assets/pokemon-memory.png';
import tictactoe from '../../assets/tic-tac-toe.png';
import netflixData from '../../assets/netflixData.png';
import React from 'react';

function Projects() {
  // Toggle class to trigger animation for images
  const handleImageClick = (e) => {
    if (!e.target.classList.contains('moveTop')) {
      e.target.classList.toggle('moveTop');
    }
  };

  // Toggle class to trigger animation for divs
  const handleDescClick = (e) => {
    if (
      e.target.classList.contains('line') ||
      e.target.classList.contains('projectLink') ||
      e.target.classList.contains('projectPara')
    ) {
      if (
        e.target.parentNode.parentNode.childNodes[0].classList.contains(
          'moveTop'
        )
      ) {
        e.target.parentNode.parentNode.childNodes[0].classList.toggle(
          'moveTop'
        );
      }
    } else if (e.target.classList.contains('link')) {
      if (
        e.target.parentNode.parentNode.parentNode.childNodes[0].classList.contains(
          'moveTop'
        )
      ) {
        e.target.parentNode.parentNode.parentNode.childNodes[0].classList.toggle(
          'moveTop'
        );
      }
    } else {
      if (e.target.parentNode.childNodes[0].classList.contains('moveTop')) {
        e.target.parentNode.childNodes[0].classList.toggle('moveTop');
      }
    }
  };

  // Click event listeners to start animation
  React.useEffect(() => {
    const images = document.querySelectorAll('.projectImage');
    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener('click', handleImageClick);
    }

    return () => {
      for (let i = 0; i < images.length; i++) {
        images[i].removeEventListener('click', handleImageClick);
      }
    };
  }, []);

  React.useEffect(() => {
    const desc = document.querySelectorAll('.projectDescription');
    for (let i = 0; i < desc.length; i++) {
      desc[i].addEventListener('click', handleDescClick);
    }

    return () => {
      for (let i = 0; i < desc.length; i++) {
        desc[i].removeEventListener('click', handleDescClick);
      }
    };
  }, []);

  return (
    <section>
      <h3 id="softwareProjects">Software Projects</h3>
      <SoftwareProject
        screen={netflixData}
        alt="screenshot of netflix data analysis project"
        desc="A data analysis project to analyze trends in my Netflix viewing 
        habits. I performed some data cleaning and preprocessing to get it in 
        the desired format for analysis. This was performed using the Pandas 
        library in python and the Seaborn library was used for visualizing the 
        data."
        github="https://github.com/TrashP/netflix-data-analysis"
        site="https://arnab-data-analysis.netlify.app/"
      />
      <SoftwareProject
        screen={memory}
        alt="screenshot of pokemon memory game project"
        desc="A game created using ReactJS functional components and hooks. 
        The objective of the game is to click on each image without clicking 
        on the same image twice. The current score and best score of player 
        is displayed on screen as the game is played."
        github="https://github.com/TrashP/pokemon-memory-game"
        site="https://trashp.github.io/pokemon-memory-game/"
      />
      <SoftwareProject
        screen={tictactoe}
        alt="screenshot of tic tac toe game project"
        desc="A tic-tac-toe game implemented using vanilla JavaScript, HTML, 
        and CSS. The UI allows two players to play games against each other 
        and change their markers. The game can be restarted using a button at 
        the end of each round."
        github="https://github.com/TrashP/tic-tac-toe"
        site="https://trashp.github.io/tic-tac-toe/"
      />
    </section>
  );
}

function SoftwareProject({ screen, alt, desc, github, site }) {
  return (
    <div className="project">
      <img src={screen} alt={alt} className="projectImage" />
      <div className="projectDescription">
        <p className="projectPara">{desc}</p>
        <div className="line"></div>
        <div className="projectLink">
          <a href={github} target="_blank" className="link">
            GitHub
          </a>
          <a href={site} target="_blank" className="link">
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
