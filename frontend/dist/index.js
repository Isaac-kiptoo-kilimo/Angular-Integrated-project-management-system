"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const allProjects = document.getElementById('all-projects');
const url_ = 'http://localhost:5000/project/';
function fetchAllProjects(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetch(url);
            console.log(data);
            if (!data.ok) {
                throw new Error(`Request failed with status: ${data.status}`);
            }
            const response = yield data.json();
            // console.log(response);
            return response;
        }
        catch (error) {
            console.error('Error fetching projects:', error);
            throw error;
        }
    });
}
// document.addEventListener('click', (event) => {
//   if (event.target && event.target.classList.contains('assign-button')) {
//     const projectId = event.target.getAttribute('data-project-id');
//     const selectedUserId = event.target.getAttribute('data-user-id');
//     if (projectId && selectedUserId) {
//       assignProject(projectId, selectedUserId);
//     }
//   }
// });
function displayAllProjects(projectsArray) {
    console.log(projectsArray);
    projectsArray.forEach((project) => {
        allProjects.innerHTML += `
      <div class="card-item">
      
        <h3 class="developer text-uppercase text-secondary">${project.project_name}</h3>
        <h5>${project.description}.</h5>
        <h4>${project.endDate}</h4>
        
       
      </div>
    `;
    });
}
fetchAllProjects(url_)
    .then((response) => {
    displayAllProjects(response);
})
    .catch((error) => {
    console.log(error);
});
