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




function httpGetSync(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}


function renderItems(res) {
    // Insert the requested navbar html into the navbar element
    document.querySelector("header").innerHTML = res;

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    // the header is now ready to be manipulated and have event listeners
    // adds event listeners for a "page change" and performs one accordingly
    var links = document.querySelectorAll("a[data-page]");
    for(var i=0; i<links.length; i++) {
        links[i].addEventListener('click', function(e){
            e.preventDefault();
            var link = e.target;
            if(e.target.classList[0] == "inside") {
                link = link.parentElement;
            }
            link = link.getAttribute("data-page");
            if(link!=null) {
                changePage(link);
            } 
        });
    }

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


function changePage(base) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://xavierrocks.github.io/" + base + "/main.html", true); // true for asynchronous 
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var newMain = xmlHttp.responseText;
            document.getElementsByTagName("main")[0].innerHTML = newMain;

            // now that the main content is changed, we can change the other assets
            // So far, the custom css styling for pages will always be the eighth index
            changeCSS("https://xavierrocks.github.io/" + base + "/css/styles.css", 8);
            // the custom JS will also always be the second index
            changeJS("https://xavierrocks.github.io/" + base + "/js/index.js", 2);
        }
    }
}