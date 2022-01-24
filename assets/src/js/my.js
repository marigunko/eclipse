//LOADER

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}



//MOUSE EFFECT

document.onmousemove = function(e) {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
};



//TEXTAREA

$("textarea").click(function(){
    $("textarea").empty();
 });



//RETURN PREVIOUS PAGE

$(document).ready(function(){
    $('.backLink').click(function(){
        parent.history.back();
        return false;
    });
});



//RETURN PREVIOUS PAGE(SAFARI)

$('a#back').click(function(event){
    event.preventDefault();
});



//PLYR

const player = new Plyr('#player');

player.on('playing', event => {
    $('.page').addClass('dark-theme');
});
player.on('pause', event => {
    $('.page').removeClass('dark-theme');
});



//THEME SWITCHER

let page = document.querySelector('.page-theme');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};
