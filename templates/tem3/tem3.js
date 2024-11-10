let hamburger = document.getElementById("Burger");
let resHeader = document.getElementById("resHeader");
hamburger?.addEventListener("click", () => {
    resHeader?.classList.toggle("resHeaderActive");
    console.log(resHeader);
});
let expContent = "";
let experience = JSON.parse(localStorage.getItem("experience") || "[]");
if (experience.length !== 0) {
    expContent = `  <h2 class='edit' >Experience</h2> \n ${experience?.join("")}`;
}
let eduContent = "";
let education = JSON.parse(localStorage.getItem("education") || "[]");
if (experience.length !== 0) {
    eduContent = `  <h2 class='edit' >Education</h2> \n ${education?.join("")}`;
}
let proContent = "";
let project = JSON.parse(localStorage.getItem("project") || "[]");
if (project.length !== 0) {
    proContent = `  <h2 class='edit' >Project</h2> \n ${project?.join("")}`;
}
const resumeHTML = ` 
  <div class="resumeTop">
  <div class="headText">
<h1 class="edit">${localStorage.getItem("name")}</h1>
<p class="edit subtitle">${localStorage.getItem("designation")}</p>
<p class="edit contact">${localStorage.getItem("email")} </p>
</div>
 <div class="headImg">
                <img src=${localStorage.getItem("picture")} alt="">
            </div>
</div>
<div class="columns">


<section class="summary">
    <h2 class="edit"  >Summary</h2>
    <p class="edit"  >${localStorage.getItem("summary")}</p>

</section>

<section class="experience">
   ${expContent}
</section>

<section class="education">
  ${eduContent}
</section>
<section class="project">
   ${proContent}
</section>
<section class="skills">
    <h2 class="edit" >Skills</h2>
    <p> ${localStorage
    .getItem("skills")
    .split(",")
    .map((skill) => `<li class='edit' >${skill} </li>`)
    .join("")}</p>
</section>
</div>`;
const defaultData = `<div><p class='emptyData'>Please First Fill the Form</p></div>`;
if (localStorage.getItem("name")) {
    document.getElementById("resume").innerHTML = resumeHTML;
}
else {
    document.getElementById("resume").innerHTML = defaultData;
}
function downloadResume() {
    const cvElement = document.querySelector("#resume");
    cvElement.classList.add("pdf-download");
    const options = {
        margin: 0,
        filename: `resume_${localStorage.getItem("name")}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf()
        .set(options)
        .from(cvElement)
        .save()
        .then(() => {
        cvElement.classList.remove("pdf-download");
    });
}
let edit = true;
function editResume() {
    edit = !edit;
    let editBtn = document.getElementById("editBtn");
    edit
        ? (editBtn.innerHTML = "Edit Resume")
        : (editBtn.innerHTML = "Save Resume");
    let input = document.getElementsByClassName("edit");
    let data = [...input];
    data.map((i) => {
        edit
            ? i.removeAttribute("contenteditable")
            : i.setAttribute("contenteditable", "true");
    });
}

