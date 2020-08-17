$(document).ready(function() {


  $('.carousel').on('slid.bs.carousel', function () {
    var carouselData = $(this).data('bs.carousel');


  	var currentIndex = $(this).find(".active").index();


    $('.result p')
      .removeClass('active-p')
      .eq(currentIndex)
      .addClass('active-p');
  });



























})
