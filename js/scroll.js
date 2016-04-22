$(document).ready(function() {

    var prev = 0;
    var $window = $(window);
    var nav = $('.nav');

    $window.on('scroll', function() {
        var scrollTop = $window.scrollTop();
        nav.toggleClass('hidden', scrollTop > prev);
        prev = scrollTop;
    });


    // checkSize();
    //   $(window).resize(checkSize);
    //
    //   function checkSize() {
    //       if ($(".media").css("color") == "red") {
    //           console.log("function went through! nav should work!");
    //           $window.on('scroll', function() {
    //               var scrollTop = $window.scrollTop();
    //               nav.toggleClass('hidden', scrollTop > prev);
    //               prev = scrollTop;
    //           });
    //
    //       } else {
    //         var color = $(".media").css('color');
    //         console.log(color);
    //           console.log("nav shouldn't hide");
    //       }
    //   }

});
