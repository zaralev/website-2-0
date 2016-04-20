$(document).ready(function() {

    // $(window).scroll(function(event) {
    //     var scroll = $(window).scrollTop();
    //     if (scroll > 4) {
    //         $('#nav').hide();
    //     }
    // });
    
    var prev = 0;
    var $window = $(window);
    var nav = $('.nav');

    $window.on('scroll', function(){
      var scrollTop = $window.scrollTop();
      nav.toggleClass('hidden', scrollTop > prev);
      prev = scrollTop;
    });

});
