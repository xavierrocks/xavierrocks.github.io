function bindEvent(e, eventName, callback) {
    if(e.addEventListener) // new browsers
        e.addEventListener(eventName, callback, false);
    else if(e.attachEvent) // IE
        e.attachEvent('on'+ eventName, callback);
};

bindEvent(document.body, 'scroll', function(e) {
    document.body.scrollLeft = 0;
});