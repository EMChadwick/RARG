$( document ).ready(function() {
	$("#startButton").click(function() {
		alert( "Oops, there's nothing here" );
	});
	var splashJson = $.getJSON("splash.JSON");
});