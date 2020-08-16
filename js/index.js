var projects;

document.addEventListener('DOMContentLoaded', function () {
    httpGetAsync("/projects.JSON", renderJSON);
});


function renderJSON(res) {
    projects = JSON.parse(res);
    renderLongTermProjects('<div class="card sticky-action"><div class="card-image waves-block waves-effect waves-light"><img class="activator" src=""></div><div class="card-content"><span class="activator card-title grey-text text-darken-4"></span></div><div class="card-action"><a class="blue-text"href="#">Go to project</a></div><div class="card-reveal"><span class="card-title grey-text text-darken-4"></span><p></p><h4>Technologies Used:</h4><ul class="technologies-used"></ul><h4>Role: </h4><p></p></div></div>');
    renderArtAndDoodles('<div class="card sticky-action"><div class="card-image waves-block waves-effect waves-light"><img class="activator" src=""></div><div class="card-content"><span class="activator card-title grey-text text-darken-4"></span></div><div class="card-action"><a class="blue-text"href="#">View doodle</a></div><div class="card-reveal"><span class="card-title grey-text text-darken-4"></span><p></p><h4>Technologies Used:</h4><ul class="technologies-used"></ul></div></div>');
    // httpGetAsync("/navbar.html", renderAcademicProjects);
}

async function renderProjects(url) {
    const res = await fetch("/projects.JSON");
    console.log(res);
}


function renderLongTermProjects(element) {
    var longTermProjectsList = document.querySelector(".long-term-projects");
    var numRows = Math.ceil(projects.longTermProjects.length/3);
    for(var i=0; i<numRows; i++) {
        var row = document.createElement("div");
        row.classList.add("row");
        for(var j=0; j<3; j++) {
            if(projects.longTermProjects.length==0) break;
            var current = projects.longTermProjects.pop();
            var projectElement = document.createElement("div");
            projectElement.classList.add("col", "s12", "m4");
            projectElement.innerHTML = element;
            // Now, we want to edit the html of the element
            var baseURL = "/projects/long-term-projects/";
            projectElement.children[0].children[0].children[0].src = baseURL+current.imageURL;
            projectElement.children[0].children[1].children[0].innerHTML = current.name+"<i class='material-icons right'>more_vert</i>";
            projectElement.children[0].children[2].children[0].href = current.url;
            projectElement.children[0].children[3].children[0].innerHTML = current.name+"<i class='material-icons right'>close</i>"
            projectElement.children[0].children[3].children[1].innerHTML = current.desc;
            while(current.technologiesUsed.length!=0){
                var techElement = document.createElement("li");
                techElement.innerText = current.technologiesUsed.pop();
                projectElement.children[0].children[3].children[3].appendChild(techElement);
            }
            projectElement.children[0].children[3].children[5].innerText = current.role;
            // And now it is ready to insert
            row.appendChild(projectElement);
        }
        longTermProjectsList.appendChild(row);
    }
}

function renderArtAndDoodles(element) {
    var artAndDoodlesList = document.querySelector(".art-and-doodles");
    var numRows = Math.ceil(projects.artAndDoodles.length/3);
    for(var i=0; i<numRows; i++) {
        var row = document.createElement("div");
        row.classList.add("row");
        for(var j=0; j<3; j++) {
            if(projects.artAndDoodles.length==0) break;
            var current = projects.artAndDoodles.pop();
            var doodleElement = document.createElement("div");
            doodleElement.classList.add("col", "s12", "m4");
            doodleElement.innerHTML = element;
            // Now, we want to edit the html of the element
            var baseURL = "/projects/art-and-doodles/"+current.url+"/";
            doodleElement.children[0].children[0].children[0].src = baseURL+current.imageURL;
            doodleElement.children[0].children[1].children[0].innerHTML = current.name+"<i class='material-icons right'>more_vert</i>";
            doodleElement.children[0].children[2].children[0].href = baseURL;
            doodleElement.children[0].children[3].children[0].innerHTML = current.name+"<i class='material-icons right'>close</i>"
            doodleElement.children[0].children[3].children[1].innerHTML = current.desc;
            while(current.technologiesUsed.length!=0){
                var techElement = document.createElement("li");
                techElement.innerText = current.technologiesUsed.pop();
                doodleElement.children[0].children[3].children[3].appendChild(techElement);
            }
            // And now it is ready to insert
            row.appendChild(doodleElement);
        }
        artAndDoodlesList.appendChild(row);
    }
}

function renderAcademicProjects(res) {
    // we know have a project element, let's insert them into the doc
    console.log("academic projects");
}


// function renderItems(res) {
//     // Insert the requested navbar html into the navbar element
//     document.querySelector("header").innerHTML = res;

//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, {});

//     // // the header is now ready to be manipulated and have event listeners
//     // // adds event listeners for a "page change" and performs one accordingly
//     // var links = document.querySelectorAll("a[data-page]");
//     // for(var i=0; i<links.length; i++) {
//     //     links[i].addEventListener('click', function(e){
//     //         e.preventDefault();
//     //         var link = e.target;
//     //         if(e.target.classList[0] == "inside") {
//     //             link = link.parentElement;
//     //         }
//     //         // if the link is part of the side menu
//     //         if(link.parentElement.parentElement.classList[0]=="sidenav"){
//     //             // remove active class from all items
//     //             var menuItems = document.querySelectorAll("a[data-page]");
//     //             for (var j=0; j<menuItems.length; j++) {
//     //                 menuItems[j].classList.remove("active");
//     //             }
//     //             // apply active class to current link
//     //             link.classList.add("active");
//     //         }
//     //         link = link.getAttribute("data-page");
//     //         if(link!=null) {
//     //             changePage(link);
//     //         } 
//     //     });
//     // }

// }