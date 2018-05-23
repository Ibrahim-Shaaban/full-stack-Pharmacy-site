$(document).ready(function() {


    //write here 
    var PharmacistId = $("#Pharmacist_Id") ;
    $.ajax({method:"GET" , url: "php/pharmacist.php?action=get",  success: function(result){
        
        $.each(result, function() {
            PharmacistId.append($("<option />").val(this.Pharmacist_Id).text(this.First_Name+ " " +this.Middle_Name + " "+ this.Last_Name));
        });

    
        
    }});
    var doctorId = $("#Medicine_Id") ;
    
    $.ajax({method:"GET" , url: "php/medicine.php?action=get",  success: function(result){
        $.each(result, function() {
            doctorId.append($("<option />").val(this.Medicine_Id).text(this.Medicine_Trade_Name));
        });
    
        
    }});
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
            Pharmacist_Id : PharmacistId ,
            Medicine_Id :doctorID,
            Price : price,
            Date : date,
            Discount : discount
            
            
        },
        dataType:'json',

        
         url: "php/pharmacy_sells.php?action=post" , success:function(result){
            window.location.href = "pharmacy_sells.html" ; 
             
            


        
}});
            }
        
        
    }) ;
});