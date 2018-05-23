function edit () {
    $("#edit").click(function(e){
        e.preventDefault(); 
        
        var ssn = document.getElementById("Ssn").value ;
        
         var firstName = document.getElementById("First_Name").value ;

         var middleName = document.getElementById("Middle_Name").value ;
         
          var lastName = document.getElementById("Last_Name").value ;
          
           var address = document.getElementById("Address").value ;
           
            
             var drugSensitivity = document.getElementById("Drug_Sensitivity").value ;

             var birthDate = document.getElementById("Date_Of_Birth").value ;

             var gender = document.getElementById("Gender").value ;

             console.log(lastName) ;
             
             var form = document.getElementById('form') ;

             var valid = form.checkValidity() ;

            if (valid == true) {
                e.preventDefault();
                
                
                
                $.ajax({type:"POST" ,
					data:{
						Ssn : ssn ,
                        First_Name :firstName,
                        Middle_Name : middleName,
                        Last_Name :lastName ,
                        Address :address ,
                        Drug_Sensitivity :drugSensitivity,
                        Date_Of_Birth :birthDate ,
                        Gender :gender ,
					},
                    dataType:'jsonp',
                   
				 	url: "php/patient.php?action=put" ,error:function(){
                         window.location.href = "patient.html" ;
 

					
            }});
                
            }

    }) ;

    var Id =getValue('id');

    console.log(Id) ; 

    
    // find object in array
    var array = JSON.parse(localStorage.get) ;

    var result = $.grep(array, function(e){ return e.Ssn == Id; });

    var obj = result[0];

    console.log(obj)  ;

    

    var ssn = document.getElementById("Ssn") ;
        
         var firstName = document.getElementById("First_Name") ;

         var middleName = document.getElementById("Middle_Name") ;
         
          var lastName = document.getElementById("Last_Name") ;
          
           var address = document.getElementById("Address") ;
           
            
             var drugSensitivity = document.getElementById("Drug_Sensitivity") ;

             var birthDate = document.getElementById("Date_Of_Birth") ;

             var gender = document.getElementById("Gender") ;

             ssn.value = obj.Ssn ;
    firstName.value = obj.First_Name ;
    middleName.value = obj.Middle_Name ;
    lastName.value = obj.Last_Name ;
    address.value = obj.Address ;
    drugSensitivity.value = obj.Drug_Sensitivity ;
    birthDate.value = obj.Date_Of_Birth ;
    gender.value = obj.Gender ;


    
           
            
             

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



}