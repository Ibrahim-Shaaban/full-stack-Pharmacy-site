


// delete
function delet(index) {
    $.ajax({method:"GET" , url: "php/pharmacist.php?action=delete&Pharmacist_Id=" + index,error:function(){
        window.location.href = "pharmacist.html" ;
				
    }});
}

// delete
function edit(index) {
    window.location.href ="editPharmacist.html?id="+index ;
}
function get (){
	$(document).ready(function(){
        $('#add').click(function (){
			window.location.href ='addPharmacist.html';
        });

       

        $('#search').click(function (){
            
            var name = document.getElementById("name").value  ;
            

            var tableBody =$('#pharmacist');
        
        $.ajax({method:"GET" , url: "php/pharmacist.php?action=search&First_Name=" + name,  success: function(result){
            tableBody.html("") ;
            
        	for (var i =0; i <result.length ; i++){
				tableBody.append("<tr><td>"+result[i].Pharmacist_Id+"</td><td>"+result[i].First_Name+"</td><td>"+result[i].Middle_Name+"</td><td>"+result[i].Last_Name+"</td><td>"+result[i].Salary+"</td><td>"+result[i].Years_Experience+ "</td><td>"+result[i].Pharmacy_Id+"</td><td> <button class='btn btn-danger' onclick='delet("+result[i].Pharmacist_Id + ")'>delete</button> "+"<button class='btn btn-success' onclick= 'edit(" + result[i].Pharmacist_Id + ")'>edit</button> "+"</td></tr>");

				
			}
		
            
        }});
        });
                var tableBody =$('#pharmacist');
        
        $.ajax({method:"GET" , url: "php/pharmacist.php?action=get",  success: function(result){
            localStorage.get=JSON.stringify(result);
		//var data=JSON.parse(localStorage.get);
        	for (var i =0; i <result.length ; i++){
				tableBody.append("<tr><td>"+result[i].Pharmacist_Id+"</td><td>"+result[i].First_Name+"</td><td>"+result[i].Middle_Name+"</td><td>"+result[i].Last_Name+"</td><td>"+result[i].Salary+"</td><td>"+result[i].Years_Experience+ "</td><td>"+result[i].Pharmacy_Id+"</td><td> <button class='btn btn-danger' onclick='delet("+result[i].Pharmacist_Id + ")'>delete</button> "+"<button class='btn btn-success' onclick= 'edit(" + result[i].Pharmacist_Id + ")'>edit</button> "+"</td></tr>");

				
			}
		
            
        }});
	    
	});
}



