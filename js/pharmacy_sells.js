


// delete
function delet(index) {
    $.ajax({method:"GET" , url: "php/pharmacy_sells.php?action=delete&id=" + index,error:function(){
        window.location.href = "pharmacy_sells.html" ;
				
    }});
}

// delete
function edit(index ) {
    window.location.href ="editPharmacySells.html?id="+index ;
   
}
function get (){
	$(document).ready(function(){
        $('#add').click(function (){
			window.location.href ='addPharmacySells.html';
        });

      

        
        
         
		
		


		



		
		
	    
        var tableBody =$('#pharmacy-sells');
        
        $.ajax({method:"GET" , url: "php/pharmacy_sells.php?action=get",  success: function(result){
            localStorage.get=JSON.stringify(result);
		
        	for (var i =0; i <result.length ; i++){
				tableBody.append("<tr><td>"+result[i].Medicine_Price+ "</td><td>"+result[i].Medicine_Trade_Name+"</td><td>"+result[i].Date+"</td><td>"+result[i].Discount+"</td><td>"+result[i].Pharmacist_Name+"</td><td>"+result[i].Salary+"</td><td>"+result[i].Pharmacy_Name+ "</td><td> <button class='btn btn-danger' onclick='delet("+result[i].id +" )'>delete</button> "+"<button class='btn btn-success' onclick= 'edit("+result[i].id+")'>edit</button> "+"</td></tr>");

				
			}
		
            
        }});
	    
	});
}



