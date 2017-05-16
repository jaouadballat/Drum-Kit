function playSound(e){
	var audio = document.querySelector("audio[data-key='"+e.keyCode+"']");
	if(!audio)return;
	audio.currentTime = 0;
	audio.play();
	var key = document.querySelector("div[data-key='"+e.keyCode+"']");
	key.classList.add('playing');
	
}


window.addEventListener("keydown", playSound);
window.addEventListener("keyup", function(e){
	var keys = document.querySelectorAll(".key");
	for(var i=0; i<keys.length;i++){
		if(keys[i].classList.contains("playing")){
			keys[i].classList.remove('playing');
		}		
	}
});

