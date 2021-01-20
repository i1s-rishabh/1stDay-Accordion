$(document).ready(function(){

    // slideDown the active class's panel
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

    $(".accordion > .accordion-item").click(function(){
        //for remove the siblings
        $(this).siblings().removeClass("is-active").children(".accordion-panel").slideUp();
        //To enable the toggle mode
        $(this).toggleClass("is-active").children(".accordion-panel").slideToggle();
    });
});