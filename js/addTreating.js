$(document).ready(function() {


    //write here 
    var ssn = $("#Ssn") ;
    $.ajax({method:"GET" , url: "php/patient.php?action=get",  success: function(result){
        
        $.each(result, function() {
            ssn.append($("<option />").val(this.Ssn).text(this.First_Name+ " " +this.Middle_Name + " "+ this.Last_Name));
        });

    
        
    }});
    var doctorId = $("#Doctor_Id") ;
    
    $.ajax({method:"GET" , url: "php/doctor.php?action=get",  success: function(result){
       /* for (var i =0; i <result.length ; i++){
            doctorId.append("<option value='"+result[i].Doctor_Id+ "'>" +result[i].First_Name+ "_" +result[i].Middle_Name + "_"+ result[i].Last_Name+ "</option>");

            
        }*/
        $.each(result, function() {
            doctorId.append($("<option />").val(this.Doctor_Id).text(this.First_Name+ " " +this.Middle_Name + " "+ this.Last_Name));
        });
    
        
    }});
    $('#btn').click(function(e) {
        var ssn = document.getElementById("Ssn").value ;
        
         var doctorID = document.getElementById("Doctor_Id").value ;

         
             
             var form = document.getElementById('form') ;
             
             
            var valid = form.checkValidity() ;
            
            
            if (valid == true) {
                e.preventDefault() ;
                 $.ajax({type:"POST" ,
        data: {
            Ssn : ssn ,
            Doctor_Id :doctorID,
            
            
            
        },
        dataType:'json',

        
         url: "php/patient_treating.php?action=post" , success:function(result){
            window.location.href = "patient_treating.html" ; 
             
            


        
}});
            }
        
        
    }) ;
});