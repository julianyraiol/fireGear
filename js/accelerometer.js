var fixed = 2;
var limit = 4;
var textbox = document.querySelector('#textbox');
var value = 0;
var clear;

function startCount(){
	
	if(value === limit){
		window.removeEventListener('devicemotion', onDeviceMotion);
		textbox.innerHTML = "Start";
		stopCount();
	}	
	
	else{
		textbox.innerHTML = value;
		value+=1;
		window.addEventListener('devicemotion', onDeviceMotion);
		clear = setTimeout(function(){ startCount() }, 1000);
	}	
}

function stopCount(){
	clearTimeout(clear);
	value = 0;
}

function onDeviceMotion(event){
	
    var x = event.acceleration.x;
    var y = event.acceleration.y;
    var z = event.acceleration.z;
    
	//var x = "1";
	//var y = "2";
	//var z = "3";
    send_db(x, y, z);
	//textstatus.innerHTML = x;
}

textbox.addEventListener("click", function(){
	startCount();
	
});


