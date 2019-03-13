document.addEventListener('DOMContentLoaded', function () {
    // Render the navbar and other Materialize elements through here
    httpGetAsync("https://xavierrocks.github.io/navbar.html", renderItems);
    // Render the footer through here
    httpGetAsync("https://xavierrocks.github.io/footer.html", renderFooter);

    var links = document.querySelectorAll("a[data-page]");
    console.log(links);

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


function changeCSS(cssFile, cssLinkIndex) {
    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}


function changeJS(jsFile, jsLinkIndex) {
    var oldsrc = document.getElementsByTagName("script").item(jsLinkIndex);
    var newsrc = document.createElement("script");
    newsrc.setAttribute("src", jsFile);

    document.getElementsByTagName("body").item(0).replaceChild(newsrc, oldsrc);
}