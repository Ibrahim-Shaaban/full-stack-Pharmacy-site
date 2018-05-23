var button =document.getElementById('btn');

button.onclick =function func(e){
	e.preventDefault();
	 

	var name =document.getElementById('username').value,


		mail =document.getElementById('email').value,

		sub =document.getElementById('subject').value,

		form =document.getElementById('form-message'),

		validMessage =document.getElementById('valid-message'),

		message =document.getElementById('message').value,

		site =document.getElementById('site').value.toLowerCase(),

		

		validity =form.checkValidity();

		if (validity==true){
			validMessage.innerHTML ='Thank you' +" "+name.toUpperCase()+" " +"for your message"+
			"you will visit the site after 5 seconds";

			setTimeout(function(){
                window.location.href="http://www." +site +".com.eg"; // The URL that will be redirected too.
            }, 5000);

		}
		else {

			if (name.length==0 &&mail.length==0 &&sub.length==0 &&message.length==0){
				validMessage.innerHTML ="Please input the empty fields";
			}

			else if (name.length==0){
				validMessage.innerHTML ="Please input your name";

			}

			else if(mail.length==0){
				validMessage.innerHTML ="Please input your mail";

			}
			else if (mail.indexOf('@')==-1){
				validMessage.innerHTML ="Your email must included the Character '@' ";

			}
			else if(mail.charAt(mail.indexOf('@')+1)==""){
				validMessage.innerHTML ="Please enter a part following '@' in the email field ";

			}
			
			else if(sub.length==0){
				validMessage.innerHTML ="Please input your subject";
			}

			
			else if (message.length==0){
				validMessage.innerHTML ="Please input your message";
			}
			
			
		}








	

};


