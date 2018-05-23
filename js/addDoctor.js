function add() {
    $('#btn').click(function(e) {
        
        var id = document.getElementById("Doctor_Id").value ;
        
         var firstName = document.getElementById("First_Name").value ;

         var middleName = document.getElementById("Middle_Name").value ;
         
          var lastName = document.getElementById("Last_Name").value ;
          
           var yearsExp = document.getElementById("Years_Experinace").value ;
           
            
             var spec = document.getElementById("Speciality").value ;
             
             var form = document.getElementById('form') ;
             
             
            var valid = form.checkValidity() ;
            
            
            if (valid == true) {
                e.preventDefault() ;
                 $.ajax({type:"POST" ,
        data: {
            Doctor_Id : id ,
            First_Name :firstName,
            Middle_Name : middleName,
            Last_Name :lastName ,
            Years_Experience :yearsExp ,
            Speciality :spec
            
            
        },
        dataType:'json',

        
         url: "php/doctor.php?action=post" , success:function(result){
            window.location.href = "doctor.html" ; 
             
            


        
}});
            }
        
        
    }) ;
}