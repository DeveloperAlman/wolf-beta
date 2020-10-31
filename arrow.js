// // ===== Scroll to Top ==== 
// $(window).scroll(function () {
//     if ($(this).scrollTop() >= 350) { // If page is scrolled more than 50px
//         $('#return-to-top').fadeIn(1000); // Fade in the arrow
//     } else {
//         $('#return-to-top').fadeOut(1000); // Else fade out the arrow
//     }
// });
// $('#return-to-top').click(function () { // When arrow is clicked
//     $('body,html').animate({
//         scrollTop: 0 // Scroll to top of body
//     }, 1000);
// });

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 650);
});