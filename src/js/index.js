const copyright = document.querySelector("#copyright");
const projectNumber = document.querySelector("#projectNumber");
const allProjects = document.querySelectorAll(".project").length;

const currentYear = new Date().getFullYear();

projectNumber.textContent = 16 - parseInt(allProjects);
copyright.textContent = `© LeoCode0 2021-${currentYear}`;
