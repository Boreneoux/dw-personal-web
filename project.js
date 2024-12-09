let projects = [];

function addProject(e) {
  e.preventDefault();

  let title = document.getElementById('project-name').value;
  let description = document.getElementById('project-description').value;
  let startDate = document.getElementById('start-date').value;
  let endDate = document.getElementById('end-date').value;

  let imageInput = document.getElementById('input-project-image');

  if (
    title == '' ||
    description == '' ||
    startDate == '' ||
    endDate == '' ||
    imageInput.files.length === 0
  ) {
    return alert('Please fill all fields');
  }

  image = URL.createObjectURL(imageInput.files[0]);
  let duration = calculateDuration(startDate, endDate);
  let technologies = getCheckedTechnologies();

  let project = {
    title: title,
    description: description,
    startDate: startDate,
    endDate: endDate,
    duration: duration,
    image: image,
    technologies: technologies
  };

  projects.push(project);

  renderProject();
}

function calculateDuration(startDate, endDate) {
  let start = new Date(startDate);
  let end = new Date(endDate);
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  let days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

  if (end.getDate() < start.getDate()) {
    months--;
  }

  if (months < 1) {
    return `${days} hari`;
  } else {
    return `${months} bulan`;
  }
}

function getCheckedTechnologies() {
  const technologies = [];
  const checkboxes = document.querySelectorAll(
    '.technologies input[type="checkbox"]'
  );

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      technologies.push(checkbox.id);
    }
  });

  return technologies;
}

function renderTechnologiesIcons(technologies) {
  const icons = {
    'node-js': 'fa-node',
    // prettier-ignore
    'html5': 'fa-html5',
    'react-js': 'fa-react',
    // prettier-ignore
    'javascript': 'fa-js'
  };

  return technologies
    .map(
      tech =>
        `<span class="project-icon"><i class="fa-brands ${icons[tech]}"></i></span>`
    )
    .join('');
}

function renderProject() {
  console.log(projects);

  let projectsGridElement = document.getElementById('projectsGrid');
  projectsGridElement.innerHTML = firstProjectContent();

  projects.forEach(project => {
    const technologiesIcons = Array.isArray(project.technologies)
      ? renderTechnologiesIcons(project.technologies)
      : '';
    const projectCard = `
      <div class="project-card">
        <img src="${project.image}" alt="${
      project.title
    }" class="project-image" />
        <div class="project-info">
          <h3 class="project-title"><a href="project-detail.html">${
            project.title
          } - ${new Date(project.startDate).getFullYear()}</a></h3>
          <p class="project-duration">durasi: ${project.duration}</p>
          <p class="project-description">${project.description}</p>
          <div class="project-icons">${technologiesIcons}</div>
          <div class="project-buttons">
            <button class="btn-project btn-edit">edit</button>
            <button class="btn-project btn-delete">delete</button>
          </div>
        </div>
      </div>
    `;
    projectsGridElement.innerHTML += projectCard;
  });
}

// function renderProject() {
//   console.log(projects);

//   let projectsGridElement = document.getElementById('projectsGrid');

//   projectsGridElement.innerHTML = firstProjectContent();

//   for (let i = 0; i < projects.length; i++) {
//     console.log(projects[i]);

//     projectsGridElement.innerHTML += `
//         <div class="project-card">
//           <img
//             src="${projects[i].image}"
//             alt="${projects[i].title}"
//             class="project-image"
//           />
//           <div class="project-info">
//             <h3 class="project-title">
//               <a href="project-detail.html">${projects[i].title}</a>
//             </h3>
//             <p class="project-duration">durasi: ${projects[i].duration}</p>
//             <p class="project-description">
//               ${projects[i].description}
//             </p>
//             <div class="project-icons">
//               <span class="project-icon"
//                 ><i class="fa-brands fa-node"></i
//               ></span>
//               <span class="project-icon"
//                 ><i class="fa-brands fa-react"></i
//               ></span>
//               <span class="project-icon"><i class="fa-brands fa-js"></i></span>
//             </div>
//             <div class="project-buttons">
//               <button class="btn btn-edit">edit</button>
//               <button class="btn btn-delete">delete</button>
//             </div>
//           </div>
//         </div>
//     `;
//   }
// }

function firstProjectContent() {
  return `
        <div class="project-card">
          <img
            src="assets/project-1.jpg"
            alt="Dumbways Mobile App"
            class="project-image"
          />
          <div class="project-info">
            <h3 class="project-title">
              <a href="project-detail.html">Dumbways Mobile App - 2021</a>
            </h3>
            <p class="project-duration">durasi: 3 bulan</p>
            <p class="project-description">
              App that used for dumbways student, it was deployed and can
              downloaded on playstore. Happy download
            </p>
            <div class="project-icons">
              <span class="project-icon"
                ><i class="fa-brands fa-node"></i
              ></span>
              <span class="project-icon"
                ><i class="fa-brands fa-react"></i
              ></span>
              <span class="project-icon"><i class="fa-brands fa-js"></i></span>
            </div>
            <div class="project-buttons">
              <button class="btn-project btn-edit">edit</button>
              <button class="btn-project btn-delete">delete</button>
            </div>
          </div>
        </div>
    `;
}
