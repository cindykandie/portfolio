// PROJECTS ARRAY
const projects = [
  {
    id: 'proj1',
    name: 'Kamident Clinic',
    background: 'Dental Health',
    stack: 'Front End Dev',
    year: '2021',
    image: '<img src="assets/images/kamident.png" alt="Snapshoot Portfolio image"/>',
    description1: 'Kamident Clinic is a web site for dental patients to easily access and book their dental appointments.',
    description2: 'Kamident Clinic is a web site for dental patients to easily access and book their dental appointments. Kamident also presents the work previously done by the dentist and is able to convince web visitors to make the same dental appointments. The dentist can quickly communicate with clinics on such a platform hence multiplying revenue sources.',
    tools: ['html', 'css', 'javascript'],
    tools2: ['html', 'css', 'javascript', 'webpack', 'github', 'tailwind'],
    seeProjectbtn: 'See Project',
    liveLink: 'https://dantiste.netlify.app',
    sourceLink: 'https://github.com/cindykandie/kamident-clinic',
  },
  // {
  //   id: 'proj2',
  //   name: 'NetFlix Replica',
  //   background: 'Personal Project',
  //   stack: 'Front End Dev',
  //   year: '2021',
  //   image: '<img src="assets/images/netflix.png" alt="Snapshoot Portfolio image"/>',
  //   description1: 'I created a replica of Netflix to test and show my extensive knowledge in HTML, CSS and JavaScript',
  //   description2: 'I built a replica of Netflix landing page. I utilized my knowledge of HTML, CSS, and JavaScript to create a visually appealing and responsive webpage that closely resembles the original Netflix landing page. In addition to implementing the design, I also incorporated interactive elements such as dropdown menus, hover effects, and clickable buttons to enhance the user experience. Through this project, I was able to showcase my proficiency in web development and gain hands-on experience with building complex web interfaces.',
  //   tools: ['html', 'css', 'javascript'],
  //   tools2: ['html', 'css', 'javascript', , 'github', 'bootstrap'],
  //   seeProjectbtn: 'See Project',
  //   liveLink: 'https://fauxnetflix.netlify.app/',
  //   sourceLink: 'https://github.com/cindykandie/fauxnetflix',
  // },
  // {
  //   id: 'proj3',
  //   name: 'Maskani Website ',
  //   background: 'Maskani Company',
  //   stack: 'Frontend End Dev',
  //   year: '2020',
  //   image: '<img src="assets/images/maskani.png" alt="Snapshoot Portfolio image"/>',
  //   description1: 'Maskani is an online real estate marketplace that provides information and tools for buying, selling, renting, and financing homes.',
  //   description2: 'Maskani is an online real estate marketplace that simplifies buying, selling, and renting homes. It offers a wide range of listings and tools such as property search filters and mortgage calculators. Users can connect with real estate professionals to facilitate their transactions. Overall, Maskani aims to make the real estate process more accessible and user-friendly.',
  //   tools: ['html', 'css', 'javascript'],
  //   tools2: ['html', 'css', 'javascript', 'ruby', 'github', 'webpack'],
  //   seeProjectbtn: 'See Project',
  //   liveLink: 'https://maskanii.netlify.app/',
  //   sourceLink: 'https://github.com/cindykandie/maskani',
  // }
  // {
  //   id: 'proj4',
  //   name: 'Multi-Post Stories',
  //   background: 'CANOPY',
  //   stack: 'Back End Dev',
  //   year: '2015',
  //   image: '<img src="assets/images/multi.png" alt="Snapshoot Portfolio image"/>',
  //   description1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //   description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  //   tools: ['html', 'css', 'javascript'],
  //   tools2: ['html', 'css', 'javascript', 'ruby', 'github', 'bootstrap'],
  //   seeProjectbtn: 'See Project',
  //   liveLink: '#',
  //   sourceLink: '#',
  // }
];

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
      <div class="view-btns">
        <a class="btn-link" href="${project.liveLink}">
          See Live <img src="assets/view-site.png" alt="">
        </a>
        <a class="btn-link" href="${project.sourceLink}">
          See Source <img src="assets/github2.png" alt="">
        </a>
      </div>
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

  += `<article class="project-card project_one project-holder" id="${project.id}">
    ${project.image}
    <div class="project_info" style="position: relative;">
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
  projectDisplay.classList.add('active');
  e.preventDefault();
};

function showPopup(project) {
  const popUpTemplate = popUpModal(project);
  projectDisplay.innerHTML = popUpTemplate;
  projectDisplay.classList.remove('active');
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
