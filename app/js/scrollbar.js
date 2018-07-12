// $(document).ready(function(){
//     $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//       && 
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top+50
//         }, 1000); 

//         // function() {
//         //   // Callback after animation
//         //   // Must change focus!
//         //   var $target = $(target);
//         //   $target.focus();
//         //   if ($target.is(":focus")) { // Checking if the target was focused
//         //     return false;
//         //   } else {
//         //     $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//         //     $target.focus(); // Set focus again
//         //   };
//         // });

//       }
//     };
//     $('a.list-active').removeClass('list-active');
//         $(this).addClass('list-active');
//   });
// });



$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('link-active');
        })
        $(this).addClass('link-active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    var closestElement = $(this).find('section').filter( function() {
        return $(this).offset().top > scrollPosition;      
    }).first();
    $('.scrollbar a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('.scrollbar ul li a').removeClass("list-active"); 
            currentLink.addClass("list-active");
        }
        else{
            currentLink.removeClass("list-active");
        };
        
    });
    newFunction();   

    function newFunction() {
        if (closestElement.hasClass('bgb')) {
            $('.scrollbar ul li a').removeClass('bgw').addClass('bgb');
        }
        else {
            $('.scrollbar ul li a').removeClass('bgb').addClass('bgw');
        }
        ;
    }
}



