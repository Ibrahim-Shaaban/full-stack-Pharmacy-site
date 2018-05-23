


// delete
function delet(index) {
    $.ajax({method:"GET" , url: "php/pharmacy.php?action=delete&Pharmacy_Id=" + index,error:function(){
        window.location.href = "pharmacy.html" ;
				
    }});
}

// edit
function edit(index) {
    window.location.href ="editPharmacy.html?id="+index ;
}
function get (){
	$(document).ready(function(){
        $('#add').click(function (){
			window.location.href ='addPharmacy.html';
        });


        $('#search').click(function (){
            
            var name = document.getElementById("name").value  ;
            

            var tableBody =$('#pharmacy');
        
        $.ajax({method:"GET" , url: "php/pharmacy.php?action=search&Pharmacy_Name=" + name,  success: function(result){
            tableBody.html("") ;
            
        	for (var i =0; i <result.length ; i++){
				tableBody.append("<tr><td>"+result[i].Pharmacy_Id+"</td><td>"+result[i].Pharmacy_Name+"</td><td>"+result[i].City+"</td><td>"+result[i].Street_Name+"</td><td>"+result[i].Pharmacy_Phone+  "</td><td> <button class='btn btn-danger' onclick='delet("+result[i].Pharmacy_Id + ")'>delete</button> "+"<button class='btn btn-success' onclick= 'edit(" + result[i].Pharmacy_Id + ")'>edit</button> "+"</td></tr>");

				
			}
		
            
        }});
        });	    
        var tableBody =$('#pharmacy');
        
        $.ajax({method:"GET" , url: "php/pharmacy.php?action=get",  success: function(result){
            localStorage.get=JSON.stringify(result);
        	for (var i =0; i <result.length ; i++){
				tableBody.append("<tr><td>"+result[i].Pharmacy_Id+"</td><td>"+result[i].Pharmacy_Name+"</td><td>"+result[i].City+"</td><td>"+result[i].Street_Name+"</td><td>"+result[i].Pharmacy_Phone+  "</td><td> <button class='btn btn-danger' onclick='delet("+result[i].Pharmacy_Id + ")'>delete</button> "+"<button class='btn btn-success' onclick= 'edit(" + result[i].Pharmacy_Id + ")'>edit</button> "+"</td></tr>");

				
			}
		
            
        }});
	    
	});
}



