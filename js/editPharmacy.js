function edit () {
    $("#edit").click(function(e){
        e.preventDefault(); 
        var id = document.getElementById("Pharmacy_Id").value ;
        
         var pharmacyName = document.getElementById("Pharmacy_Name").value ;

         var city = document.getElementById("City").value ;
         
          var streetName = document.getElementById("Street_Name").value ;
          
           var pharmacyPhone = document.getElementById("Pharmacy_Phone").value ;
           
             
             var form = document.getElementById('form') ;
             
             
            var valid = form.checkValidity() ;

            if (valid == true) {
                e.preventDefault();
                
                $.ajax({type:"POST" ,
					data:{
						Pharmacy_Id : id ,
                        Pharmacy_Name :pharmacyName,
                        City : city,
                        Street_Name :streetName ,
                        Pharmacy_Phone :pharmacyPhone ,
					},
                    dataType:'jsonp',
                   
				 	url: "php/pharmacy.php?action=put" ,error:function(){
                         window.location.href = "pharmacy.html" ;
 

					
            }});
                /*$.ajax({type:"POST" ,
					data:{
						Medicine_Id : id ,
                        Quantity :Quantity,
                        Cost : Cost ,
                        Production_Date :pDate ,
                        Expiry_Date :eDate ,
                        Medicine_Trade_Name :medicineTradeName ,
					},
                    dataType:'jsonp',

                    headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                   
				 	url: "php/medicine.php?action=put" ,success:function(){
                         window.location.href = "medicine.html" ; 


					
            }});*/
            }

    }) ;

    var Id =getValue('id');

    console.log(Id) ; 

    
    // find object in array
    var array = JSON.parse(localStorage.get) ;

    var result = $.grep(array, function(e){ return e.Pharmacy_Id == Id; });

    var obj = result[0];

    console.log(obj)  ;

    

    var id = document.getElementById("Pharmacy_Id") ;
        
         var pharmacyName = document.getElementById("Pharmacy_Name") ;

         var city = document.getElementById("City") ;
         
          var streetName = document.getElementById("Street_Name") ;
          
           var pharmacyPhone = document.getElementById("Pharmacy_Phone") ;

    id.value = obj.Pharmacy_Id ;
    pharmacyName.value = obj.Pharmacy_Name ;
    city.value = obj.City ;
    streetName.value = obj.Street_Name ;
    pharmacyPhone.value = obj.Pharmacy_Phone ;
    


    
           
            
             

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