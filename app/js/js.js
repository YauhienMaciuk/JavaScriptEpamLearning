var nameNode = document.getElementById("userName");
var emailNode = document.getElementById("email");
var telephoneNode = document.getElementById("telephone");
var commentNode = document.getElementById("comment");
var timeForCleanUpNode = document.getElementById("timeForCleanUp");

function UserInfo(name, email, telephone, comment){

	var spanNode = document.createElement("span");

	var regexpVerifyUserName = /[^A-Za-z]/;
	regexpVerifyUserName.test(name) ? document.getElementById("incorrectName").appendChild(spanNode.appendChild(document.createTextNode("Name must contain only letters")))
	: name.length < 3 || name.length > 20 ? document.getElementById("incorrectName").appendChild(spanNode.appendChild(document.createTextNode("Name must contain from 3 to 20 letters"))) 
	: this.name = name;

	var regexpVerifyEmail = /[@]/;
	regexpVerifyEmail.test(email) === false ? document.getElementById("incorrectEmail").appendChild(spanNode.appendChild(document.createTextNode("email must contain '@'"))) 
	: this.email = email;

	var regexpVerifyTelephoneNumber = /^\d/;
	regexpVerifyTelephoneNumber.test(telephone) === true ? document.getElementById("incorrectTelephone").appendChild(spanNode.appendChild(document.createTextNode("Telephone number must contain only numbers"))) 
	: this.telephone = telephone; 

	comment.length > 200 ? document.getElementById("incorrectComment").appendChild(spanNode.appendChild(document.createTextNode("Comment must not contain more than 200 symbols"))) 
	: this.comment = comment;
}

function addUserInfo(){
	var name = nameNode.value;
	var email = emailNode.value;
	var telephone = telephoneNode.value;
	var comment = commentNode.value;
	var userInfo = new UserInfo(name, email, telephone, comment);
	alert(userInfo.name + " " + userInfo.email + " " + userInfo.telephone + " " + userInfo.comment)
}

function addTimerToCleanForm(){
	var time = timeForCleanUpNode.value;
	setTimeout(cleanUpFormOfRegistration, parseInt(time));
}

function cleanUpFormOfRegistration(){
	nameNode.value = "";
	emailNode.value = "";
	telephoneNode.value = "";
	commentNode.value = "";
	timeForCleanUpNode.value = "";
}