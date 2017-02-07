function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
    console.log("done loading");
}

// Usage:

preload([
    './img/background_github.png',
    './img/background_linkedin.png',
    './img/background_email.png',
    './img/background_me.gif'
]);
