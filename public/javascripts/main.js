

function clicked() {
	
	var user = document.getElementById('username');
	var pass = document.getElementById('password');

	var coruser = "assim";
	var corpass = 'hanifa';

	if(user.value == coruser) {


		if(pass.value == corpass) {

			document.location.href="index1.html";	

		} else {

			window.alert("Incorrect username or password!");
		}
	} else {

			window.alert("Incorrect username or password!");
	}
}
function Logout() {
	
	window.alert("Disconnect !");
	document.location.href="index.html";
}


function payerr() {
    
    window.alert("Vous devez être connecté pour payer");
    document.location.href="login.html";
}

function payer() {
	
	window.alert("Payment OK !");
	document.location.href="index.html";
}







