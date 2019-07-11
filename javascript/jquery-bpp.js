
$(function() {
	
	$("#subNav li").hover(
		function(){$(this).addClass('on');},
		function(){$(this).removeClass('on');}
	);
	
	$(".standards #subNav li.on").hover(
		function(){$(this).addClass('on');},
		function(){$(this).addClass('on');}
	);
	$(".standards #subNav li.on li").hover(
		function(){$(this).removeClass('on');},
		function(){$(this).removeClass('on');}
	);

})