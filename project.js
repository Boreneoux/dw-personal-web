let projects = [];

function addProject(e) {
  e.preventDefault();

  let title = document.getElementById('project-name').value;
  let description = document.getElementById('project-description').value;
  let imageInput = document.getElementById('input-project-image');

  if (title == '' || description == '' || imageInput.files.length === 0) {
    return alert('Please fill all fields');
  }

  image = URL.createObjectURL(imageInput.files[0]);

  let project = {
    title: title,
    description: description,
    image: image
  };

  projects.push(project);

  renderProject();
}

function renderProject() {
  console.log(projects);

  let projectsGridElement = document.getElementById('projectsGrid');

  projectsGridElement.innerHTML = firstProjectContent();

  for (let i = 0; i < projects.length; i++) {
    console.log(projects[i]);

    projectsGridElement.innerHTML += `
        <div class="project-card">
          <img
            src="${projects[i].image}"
            alt="${projects[i].title}"
            class="project-image"
          />
          <div class="project-info">
            <h3 class="project-title">
              <a href="project-detail.html">${projects[i].title}</a>
            </h3>
            <p class="project-duration">durasi: 3 bulan</p>
            <p class="project-description">
              ${projects[i].description}
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
              <button class="btn btn-edit">edit</button>
              <button class="btn btn-delete">delete</button>
            </div>
          </div>
        </div>
    `;
  }

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
              <button class="btn btn-edit">edit</button>
              <button class="btn btn-delete">delete</button>
            </div>
          </div>
        </div>
    `;
  }
}
