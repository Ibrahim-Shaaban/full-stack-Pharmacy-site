function edit () {
    $("#edit").click(function(e){
        e.preventDefault(); 
        var id = document.getElementById("Medicine_Id").value ;

        var quantity = document.getElementById("Quantity").value ;

         var cost = document.getElementById("Cost").value ;
         
          var eDate = document.getElementById("Expiry_Date").value ;
          
           var pDate = document.getElementById("Production_Date").value ;
           
            
             var medicineTradeName = document.getElementById("Medicine_Trade_Name").value ;
             
             var form = document.getElementById('form') ;
             
             
            var valid = form.checkValidity() ;

            if (valid == true) {
                e.preventDefault();
                
                console.log(id) ;

                console.log(quantity) ;

                console.log(cost) ;

                console.log(eDate) ;

                console.log(pDate) ;

                console.log(medicineTradeName) ;
                $.ajax({type:"POST" ,
					data:{
						Medicine_Id : id ,
                        Quantity :quantity,
                        Cost : cost ,
                        Production_Date :pDate ,
                        Expiry_Date :eDate ,
                        Medicine_Trade_Name :medicineTradeName ,
					},
                    dataType:'jsonp',
                   
				 	url: "php/medicine.php?action=put" ,error:function(){
                         window.location.href = "medicine.html" ;
 

					
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

    var result = $.grep(array, function(e){ return e.Medicine_Id == Id; });

    var obj = result[0];

    console.log(obj)  ;

    

    var quan = document.getElementById("Quantity") ;

    var medId = document.getElementById("Medicine_Id") ;

         var medCost = document.getElementById("Cost") ;
         
          var exDate = document.getElementById("Expiry_Date") ;
          
           var proDate = document.getElementById("Production_Date") ;

           var tradeName = document.getElementById("Medicine_Trade_Name") ;

    medId.value = obj.Medicine_Id ;
    quan.value = obj.Quantity ;
    medCost.value = obj.Cost ;
    exDate.value = obj.Expiry_Date ;
    proDate.value = obj.Production_Date ;
    tradeName.value = obj.Medicine_Trade_Name ;


    
           
            
             

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