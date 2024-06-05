import memory from '../../assets/pokemon-memory.png';
import tictactoe from '../../assets/tic-tac-toe.png';
import React from 'react';

function Projects() {
  const handleImageClick = (e) => {
    if (!e.target.classList.contains('moveTop')) {
      e.target.classList.toggle('moveTop');
    }
  };

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
      <h3>Software Projects</h3>
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
