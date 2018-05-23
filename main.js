$(document).ready(function(){
    $("form").animate({top:'150px'},2200);
    $("form").animate({height:'210px'},800);
    $("form").animate({width:'400px',borderRadius:'20px'},800);
    $("h2").fadeIn(7000);
    $(".name").fadeIn(6000);
    $(".pass").fadeIn(6000);
    $("button").fadeIn(6000 , function(){
      var messege1 = document.getElementById('messege') ;
          errorsCounter = JSON.parse(localStorage.error)[0].errors ,
          Go =  document.getElementById('go');

      if(errorsCounter == 5)
      {
        messege1.innerHTML = 'every time you reload the page you will wait for 1 minute -_-';
        Go.disabled = true ;
        setTimeout(function(){
          messege1.innerHTML = 'Now you can login ya beeh';
          Go.disabled = false ;
          localStorage.error = JSON.stringify([{errors:0}]) ;
          counter = 0 ; 
        },6000);


      }



    });
});

var Go =  document.getElementById('go');

var counter = 0 ,
    errorsCounter = 0 ;



Go.onclick =function(e){
    
    var userName =document.getElementById('username').value,
    passWord = document.getElementById('password').value,
    messege1 = document.getElementById('messege'),
    form = document.getElementById('login'),
    validity =form.checkValidity();
    
    if(validity === true){
		 if( userName === 'admin' && passWord === '123'){
          e.preventDefault();
          messege1.innerHTML = 'Thank you doctor for your login';
	      setTimeout(function(){window.location.href='tables.html';},1500);
       }
       else
       {
        e.preventDefault(); 
        counter ++ ;
        localStorage.error = JSON.stringify([{errors:counter}]) ;
        errorsCounter = JSON.parse(localStorage.error)[0].errors ;
        if(errorsCounter == 5)
        {
          messege1.innerHTML = 'You must wait for 5 minutes';
          Go.disabled = true ;
          setTimeout(function(){
            messege1.innerHTML = 'Now you can login ya beeh';
            Go.disabled = false ;
            localStorage.error = JSON.stringify([{errors:0}]) ;
            counter = 0 ; 
          },6000);


        }
        else
        {
          if (userName !== 'admin' && passWord !== '123'){
            messege1.innerHTML = 'your username and password are not correct';
            document.getElementById("username").value = "";
           document.getElementById("password").value = "";
           }
           else if (userName !== 'admin'){
             messege1.innerHTML = 'your username is not correct';
             document.getElementById("username").value = "";
           }
           else if (passWord !== '123'){
             messege1.innerHTML = 'your password is not correct';
             document.getElementById("password").value = "";
           }
        }
        


       }
       
       
    }
};
