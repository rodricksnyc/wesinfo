import 'core-js/stable'
$(document).ready(function () {

	// 
	// $('.carousel').on('slid.bs.carousel', function () {
	// 	var carouselData = $(this).data('bs.carousel')
	//
	// 	var currentIndex = $(this).find('.active-p').index() + 1
	//
	// 	$('.sliderBlock').removeClass('active-p').eq(currentIndex).addClass('active-p')
	// })
	//
	//
	//


	for (var j in block.blocks) {
		$('.popularR').append(
			`<div class="col-lg-2 col-md-6 col-sm-12 col-xs-12"><div class="smallBubble d-flex flex-column align-items-center">${block.blocks[j].icon}<p class="blue">${block.blocks[j].title}</p></div></div>`
		)
	}
})

import { block } from './config.js'
