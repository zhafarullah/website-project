function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Fungsi untuk menambah project baru ke daftar project
const addProjectForm = document.getElementById('add-project-form');
const projectList = document.getElementById('project-list');

if (addProjectForm) {
    addProjectForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('project-title').value;
        const img = document.getElementById('project-img').value;
        const github = document.getElementById('github-link').value;
        const youtube = document.getElementById('youtube-link').value;

        // Buat elemen project baru
        const projectDiv = document.createElement('div');
        projectDiv.className = 'details-container color-container';
        projectDiv.innerHTML = `
            <div class="article-container">
                <img src="${img}" alt="${title}" class="project-img">
            </div>
            <h2 class="experience-sub-title project-title">${title}</h2>
            <div class="btn-container">
                <button class="btn btn-color-2 project-btn" onclick="window.open('${github}', '_blank')">Github</button>
                <button class="btn btn-color-2 project-btn" onclick="window.open('${youtube}', '_blank')">Video Demo</button>
            </div>
        `;
        projectList.appendChild(projectDiv);
        addProjectForm.reset();
    });
}