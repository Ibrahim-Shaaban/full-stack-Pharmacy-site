function add() {
    $('#btn').click(function(e) {
        var id = document.getElementById("Medicine_Id").value ;
        
         var quantity = document.getElementById("Quantity").value ;

         var cost = document.getElementById("Cost").value ;
         
          var eDate = document.getElementById("Expiry_Date").value ;
          
           var pDate = document.getElementById("Production_Date").value ;
           
            
             var medicineTradeName = document.getElementById("Medicine_Trade_Name").value ;
             
             var form = document.getElementById('form') ;
             
             
            var valid = form.checkValidity() ;
            
            
            if (valid == true) {
                e.preventDefault() ;
                 $.ajax({type:"POST" ,
        data: {
            Medicine_Id : id ,
            Quantity :quantity,
            Cost : cost,
            Production_Date :pDate ,
            Expiry_Date :eDate ,
            Medicine_Trade_Name :medicineTradeName
            
            
        },
        dataType:'json',

        
         url: "php/medicine.php?action=post" , success:function(result){
             console.log(eDate) ;
            window.location.href = "medicine.html" ; 
             
            


        
}});
            }
        
        
    }) ;
}