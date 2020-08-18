$(document).ready(function() {


  $('.carousel').on('slid.bs.carousel', function () {
    var carouselData = $(this).data('bs.carousel');


  	var currentIndex = $(this).find(".active").index();


    $('.result p')
      .removeClass('active-p')
      .eq(currentIndex)
      .addClass('active-p');
  });




  //create and append teacher divs with objects

var block = {"blocks": [{
	"title": 'Forms',
	"icon": '<i class="fal fa-file-alt blue"></i>'
},

{
  "title": 'Schedules',
	"icon": "<i class='fas fa-file-export darkBlue'></i>"
},

{
  "title": 'Policies',
	"icon": "<i class='fas fa-file-export darkBlue'></i>"
},

{
  "title": 'On Campus',
	"icon": "<i class='fas fa-file-export darkBlue'></i>"
},

{
  "title": 'Proposal Central',
	"icon": "<i class='fas fa-file-export darkBlue'></i>"
},
{
  "title": 'Institutional  Review Board',
	"icon": "<i class='fas fa-file-export darkBlue'></i>"
},
{
  "title": 'Training',
	"icon": "<i class='fas fa-file-export darkBlue'></i>"
},
{
  "title": 'Benefits',
	"icon": "<i class='fas fa-file-export darkBlue'></i>"
},

{
  "title": 'Workday',
	"icon": "<i class='fas fa-file-export darkBlue'></i>"
}



]

};

for(var j in block.blocks) {

$('.popularR').append(`<div class="col-lg-2 col-md-6 col-sm-12 col-xs-12"><div class="smallBubble d-flex flex-column align-items-center">${block.blocks[j].icon}<p class="blue">${block.blocks[j].title}</p></div></div>`)

}



























})
