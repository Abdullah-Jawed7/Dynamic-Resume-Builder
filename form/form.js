function addExperience() {
    const experienceContainer = document.getElementById('experience-container');
    if (!experienceContainer)
        return;
    const newExperienceEntry = document.createElement('div');
    newExperienceEntry.className = 'experience-entry';
    newExperienceEntry.innerHTML = `
        <input class=" " type="text" name="experience-title" placeholder="Title" required>
        <textarea class=" " name="experience-details" rows="4" placeholder="Details" required></textarea>
    `;
    const button = experienceContainer.querySelector('button');
    if (button) {
        experienceContainer.insertBefore(newExperienceEntry, button);
    }
    else {
        experienceContainer.appendChild(newExperienceEntry);
    }
}
function addEducation() {
    const educationContainer = document.getElementById('education-container');
    if (!educationContainer)
        return;
    const newEducationEntry = document.createElement('div');
    newEducationEntry.className = 'education-entry';
    newEducationEntry.innerHTML = `
        <input class=" " type="text" name="education-title" placeholder="Title" required>
        <textarea class=" " name="education-details" rows="4" placeholder="Details" required></textarea>
    `;
    const button = educationContainer.querySelector('button');
    if (button) {
        educationContainer.insertBefore(newEducationEntry, button);
    }
    else {
        educationContainer.appendChild(newEducationEntry);
    }
}
function addProject() {
    const projectContainer = document.getElementById('project-container');
    if (!projectContainer)
        return;
    const newProjectEntry = document.createElement('div');
    newProjectEntry.className = 'project-entry';
    newProjectEntry.innerHTML = `
        <input class=" " type="text" name="project-title" placeholder="Title" required>
        <textarea class=" " name="project-details" rows="4" placeholder="Details" required></textarea>
    `;
    const button = projectContainer.querySelector('button');
    if (button) {
        projectContainer.insertBefore(newProjectEntry, button);
    }
    else {
        projectContainer.appendChild(newProjectEntry);
    }
}
function getData(id) {
    localStorage.setItem(id, document.getElementById(id).value);
    console.log(localStorage.getItem(id));
}
document.getElementById('sibmitBtn')?.addEventListener('click', function (e) {
    e.preventDefault;
    const pictureInput = document.getElementById('picture');
    const picture = pictureInput.files ? pictureInput.files[0] : null;
    const reader = new FileReader();
    reader.onload = function (e) {
        const imageUrl = e.target?.result;
        localStorage.setItem('picture', imageUrl);
    };
    if (picture) {
        reader.readAsDataURL(picture);
    }
    const skills = document.getElementById('skills').value;
    const educations = Array.from(document.querySelectorAll('#education-container .education-entry'))
        .map(entry => {
        const title = entry.querySelector('input[name="education-title"]').value;
        const details = entry.querySelector('textarea[name="education-details"]').value;
        return `
            <div class="resume-section-item">
                <h4 class='edit title' >${title} </h4>
                    <p class='edit' >${details}</p>
            </div>
        `;
    })
        .filter(text => text.trim() !== '');
    //    Experience
    const experiences = Array.from(document.querySelectorAll('#experience-container .experience-entry'))
        .map(entry => {
        const title = entry.querySelector('input[name="experience-title"]').value;
        const details = entry.querySelector('textarea[name="experience-details"]').value;
        return `
                <div class="resume-section-item">
                 <h4  class='edit title' >${title} </h4>
                        <p class='edit' >${details}</p>
                </div>
            `;
    })
        .filter(text => text.trim() !== '');
    const Projects = Array.from(document.querySelectorAll('#project-container .project-entry'))
        .map(entry => {
        const title = entry.querySelector('input[name="project-title"]').value;
        const details = entry.querySelector('textarea[name="project-details"]').value;
        return `
                <div class="resume-section-item">
                 <h4 class ='edit title'>${title}</h4>
                        <p class='edit'>${details}</p>
                </div>
            `;
    });
    getData("name");
    getData('designation');
    getData("email");
    getData("phone");
    getData('summary');
    getData("picture");
    localStorage.setItem("skills", skills);
    localStorage.setItem("experience", JSON.stringify(experiences));
    localStorage.setItem("education", JSON.stringify(educations));
    localStorage.setItem("project", JSON.stringify(Projects));
    console.log(localStorage.getItem('skills'));
    console.log(localStorage.getItem('experience'));
    console.log(localStorage.getItem('education')?.split(',').join(''));
    console.log(localStorage.getItem('project'));
    console.log(localStorage.getItem('picture'));
    window.location.href = '/select/select.html';
});
function removeExp() {
    let element = document.getElementsByClassName('experience-entry');
    element[element.length - 1].remove();
}
function removeEdu() {
    let element = document.getElementsByClassName('education-entry');
    element[element.length - 1].remove();
}
function removeProject() {
    let element = document.getElementsByClassName('project-entry');
    element[element.length - 1].remove();
}

