function edit () {
    $("#edit").click(function(e){
        e.preventDefault(); 
        var id = document.getElementById("Company_Id").value ;
        
         var name = document.getElementById("Company_Name").value ;

         var city = document.getElementById("City").value ;
         
          var stretName = document.getElementById("Street_Name").value ;
        
            
            var form = document.getElementById('form') ;
            
            
           var valid = form.checkValidity() ;

            if (valid == true) {
                
                $.ajax({type:"POST" ,
					data:{
						Company_Id : id ,
                        Company_Name :name,
                        City : city,
                        Street_Name :stretName ,
					},
                    dataType:'jsonp',
                   
				 	url: "php/company.php?action=put" ,error:function(){
                         window.location.href = "company.html" ;
 

					
            }});
                
            }

    }) ;

    var Id =getValue('id');

    console.log(Id) ; 

    
    // find object in array
    var array = JSON.parse(localStorage.get) ;

    var result = $.grep(array, function(e){ return e.Company_Id == Id; });

    var obj = result[0];

    console.log(obj)  ;

    var id = document.getElementById("Company_Id") ;
        
         var name = document.getElementById("Company_Name") ;

         var city = document.getElementById("City") ;
         
          var stretName = document.getElementById("Street_Name") ;


            id.value = obj.Company_Id ;
            name.value = obj.Company_Name ;
            city.value = obj.City ;
            stretName.value = obj.Street_Name ;


    
           
            
             

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