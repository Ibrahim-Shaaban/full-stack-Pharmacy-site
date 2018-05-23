

function login(){
	var button =document.getElementById('btn');

	button.onclick =function func1(e){

		//	

		var name =document.getElementById('user').value,

			mail =document.getElementById('email').value,


			pass =document.getElementById('password').value,

			time =new Date(),

			currentTime =time.toLocaleString();

		

		

		var	form =document.getElementById('form-login'),

			validMessage =document.getElementById('valid-message'),

			validity =form.checkValidity();

			

			if (validity==true){
				if (name =='admin'){
					if (pass == '123'){
						e.preventDefault();
						window.location.href="users.html";

					}

					

				}

				else{



				
					/*window.location="users.html?name="+name+"&password="+pass+"&email="+mail+"&time="+currentTime;*/
					validMessage.innerHTML ='Thank you' +" "+name.toUpperCase()+" " +"for your login";


					setTimeout(function(){
		                window.location.href="users.html?name="+name+"&password="+pass+"&email="+mail+"&time="+currentTime;
		                 // The URL that will be redirected too.
		            }, 3000);	
		            
		            e.preventDefault();

		            }

				

				
				

				

				 
				

				}



				
	          
			else {

				if (name.length==0 &&pass.length==0 ){
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

				}/*
				
				else if(pass.length==0){
					validMessage.innerHTML ="Please input your password";
				}*/

				
				
			
				
				
			}
	}
};


function users(){
	var nameData =getValue('name'),

		passData =getValue('password'),

		mailData =getValue('email'),

		timeData =getValue('time'),

		mainTable =document.getElementById('main-table'),

		message =document.getElementById('show');

		tableBody =document.getElementById('user-information');

	

	



	/*if (nameData !=""&& passData !=""&&mailData !=""){
		
			
			window.location = window.location.href.split("?")[0];
		
		
	}*/


		



		

		function getValue(varname)
	                {
	                    var url = window.location.href;
	                    var qparts = url.split("?");

	                    if (qparts.length == 1)
	                    {
	                        return "";
	                    }
	                    else{
	                        var query = qparts[1];
	                        var vars = query.split("&");
	                        var value = "";
	                        for (i=0;i<vars.length;i++)
	                        {
	                            var parts = vars[i].split("=");
	                            if (parts[0] == varname)
	                            {
	                                value = parts[1];
	                                break;
	                            }
	                        }
	                        value = unescape(value);

	                        // Convert "+"s to " "s
	                        value.replace(/\+/g," ");
	                        return value;
	                    }

	                }


	 
	var	info =function (){
		this.users =new Array();
	};

	var User =function (username,password,mail,time){
		this.name =username;
		this.pass =password;
		this.mail =mail;
		this.time =time;

	};

	var currentTable =null;
	currentTable =JSON.parse(localStorage.getItem('info'));

	if (!currentTable){
		createEmptyStorage();
	}


	updateCurrentTable();

	currentTable.addUser =function(user){
		currentTable.users.push(user);
			if (user.name !=""&& user.pass !=""&&user.mail !=""){
				if (user.name != 'admin' && user.pass != '123'){
					localStorage.setItem('info',JSON.stringify(currentTable));
					mainTable.style.display ='none';

					/*window.location.href ='login.html';*/

				}

				

		
			}
	};


	done(nameData,passData,mailData,timeData);


	




	function done(name,pass,email,time){
		var user =new User(name,pass,email,time);
		currentTable.addUser(user);
		updateCurrentTable();
		



	}

	function createEmptyStorage(){
		localStorage.clear();
		localStorage.setItem('info',JSON.stringify(new info()));
		currentTable =JSON.parse(localStorage.getItem('info'));
	}


	function updateCurrentTable(){
		tableBody.innerHTML ='';
		for (var i =0 ;i <currentTable.users.length ;i++){
			if (currentTable.users[i].name !=""&& currentTable.users[i].pass !=""&&currentTable.users[i].mail !=""){
				
					var rowElement =document.createElement('tr');
					rowElement.className ='table-row';
					tableBody.appendChild(rowElement);

					var nameElement =document.createElement('td'),

						passElement =document.createElement('td'),

						mailElement =document.createElement('td'),

						idElement =document.createElement('td');

						timeElement =document.createElement('td');

					

					idElement.className ='id-data';

					idElement.innerHTML =1+parseInt(i);

					

					nameElement.innerHTML =currentTable.users[i].name;

					currentName =nameElement.innerHTML; //new 
					passElement.innerHTML =currentTable.users[i].pass;

					mailElement.innerHTML =currentTable.users[i].mail;

					timeElement.innerHTML =currentTable.users[i].time;



					rowElement.appendChild (idElement);

					rowElement.appendChild (nameElement);

					rowElement.appendChild (passElement);

					rowElement.appendChild (mailElement);

					rowElement.appendChild (timeElement);

				}

			




}
			}
			



		}



		


		









	



