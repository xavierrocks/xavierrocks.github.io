$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  $('.logo').css({
    'transform' : 'translate(0, '+ wScroll /2 +'%)'
  });

  $('.back-bird').css({
    'transform' : 'translate(0, '+ wScroll /4 +'%)'
  });

  $('.fore-bird').css({
    'transform' : 'translate(0, -'+ wScroll /40 +'%)'
  });

  if (wScroll > $('.clothes-pics').offset().top -($(window).height()/1.2)) {

    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
      $('.clothes-pics figure').eq(i).addClass('showing');
    }, 150 * (i+1));
    });

  }

});
