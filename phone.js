var shown = false;
function showhidePhone(){
	if (shown){
		document.getElementById('phone').innerHTML = "Show my phone number";
		shown = false;
	}else {
		var myphone = "<a href='mailto:513" + 
					     "-400-9741'>513" + "-400-9741</a>";
		document.getElementById('phone').innerHTML = myphone;
		shown = true;
	}
}