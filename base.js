document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {scrollOffset: 25});
    elems = document.querySelectorAll('.sidenav');
    instances = M.Sidenav.init(elems, {});
    var links = document.querySelectorAll("a.sideItem");
    for(var i=0; i<links.length; i++) {
        links[i].addEventListener('click', function(e){
            M.Sidenav.getInstance(document.querySelector(".sidenav")).close();
        });
    }
    elems = document.querySelectorAll('.collapsible');
    instances = M.Collapsible.init(elems, {});
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
    xmlHttp.open("GET", "/" + base + "/main.html", true); // true for asynchronous 

    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var newMain = xmlHttp.responseText;
            var parser = new DOMParser();
            var doc = parser.parseFromString(newMain, "text/html").body;
            var main = document.getElementsByTagName("main")[0];
            main.innerHTML = "";
            for(var i = 0; i<doc.childNodes.length; i++) {
                main.appendChild(doc.childNodes[i]);
            }
            // check if nav menu is popped out for mobile, close it
            if(window.innerWidth <= 992) {
                M.Sidenav.getInstance(document.querySelector(".sidenav")).close();
            }

            // now that the main content is changed, we can change the other assets
            // So far, the custom css styling for pages will always be the eighth index
            changeCSS("/" + base + "/css/styles.css", 8);
            // the custom JS will also always be the second index
            changeJS("/" + base + "/js/index.js", 2);
        }
    }
}