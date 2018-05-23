function add() {
    $('#btn').click(function(e) {
        
        var ssn = document.getElementById("Ssn").value ;
        
         var firstName = document.getElementById("First_Name").value ;

         var middleName = document.getElementById("Middle_Name").value ;
         
          var lastName = document.getElementById("Last_Name").value ;
          
           var address = document.getElementById("Address").value ;
           
            
             var drugSensitivity = document.getElementById("Drug_Sensitivity").value ;

             var birthDate = document.getElementById("Date_Of_Birth").value ;

             var gender = document.getElementById("Gender").value ;
             
             var form = document.getElementById('form') ;
             
             
            var valid = form.checkValidity() ;
            
            
            if (valid == true) {
                e.preventDefault() ;
                console.log(ssn , address , firstName , lastName , drugSensitivity , birthDate , gender) ;
                 $.ajax({type:"POST" ,
        data: {
            Ssn : ssn ,
            First_Name :firstName,
            Middle_Name : middleName,
            Last_Name :lastName ,
            Address :address ,
            Drug_Sensitivity :drugSensitivity,
            Date_Of_Birth :birthDate ,
            Gender :gender ,
            
            
            
        },
        dataType:'json',

        
         url: "php/patient.php?action=post" , success:function(result){
            window.location.href = "patient.html" ; 
             
            


        
}});
            }
        
        
    }) ;
}