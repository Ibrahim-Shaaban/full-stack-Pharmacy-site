function add() {
    $('#btn').click(function(e) {
        var id = document.getElementById("Pharmacy_Id").value ;
        
         var pharmacyName = document.getElementById("Pharmacy_Name").value ;

         var city = document.getElementById("City").value ;
         
          var streetName = document.getElementById("Street_Name").value ;
          
           var pharmacyPhone = document.getElementById("Pharmacy_Phone").value ;
             
             var form = document.getElementById('form') ;
             
             
            var valid = form.checkValidity() ;
            
            
            if (valid == true) {
                e.preventDefault() ;
                 $.ajax({type:"POST" ,
        data: {
            Pharmacy_Id : id ,
            Pharmacy_Name :pharmacyName,
            City : city,
            Street_Name :streetName ,
            Pharmacy_Phone :pharmacyPhone ,
            
            
            
        },
        dataType:'json',

        
         url: "php/pharmacy.php?action=post" , success:function(result){
            window.location.href = "pharmacy.html" ; 
             
            


        
}});
            }
        
        
    }) ;
}