function edit () {
    $("#edit").click(function(e){
        e.preventDefault(); 
        var id = document.getElementById("Pharmacist_ID").value ;
        
         var firstName = document.getElementById("First_Name").value ;

         var middleName = document.getElementById("Middle_Name").value ;
         
          var lastName = document.getElementById("Last_Name").value ;
          
           var yearsExp = document.getElementById("Years_Experinace").value ;
           
            
             var salary = document.getElementById("Salary").value ;
             var pharmacyId = document.getElementById("Pharmacy_ID").value ;
            
            var form = document.getElementById('form') ;
            
            
           var valid = form.checkValidity() ;

            if (valid == true) {
                
                $.ajax({type:"POST" ,
					data:{
						Pharmacist_Id : id ,
                        First_Name :firstName,
                        Middle_Name : middleName,
                        Last_Name :lastName ,
                        Years_Experience :yearsExp ,
                        Salary :salary,
                        Pharmacy_Id : pharmacyId
					},
                    dataType:'jsonp',
                   
				 	url: "php/pharmacist.php?action=put" ,error:function(){
                         window.location.href = "pharmacist.html" ;
 

					
            }});
                
            }

    }) ;

    var Id =getValue('id');

    console.log(Id) ; 

    
    // find object in array
    var array = JSON.parse(localStorage.get) ;

    var result = $.grep(array, function(e){ return e.Pharmacist_Id == Id; });

    var obj = result[0];

    console.log(obj)  ;

    var id = document.getElementById("Pharmacist_ID") ;
        
    var firstName = document.getElementById("First_Name") ;

    var middleName = document.getElementById("Middle_Name") ;
    
     var lastName = document.getElementById("Last_Name") ;
     
      var yearsExp = document.getElementById("Years_Experinace") ;
      
       
        var salary = document.getElementById("Salary") ;
        var pharmacyId = document.getElementById("Pharmacy_ID") ;


            id.value = obj.Pharmacist_Id ;
            firstName.value = obj.First_Name ;
            middleName.value = obj.Middle_Name ;
            lastName.value = obj.Last_Name ;
            yearsExp.value = obj.Years_Experience ;
            salary.value = obj.Salary ;
            pharmacyId.value = obj.Pharmacy_Id ;


    
           
            
             

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