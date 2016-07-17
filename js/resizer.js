/* Resizer to make divs (with background)... */ 
$(document).ready(function(){
	/* keep images squared */
	$(".squared").height($(".squared").width());
	$(window).resize(function(){
	$(".squared").height($(".squared").width());
	});
});