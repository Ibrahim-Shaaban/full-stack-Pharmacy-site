$(document).ready(function() {
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

            var id = getValue("id") ;
            var price = document.getElementById("Price") ;
        
         var date = document.getElementById("Date") ;
         var discount = document.getElementById("Discount") ;
            $.ajax({method:"GET" , url: "php/pharmacy_sells.php?action=search&id=" + id,  success: function(result){
                price.value = result[0].Price ;
                date.value = result[0].Date ;
                discount.value = result[0].Discount ;
                var PharmacistId = $("#Pharmacist_Id") ;
                $.ajax({method:"GET" , url: "php/pharmacist.php?action=get",  success: function(result1){
                    
                    
                    $.each(result1, function() {
                        if(this.Pharmacist_Id==result[0].Pharmacist_Id)
                        PharmacistId.append($("<option />").val(this.Pharmacist_Id).text(this.First_Name+ " " +this.Middle_Name + " "+ this.Last_Name).attr("selected",true));
                        else
                        PharmacistId.append($("<option />").val(this.Pharmacist_Id).text(this.First_Name+ " " +this.Middle_Name + " "+ this.Last_Name));
                    });
            
                
                    
                }});
                var doctorId = $("#Medicine_Id") ;
                
                $.ajax({method:"GET" , url: "php/medicine.php?action=get",  success: function(result1){
                  
                    $.each(result1, function() {
                        if(this.Medicine_Id==result[0].Medicine_Id)
                        doctorId.append($("<option />").val(this.Medicine_Id).text(this.Medicine_Trade_Name).attr("selected",true));
                    
                        else
                        doctorId.append($("<option />").val(this.Medicine_Id).text(this.Medicine_Trade_Name));
                    });
             
                    
                }});
            
                
            }});

    //write here 
    
    $('#btn').click(function(e) {
        var PharmacistId = document.getElementById("Pharmacist_Id").value ;
        
         var doctorID = document.getElementById("Medicine_Id").value ;
         var price = document.getElementById("Price").value ;
        
         var date = document.getElementById("Date").value ;
         var discount = document.getElementById("Discount").value ;

         
             
             var form = document.getElementById('form') ;
             
             
            var valid = form.checkValidity() ;
            
            
            if (valid == true) {
                e.preventDefault() ;
                 $.ajax({type:"POST" ,
        data: {
            id:id,
            Pharmacist_Id : PharmacistId ,
            Medicine_Id :doctorID,
            Price : price,
            Date : date,
            Discount : discount
            
            
            
        },
        dataType:'json',

        
         url: "php/pharmacy_sells.php?action=put" , success:function(result){
            window.location.href = "pharmacy_sells.html" ; 
                
            


        
}});
            }
        
        
    }) ;
});