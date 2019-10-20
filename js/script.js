$(document).ready(function () {

    var scrollLink = $('.scroll');

    //  S C R O L L   S M O O T H
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    //  H I G H L I G H T   A C T I V E   L I N K
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top

            if (sectionOffset <= scrollbarLocation) {
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            }
        })

        if (scrollbarLocation >= 50) {
            $('.logo').addClass('mini-logo');
            $('.scrollDown').addClass('scrollDown-dissapear');
        } else {
            $('.logo').removeClass('mini-logo');
            $('.scrollDown').removeClass('scrollDown-dissapear');
        }
    })


    //  M O B I L E   N A V
    var hamburger = document.querySelector("#hamburger");
    console.log(hamburger);
    var mobileNav = document.getElementById("mobile-nav");
    console.log(mobileNav);
    var exit = document.getElementById("exit");
    console.log(exit);

    function openMobileNav() {
        mobileNav.style.display = "block";
        exit.style.visibility = "visible";
        hamburger.style.visibility = "hidden";
    }

    function closeMobileNav() {
        mobileNav.style.display = "none";
        exit.style.visibility = "hidden";
        hamburger.style.visibility = "visible";
    }

    hamburger.addEventListener('click', openMobileNav);
    exit.addEventListener('click', closeMobileNav);


})

