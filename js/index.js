var projects;

document.addEventListener('DOMContentLoaded', function () {
    httpGetAsync("https://xavierrocks.github.io/projects.JSON", renderJSON)
});


function renderJSON(res) {
    projects = JSON.parse(res);
    renderLongTermProjects('<div class="card sticky-action"><div class="card-image waves-block waves-effect waves-light"><img class="activator" src=""></div><div class="card-content"><span class="activator card-title grey-text text-darken-4"></span></div><div class="card-action"><a class="blue-text"href="#">Go to project</a></div><div class="card-reveal"><span class="card-title grey-text text-darken-4"></span><p></p></div></div>');
    // httpGetAsync("https://xavierrocks.github.io/navbar.html", renderArtAndDoodles);
    // httpGetAsync("https://xavierrocks.github.io/navbar.html", renderAcademicProjects);
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
            projectElement.children[0].children[0].children[0].src = current.imageURL;
            projectElement.children[0].children[1].children[0].innerHTML = current.name+"<i class='material-icons right'>more_vert</i>";
            projectElement.children[0].children[2].children[0].href = current.url;
            projectElement.children[0].children[3].children[0].innerHTML = current.name+"<i class='material-icons right'>close</i>"
            projectElement.children[0].children[3].children[1].innerHTML = current.desc;
            // And now it is ready to insert
            row.appendChild(projectElement);
        }
        longTermProjectsList.appendChild(row);
    }

    // for(var j=0; j<projects.longTermProjects.length; j++){
    //     var current = projects.longTermProjects[j];
    //     var projectElement = document.createElement("li");
    //     projectElement.classList.add("col", "s12", "m4");
    //     projectElement.innerHTML = element;
    //     // Now, we want to edit the html of the element
    //     projectElement.children[0].children[0].children[0].src = current.imageURL;
    //     projectElement.children[0].children[1].children[0].innerHTML = current.name+"<i class='material-icons right'>more_vert</i>";
    //     projectElement.children[0].children[2].children[0].href = current.url;
    //     projectElement.children[0].children[3].children[0].innerHTML = current.name+"<i class='material-icons right'>close</i>"
    //     projectElement.children[0].children[3].children[1].innerHTML = current.desc;
    //     // And now it is ready to insert
    //     longTermProjectsList.appendChild(projectElement);
    // }
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