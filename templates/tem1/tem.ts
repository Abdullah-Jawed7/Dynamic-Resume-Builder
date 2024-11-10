let hamburger = document.getElementById('Burger') 
let resHeader = document.getElementById('resHeader') 
hamburger?.addEventListener("click", () => {
    resHeader?.classList.toggle("resHeaderActive");
    console.log(resHeader);  
});




let expContent = ''
let experience =JSON.parse(localStorage.getItem("experience") || "[]")
if (experience.length !== 0) {
   expContent = `  <h3>Experience</h3> \n ${experience?.join('')}`
    
}
let eduContent = ''
let education =JSON.parse(localStorage.getItem("education") || "[]")
if (experience.length !== 0) {
   eduContent = `  <h3>Education</h3> \n ${education?.join('')}`
    
}
let proContent = ''
let project =JSON.parse(localStorage.getItem("project") || "[]")
if (project.length !== 0) {
   proContent = `  <h3>Project</h3> \n ${project?.join('')}`
}

const resumeHTML = `
<div style="text-align:center;">
    ${localStorage.getItem('picture') ? `<img src="${localStorage.getItem('picture')}" alt="Profile Picture">` : ''}
</div>
<h2 class='edit' >${localStorage.getItem('name')}</h2>
<p class='edit' ><strong>Email:</strong>${localStorage.getItem('email')} </p>
<p class='edit' ><strong>Phone:</strong>${localStorage.getItem('phone')}</p>
<div class="resume-section">
${expContent}
</div>
<div class="resume-section">
    
    ${eduContent}
</div>
<div class="resume-section">
    
    ${proContent}
</div>
<div class="resume-section">
    <h3>Skills</h3>
    <ul class="skills">
        ${localStorage.getItem('skills')!.split(',')
        .map(skill => `<li class='edit' >${skill} </li>`).join('')}
    </ul>
</div>
`;
const defaultData = `<div><p class='emptyData'>Please First Fill the Form</p></div>`;
if (localStorage.getItem('name') !== null) {
    document.getElementById('resume')!.innerHTML = resumeHTML;
    
} else {
    document.getElementById('resume')!.innerHTML = defaultData
}




function downloadResume(): void {
    const cvElement = document.querySelector("#resume") as HTMLElement;
    // cvElement.classList.add("pdf-download");
    const options = {
        margin: 0, 
        filename: `resume_${localStorage.getItem('name')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 }, 
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    
    html2pdf().set(options)
        .from(cvElement)
        .save()
        // .then(() => {
        //     cvElement.classList.remove("pdf-download");
        // });
}



let edit = true;
function editResume() {
    edit = !edit;
let editBtn = document.getElementById('editBtn');
edit ?  editBtn!.innerHTML = 'Edit Resume': editBtn!.innerHTML = 'Save Resume';
    let input = document.getElementsByClassName('edit');
    let data =[...input] as Element[]
    data.map((i) => { edit ? i.removeAttribute('contenteditable')
     : i.setAttribute('contenteditable' ,"true");
      });
}