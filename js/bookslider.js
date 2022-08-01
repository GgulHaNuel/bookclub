$(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= 100) {
            $("#book5_hd").addClass("book5_active");
        } else {
            $("#book5_hd").removeClass("book5_active");
        }
    });

    function scrollNav() {
        if ($(this).scrollTop() >= 100) {
            $("#book5_hd").addClass("book5_active");
        } else {
            $("#book5_hd").removeClass("book5_active");
        }
    }
    scrollNav();

    function getCurrentPos() {
        return window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
    }

    function getBottomPosY(elementId) {
        var element = document.getElementById(elementId);
        var posY = element.offsetTop;
        if (element.offsetParent) {
            posY += element.offsetParent.offsetTop;
        }
        posY += element.offsetHeight;
        return posY;
    }

    function runScroll() {
        var currentPos = getCurrentPos();
        var criticalScrollTop = 100;
        if (currentPos > criticalScrollTop) {
            document.getElementById('book_wrap');
        } else {
            document.getElementById('book_wrap');
        }

        var delta = parseInt($("#membership").css('padding-top')) + 20;
        if (currentPos < getBottomPosY("membership") - delta) {
            selectMenu("membership");
        } else if (currentPos < getBottomPosY("welcome") - delta) {
            selectMenu("welcome");
        } else if (currentPos < getBottomPosY("benefit") - delta) {
            selectMenu("benefit");
        } else if (currentPos < getBottomPosY("special") - delta) {
            selectMenu("special");
        } else if (currentPos < getBottomPosY("premium") - delta) {
            selectMenu("premium");
        } else if (currentPos < getBottomPosY("event") - delta) {
            selectMenu("event");
        } else if (currentPos < getBottomPosY("partnership") - delta) {
            selectMenu("partnership");
        } else if (currentPos < getBottomPosY("done") - delta) {
            selectMenu("done");
        } else if (currentPos < getBottomPosY("gift") - delta) {
            selectMenu("gift");
        } else if (currentPos < getBottomPosY("review") - delta) {
            selectMenu("review");
        } else {
            selectMenu("reaction");
        }
    }

    document.getElementById('book_wrap');
    window.addEventListener('scroll', runScroll);

    $(document).ready(function () {
        $('.book5_nav_box .book5_menu').click(function () {
            $('.book5_nav_box .book5_menu').removeAttr('aria-current');
            $(this).attr('aria-current', true);
        });
    });

    function selectMenu(menuId) {
        if ($("#menu_" + menuId).attr('aria-current')) {
            return;
        }
        $('.book5_nav_box .book5_menu').removeAttr('aria-current');
        $("#menu_" + menuId).attr('aria-current', true);
        document.getElementById("menu_" + menuId).scrollIntoView();
    }

    $('.event_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 1.65,
            }
        }]
    });

    $('.card_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 1.65,
            }
        }]
    });

});