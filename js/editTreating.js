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
            $.ajax({method:"GET" , url: "php/patient_treating.php?action=search&id=" + id,  success: function(result){
                console.log(result);
                var ssn = $("#Ssn") ;
                $.ajax({method:"GET" , url: "php/patient.php?action=get",  success: function(result1){
                    
                    
                    $.each(result1, function() {
                        if(this.Ssn==result[0].Ssn)
                        ssn.append($("<option />").val(this.Ssn).text(this.First_Name+ " " +this.Middle_Name + " "+ this.Last_Name).attr("selected",true));
                        else
                        ssn.append($("<option />").val(this.Ssn).text(this.First_Name+ " " +this.Middle_Name + " "+ this.Last_Name));
                    });
            
                
                    
                }});
                var doctorId = $("#Doctor_Id") ;
                
                $.ajax({method:"GET" , url: "php/doctor.php?action=get",  success: function(result1){
                  
                    $.each(result1, function() {
                        if(this.Doctor_Id==result[0].Doctor_Id)
                        doctorId.append($("<option />").val(this.Doctor_Id).text(this.First_Name+ " " +this.Middle_Name + " "+ this.Last_Name).attr("selected",true));
                    
                        else
                        doctorId.append($("<option />").val(this.Doctor_Id).text(this.First_Name+ " " +this.Middle_Name + " "+ this.Last_Name));
                    });
             
                    
                }});
            
                
            }});

    //write here 
    
    $('#btn').click(function(e) {
        var ssn = document.getElementById("Ssn").value ;
        
         var doctorID = document.getElementById("Doctor_Id").value ;

         
             
             var form = document.getElementById('form') ;
             
             
            var valid = form.checkValidity() ;
            
            
            if (valid == true) {
                e.preventDefault() ;
                 $.ajax({type:"POST" ,
        data: {
            id:id,
            Ssn : ssn ,
            Doctor_Id :doctorID,
            
            
            
        },
        dataType:'json',

        
         url: "php/patient_treating.php?action=put" , success:function(result){
            window.location.href = "patient_treating.html" ; 
                
            


        
}});
            }
        
        
    }) ;
});