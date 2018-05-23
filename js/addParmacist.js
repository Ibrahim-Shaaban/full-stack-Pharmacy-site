function add() {
    $('#btn').click(function(e) {
        
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
                e.preventDefault() ;
                 $.ajax({type:"POST" ,
        data: {
            Pharmacist_Id : id ,
            First_Name :firstName,
            Middle_Name : middleName,
            Last_Name :lastName ,
            Years_Experience :yearsExp ,
            Salary :salary,
            Pharmacy_Id : pharmacyId
            
            
        },
        dataType:'json',

        
         url: "php/pharmacist.php?action=post" , success:function(result){
            window.location.href = "pharmacist.html" ; 
             
            


        
}});
            }
        
        
    }) ;
}