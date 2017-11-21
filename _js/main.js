(function(){
	'use strict';
	var images = ['_img/1.jpg','_img/2.jpg','_img/3.jpg'];
	var targetParentName = '.carousel-info';
	var pace = 4;
	var inter;
	var current = 0;
	var hovering = false;

	$(init);

	function init(){
		var $parent = $(targetParentName);
		var $children = $parent.children();
		
		$('.carousel').hover(function() {
			hovering = true;
		}, function() {
			hovering = false;
		});

		inter = setInterval(function(){
			if (hovering != false) {
				return;
			}
			$children.eq(current++).fadeOut(500, function(){
				if(current == $children.length){
					current = 0;
				}
				$children.eq(current).fadeIn();
			});

		}, pace * 1000);
	}
	return {};
}());