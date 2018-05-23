function edit () {
    $("#edit").click(function(e){
        e.preventDefault(); 
        var id = document.getElementById("Doctor_Id").value ;
        
        var firstName = document.getElementById("First_Name").value ;

        var middleName = document.getElementById("Middle_Name").value ;
        
         var lastName = document.getElementById("Last_Name").value ;
         
          var yearsExp = document.getElementById("Years_Experinace").value ;
          
           
            var spec = document.getElementById("Speciality").value ;
            
            var form = document.getElementById('form') ;
            
            
           var valid = form.checkValidity() ;

            if (valid == true) {
                
                $.ajax({type:"POST" ,
					data:{
						Doctor_Id : id ,
                        First_Name :firstName,
                        Middle_Name : middleName,
                        Last_Name :lastName ,
                        Years_Experience :yearsExp ,
                        Speciality :spec
					},
                    dataType:'jsonp',
                   
				 	url: "php/doctor.php?action=put" ,error:function(){
                         window.location.href = "doctor.html" ;
 

					
            }});
                
            }

    }) ;

    var Id =getValue('id');

    console.log(Id) ; 

    
    // find object in array
    var array = JSON.parse(localStorage.get) ;

    var result = $.grep(array, function(e){ return e.Doctor_Id == Id; });

    var obj = result[0];

    console.log(obj)  ;

    var firstName = document.getElementById("First_Name") ;

        var middleName = document.getElementById("Middle_Name") ;
        
         var lastName = document.getElementById("Last_Name") ;
         
          var yearsExp = document.getElementById("Years_Experinace") ;
          
           
            var spec = document.getElementById("Speciality") ;
            var id = document.getElementById("Doctor_Id") ;


            id.value = obj.Doctor_Id ;
            firstName.value = obj.First_Name ;
            middleName.value = obj.Middle_Name ;
            lastName.value = obj.Last_Name ;
            yearsExp.value = obj.Years_Experience ;
            spec.value = obj.Speciality ;


    
           
            
             

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