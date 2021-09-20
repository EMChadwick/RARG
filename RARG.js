$( document ).ready(function() {
	$("#startButton").click(function() {
		alert( "Oops, there's nothing here" );
	});
	var splashJson = $.getJSON("splash.JSON", function(splashData){
		$("#splashBanner marquee").html(splashData[0]);
	});
});