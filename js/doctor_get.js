


// delete
function delet(index) {
    $.ajax({method:"GET" , url: "php/doctor.php?action=delete&Doctor_Id=" + index,error:function(){
        window.location.href = "doctor.html" ;
				
    }});
}

// delete
function edit(index) {
    window.location.href ="editDoctor.html?id="+index ;
}
function get (){
	$(document).ready(function(){
        $('#add').click(function (){
			window.location.href ='addDoctor.html';
        });


        $('#search').click(function (){
            var firstName = document.getElementById("name").value  ;

            var tableBody =$('#doctor');
        
        $.ajax({method:"GET" , url: "php/doctor.php?action=search&First_Name=" + firstName,  success: function(result){
            tableBody.html("") ;
        	for (var i =0; i <result.length ; i++){
				tableBody.append("<tr><td>"+result[i].Doctor_Id+"</td><td>"+result[i].First_Name+"</td><td>"+result[i].Middle_Name+"</td><td>"+result[i].Last_Name+"</td><td>"+result[i].Years_Experience+"</td><td>"+result[i].Speciality+ "</td><td> <button class='btn btn-danger' onclick='delet("+result[i].Doctor_Id + ")'>delete</button> "+"<button class='btn btn-success' onclick= 'edit(" + result[i].Doctor_Id + ")'>edit</button> "+"</td></tr>");

				
			}
		
            
        }});
        });  
        var tableBody =$('#doctor');
        
        $.ajax({method:"GET" , url: "php/doctor.php?action=get",  success: function(result){
            localStorage.get=JSON.stringify(result);
		//var data=JSON.parse(localStorage.get);
        	for (var i =0; i <result.length ; i++){
				tableBody.append("<tr><td>"+result[i].Doctor_Id+"</td><td>"+result[i].First_Name+"</td><td>"+result[i].Middle_Name+"</td><td>"+result[i].Last_Name+"</td><td>"+result[i].Years_Experience+"</td><td>"+result[i].Speciality+ "</td><td> <button class='btn btn-danger' onclick='delet("+result[i].Doctor_Id + ")'>delete</button> "+"<button class='btn btn-success' onclick= 'edit(" + result[i].Doctor_Id + ")'>edit</button> "+"</td></tr>");

				
			}
		
            
        }});
	    
	});
}



