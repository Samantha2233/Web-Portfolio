$(document).ready(function () {
    var scrollLink = $('.scroll');

    //  S M O O T H   S C R O L L I N G
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 500)
    })


    //  S W I T C H   A C T I V E   L I N K   &   M A K E   L O G O   S M A L L E R 
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        if (scrollbarLocation >= 100) {
            $('.logo').addClass('mini-logo');
        } else {
            $('.logo').removeClass('mini-logo');
        }

        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top

            if (sectionOffset <= scrollbarLocation) {
                $(this).addClass('active');
                $(this).siblings().removeClass('active', 500);
            }
        })
    })





    //  T O G G L E   M O B I L E   M E N U
    $('.hamburger').click(function () {
        $('.mobile-nav').toggleClass('open-mobile-nav', 500);
    })

})

