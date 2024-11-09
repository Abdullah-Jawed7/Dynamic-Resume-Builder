let hamburger = document.getElementById('Burger') 
let resHeader = document.getElementById('resHeader') 
hamburger?.addEventListener("click", () => {
    resHeader?.classList.toggle("resHeaderActive");
    console.log(resHeader);  
});
