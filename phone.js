var shown = false;
function showhidePhone(){
	if (shown){
		document.getElementById('phone').innerHTML = "Show my phone number";
		shown = false;
	}else {
		var myphone = "<p>513-400-9741</p>";
		document.getElementById('phone').innerHTML = myphone;
		shown = true;
	}
}