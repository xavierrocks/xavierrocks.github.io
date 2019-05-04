var projects;

document.addEventListener('DOMContentLoaded', function () {
    httpGetAsync("https://xavierrocks.github.io/projects.JSON", renderJSON)
});


function renderJSON(res) {
    projects = JSON.parse(res);
    renderLongTermProjects('<div class="card sticky-action"><div class="card-image waves-block waves-effect waves-light"><img class="activator"src="https://dichopter.github.io/binocularLogo.svg"></div><div class="card-content"><span class="activator card-title grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span></div><div class="card-action"><a class="blue-text"href="#">Go to project</a></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span><p>The Dichopter® Project aims to provide the user with hardware and software tools to help them explore dichoptic vision – that is, two eyed or binocular vision where two images are presented to the left and right eye separately. The Dichopter Project allows people to expolore 3D vision and perception of other physics simulations. I enjoyed this project because it required me to learn how to optimize web pages when dealing with lots of content.</div></div>');
    // httpGetAsync("https://xavierrocks.github.io/navbar.html", renderArtAndDoodles);
    // httpGetAsync("https://xavierrocks.github.io/navbar.html", renderAcademicProjects);
}

function renderLongTermProjects(element) {
    // we know have a project element, let's insert them into the doc
    console.log("long term projects");
    var longTermProjectsList = document.querySelector(".long-term-projects");
    for(var i=0; i<projects.longTermProjects.length; i++){
        var current = projects.longTermProjects[i];
        var projectElement = document.createElement("li");
        projectElement.classList.add("col", "s12", "m4");
        projectElement.innerHTML = element;
        // Now, we want to edit the html of the element
        projectElement.children[0].children[0].children[0].src = current.imageURL;
        projectElement.children[0].children[1].children[0].innerHTML = current.name+"<i class='material-icons right'>more_vert</i>";
        projectElement.children[0].children[2].children[0].url = current.url;


        longTermProjectsList.appendChild(projectElement);
    }
}

function renderArtAndDoodles(res) {
    // we know have a project element, let's insert them into the doc
    console.log("art and doodles");
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