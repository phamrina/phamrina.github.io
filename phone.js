var shown = false;
function showhidePhone(){
	if (shown){
		document.getElementById('phone').innerHTML = "Show my LinkedIn";
		shown = false;
	}else {
		var myphone = "<a href='https://www.linkedin.com" + 
					     "/in/nickphamrider'>https://www.linkedin.com" + 
					     "/in/nickphamrider</a>";
		document.getElementById('phone').innerHTML = myphone;
		shown = true;
	}
}