$(document).ready(function() {

    var prev = 0;
    var $window = $(window);
    var nav = $('.nav');

    $window.on('scroll', function() {
        var scrollTop = $window.scrollTop();
        nav.toggleClass('hidden', scrollTop > prev);
        prev = scrollTop;
    });

    $(".block:first-child").mouseover(function(){
      $(this).css("background-size","40em");
    });
    $(".block:first-child").mouseout(function(){
      $(this).css("background-size","20em");
    });

    $(".block:nth-child(2)").mouseover(function(){
      $(this).css("background-size","50em");
    });
    $(".block:nth-child(2)").mouseout(function(){
      $(this).css("background-size","30em");
    });

    $(".block:nth-child(3)").mouseover(function(){
      $(this).css("background-size","20em");
    });
    $(".block:nth-child(3)").mouseout(function(){
      $(this).css("background-size","13em");
    });

    $(".block:nth-child(4)").mouseover(function(){
      $(this).css("background-size","40em");
    });
    $(".block:nth-child(4)").mouseout(function(){
      $(this).css("background-size","25em");
    });

    $(".block:nth-child(5)").mouseover(function(){
      $(this).css("background-size","30em");
    });
    $(".block:nth-child(5)").mouseout(function(){
      $(this).css("background-size","18em");
    });

    $(".block:nth-child(6)").mouseover(function(){
      $(this).css("background-size","50em");
    });
    $(".block:nth-child(6)").mouseout(function(){
      $(this).css("background-size","30em");
    });

});
