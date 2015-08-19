// JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		
		$('#toca').on ("onclick", function(){
			navigator.notification.beep(1);
			navigator.notification.vibrate(100);
});
	},false);//ready device
});//document
