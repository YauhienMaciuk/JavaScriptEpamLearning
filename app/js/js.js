function UserInfo(name){
	var regexpVerifyUserName = /[^A-Za-z]/;
	regexpVerifyUserName.test(name) === true ? alert("Name must contain only letters") : 
	name.split("").length < 3 || name.split("").length > 20 ? alert("Name must contain from 3 to 20 letters") : this.name = name;
}

function UserFullInfo(name, email, telephone, comment){
	var bindUserInfo = UserInfo.bind(this);
	bindUserInfo(name);
	var regexpVerifyEmail = /[@]/;
	regexpVerifyEmail.test(email) === false ? alert("email must contain '@'") : this.email = email;
	var regexpVerifyTelephoneNumber = /^\d/;
	regexpVerifyTelephoneNumber.test(telephone) === true ? alert("Telephone number must contain only numbers") : this.telephone = telephone; 
	comment.split("").length > 200 ? alert("Comment must not contain more than 200 symbols") : this.comment = comment;
}

UserFullInfo.prototype = Object.create(UserInfo.prototype);
UserFullInfo.prototype.constructor = UserFullInfo;

function addUserInfo(){
	var name = document.getElementById("userName").value;
	var email = document.getElementById("email").value;
	var telephone = document.getElementById("telephone").value;
	var comment = document.getElementById("comment").value;
	var userInfo = new UserFullInfo(name, email, telephone, comment);
	alert(userInfo.name + " " + userInfo.email + " " + userInfo.telephone + " " + userInfo.comment)
}

function addTimerToCleanForm(){
	var time = document.getElementById("timeForCleanUp").value;
	setTimeout(cleanUpFormOfRegistration(), new Number(time));
}

function cleanUpFormOfRegistration(){
	var aa = document.getElementById("userName").innerHTML = "Yauheni";
	document.getElementById("email").innerHTML = "";
	document.getElementById("telephone").innerHTML = "";
	document.getElementById("comment").innerHTML = "";	
}