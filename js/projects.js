// PROJECTS ARRAY
const projects = [
  {
    id: 'proj1',
    name: 'Tonic',
    background: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    image: '<img src="assets/tonic.png" alt="Snapshoot Portfolio image"/>',
    description1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tools: ['html', 'css', 'javascript'],
    tools2: ['html', 'css', 'javascript', 'ruby', 'github', 'bootstrap'],
    seeProjectbtn: 'See Project',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'proj2',
    name: 'Multi-Post Stories',
    background: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    image: '<img src="assets/multi.png" alt="Snapshoot Portfolio image"/>',
    description1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tools: ['html', 'css', 'javascript'],
    tools2: ['html', 'css', 'javascript', 'ruby', 'github', 'bootstrap'],
    seeProjectbtn: 'See Project',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'proj3',
    name: 'Tonic',
    background: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    image: '<img src="assets/tonic.png" alt="Snapshoot Portfolio image"/>',
    description1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tools: ['html', 'css', 'javascript'],
    tools2: ['html', 'css', 'javascript', 'ruby', 'github', 'bootstrap'],
    seeProjectbtn: 'See Project',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'proj4',
    name: 'Multi-Post Stories',
    background: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    image: '<img src="assets/multi.png" alt="Snapshoot Portfolio image"/>',
    description1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tools: ['html', 'css', 'javascript'],
    tools2: ['html', 'css', 'javascript', 'ruby', 'github', 'bootstrap'],
    seeProjectbtn: 'See Project',
    liveLink: '#',
    sourceLink: '#',
  }];

// function to display the html popup for the project
const popUpModal = (project) => {
  const modalContent = `<div class="popup-container">
    <article class="project_info popup">
      <div class="popup-header">
        <h2>${project.name}</h2>
        <img class="close-popup"src="assets/close.png" alt="" srcset="">
      </div>
      
      <ul>
      <li>${project.background}</li>
      <li>${project.stack}</li>
      <li>${project.year}</li>
      </ul>
      ${project.image}
      <div class="popup-details">
      <p>
      ${project.description2}
    
      </p>
      <div class="skills-buttons">
      <ul class="skills-ul">
        <li>${project.tools2[0]}</li>
        <li>${project.tools2[1]}</li>
        <li>${project.tools2[2]}</li>
        <li>${project.tools2[3]}</li>
        <li>${project.tools2[4]}</li>
        <li>${project.tools2[5]}</li>
      </ul>
      <a class="btn-link" href="">
        See Live <img src="assets/view-site.png" alt="">
      </a>
      <a class="btn-link" href="">
        See Source <img src="assets/github.svg" alt="">
      </a>
    </div>
    </div>
    </article>
    </div>
    </div>`;
  return modalContent;
};
// function to display the html project card
const loadProjectCards = (projects = []) => {
  let projectContents = '';

  projects.forEach((project) => {
    projectContents

  += `<article class="project-card project_one project-holder">
    ${project.image}
    <div class="project_info">
      <h2>${project.name}</h2>
      <ul>
        <li>${project.background}</li>
        <li>${project.stack}</li>
        <li>${project.year}</li>
      </ul>
      <p>
      ${project.description1}
      </p>
      <ul class="skills-ul">
        <li>${project.tools[0]}</li>
        <li>${project.tools[1]}</li>
        <li>${project.tools[2]}</li>
      </ul>
      <a data-project-id="${project.id}" href="#" id="see-project-button">
      ${project.seeProjectbtn}
      </a>
    </div>
  </article>`;
  });

  return projectContents;
};
const projectDisplay = document.querySelector('.popup-holder');
const popupCloser = (e) => {
  projectDisplay.classList.toggle('active');
  e.preventDefault();
};

function showPopup(project) {
  const popUpTemplate = popUpModal(project);
  projectDisplay.innerHTML = popUpTemplate;

  projectDisplay.classList.toggle('active');

  const popUpModalCloseButton = document.querySelector('.close-popup');
  popUpModalCloseButton.addEventListener('click', popupCloser);
}

window.addEventListener('load', () => {
  const projectsSection = document.querySelector('.project-section');
  projectsSection.innerHTML = loadProjectCards(projects);
  const projectButtons = document.querySelectorAll('#see-project-button');
  Array.from(projectButtons).forEach((element) => {
    element.addEventListener('click', () => {
      const projectID = element.getAttribute('data-project-id');
      const projectObj = projects.find((project) => project.id === projectID);
      showPopup(projectObj);
    });
  });
});
