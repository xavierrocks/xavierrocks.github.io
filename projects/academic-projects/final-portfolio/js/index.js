document.addEventListener('DOMContentLoaded', function () {
    // Render the navbar and other Materialize elements through here
    httpGetAsync("/navbar.html", renderItems);
    // Render the footer through here
    httpGetAsync("/footer.html", renderFooter);
    var printButton = document.querySelector(".printButton");
    printButton.addEventListener('click', function(){
        window.print();
    });

});


function renderItems(res) {
    // Insert the requested navbar html into the navbar element
    document.querySelector("header").innerHTML = res;

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    // // the header is now ready to be manipulated and have event listeners
    // // adds event listeners for a "page change" and performs one accordingly
    // var links = document.querySelectorAll("a[data-page]");
    // for(var i=0; i<links.length; i++) {
    //     links[i].addEventListener('click', function(e){
    //         e.preventDefault();
    //         var link = e.target;
    //         if(e.target.classList[0] == "inside") {
    //             link = link.parentElement;
    //         }
    //         // if the link is part of the side menu
    //         if(link.parentElement.parentElement.classList[0]=="sidenav"){
    //             // remove active class from all items
    //             var menuItems = document.querySelectorAll("a[data-page]");
    //             for (var j=0; j<menuItems.length; j++) {
    //                 menuItems[j].classList.remove("active");
    //             }
    //             // apply active class to current link
    //             link.classList.add("active");
    //         }
    //         link = link.getAttribute("data-page");
    //         if(link!=null) {
    //             changePage(link);
    //         } 
    //     });
    // }

}

function renderFooter(res) {
    document.querySelector("footer").innerHTML = res;
}