function add() {
    $('#btn').click(function(e) {
        
        var id = document.getElementById("Company_Id").value ;
        
         var name = document.getElementById("Company_Name").value ;

         var city = document.getElementById("City").value ;
         
          var stretName = document.getElementById("Street_Name").value ;
             
             var form = document.getElementById('form') ;
             
             
            var valid = form.checkValidity() ;
            
            
            if (valid == true) {
                e.preventDefault() ;
                 $.ajax({type:"POST" ,
        data: {
            Company_Id : id ,
            Company_Name :name,
            City : city,
            Street_Name :stretName ,
            
            
        },
        dataType:'json',

        
         url: "php/company.php?action=post" , success:function(result){
            window.location.href = "company.html" ; 
             
            


        
}});
            }
        
        
    }) ;
}