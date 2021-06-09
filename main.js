let pulse = false;

particlesJS.load('particles-js', 'particles.json');

$(window).on("resize", function() {
    var width = $(window).width();
    if (width > 992) {
        $("#navbarNav").removeClass("items-expand");
    }
    if (width < 992 && pulse) {
        $("#navbarNav").addClass("items-expand");
    }
});


$("#navbar-toggle").on("click", function() {

    pulse = (pulse) ? false : true;

    $("#particles-js").removeClass('aos-animate');
    $("#navbarNav").removeClass('aos-animate');

    $("#particles-js").toggleClass("particles-expand");
    particlesJS.load('particles-js', 'particles.json');

    $("#navbarNav").toggleClass("items-expand");
    $("#navbarNav").toggleClass("invisible");

    setTimeout(function() {
        $("#navbarNav").addClass('aos-animate');
    }, 550);

    setTimeout(function() {
        $("#particles-js").addClass('aos-animate');
    }, 1000);


});

AOS.init();