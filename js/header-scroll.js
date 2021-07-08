$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('nav').addClass('bg-trans');
        } else {
            $('nav').removeClass('bg-trans');
        }
    });
});