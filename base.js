document.addEventListener('DOMContentLoaded', function () {
    // Render the navbar and other Materialize elements through here
    httpGetAsync("https://xavierrocks.github.io/navbar.html", renderItems);
    // Render the footer through here
    httpGetAsync("https://xavierrocks.github.io/footer.html", renderFooter);

});



function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function renderItems(res) {
    // Insert the requested navbar html into the navbar element
    document.querySelector("header").innerHTML = res;

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
    instances[0].close()
    
}

function renderFooter(res) {
    document.querySelector("footer").innerHTML = res;
}