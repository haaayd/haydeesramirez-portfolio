// 1.) add the HTML buttons for linked in, GitHub, email, resume, 
// 2.) add a container element for bio component to append to 
// 3.) container element for projects (TTT) will sit 
// 4.) add event listener to each of my buttons 
// 5.) write and export functions to access data info 
// 6.) make sure your functions work as you intended them to work! ( always reference bootstrap and Data!) 
// 7.) get you favicon inserted to your file 
// 8.) create a bouncy bounce bootstrap for your icon buttons stated above. 
// 9.) add an x option so they can exit out when they click on your page 
// 10.) when they click the ex remove current information they are seeing. 
// 11.) add a responsive design 
// 12.)Add google fonts + favicon things 
// 13.) make sure it is mobile friendly reference previous lectures.




import { projects } from "../data/work.js"
import { skills } from "../data/skills.js"


const cardContainer = document.getElementById("card-container") 
const skillsContainer = document.getElementById("skills-container")
const scrollUp = document.getElementById("bottomb")

  let projectItem = projects.map(project =>
    `
    <div class="card" style="width: 18rem;">
        <img src="${project.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${project.description}</h5>
          <p class="card-text">${project.title} </p>
          <a href="${project.githubLink}" target="_blank" class="btn btn-primary">GitHub</a>
          <a href="${project.deploymentLink}" target="_blank" class="btn btn-primary">Deployment</a>
        </div>
    </div>  

    `).join('')
    cardContainer.innerHTML = projectItem


  let skillsItem = skills.map(skill =>
    `
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <ul>
      <li><ion-icon name="${skill.image}"></ion-icon></li>
    </ul>
    ` 
      
    ).join("")

      skillsContainer.innerHTML = skillsItem
    
    scrollUp.addEventListener("click", () => {
        window.scrollTo({
          top:0,
          behavior: "smooth"
        })
      })


