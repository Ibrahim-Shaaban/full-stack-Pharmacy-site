


// delete
function delet(index) {
    $.ajax({method:"GET" , url: "php/medicine.php?action=delete&Medicine_Id=" + index,error:function(){
        window.location.href = "medicine.html" ;
				
    }});
}

// delete
function edit(index) {
    window.location.href ="editMedicine.html?id="+index ;
}
function get (){
	$(document).ready(function(){
        $('#add').click(function (){
			window.location.href ='addMedicine.html';
        });

        

        $('#search').click(function (){
            var medicineTradeName = document.getElementById("Medicine_Trade_Name").value  ;

            var tableBody =$('#medicine');
        
        $.ajax({method:"GET" , url: "php/medicine.php?action=search&Medicine_Trade_Name=" + medicineTradeName,  success: function(result){
            tableBody.html("") ;
        	for (var i =0; i <result.length ; i++){
				tableBody.append("<tr><td>"+result[i].Medicine_Id+"</td><td>"+result[i].Quantity+"</td><td>"+result[i].Cost+"</td><td>"+result[i].Production_Date+"</td><td>"+result[i].Expiry_Date+"</td><td>"+result[i].Medicine_Trade_Name+ "</td><td> <button class='btn btn-danger' onclick='delet("+result[i].Medicine_Id + ")'>delete</button> "+"<button class='btn btn-success' onclick= 'edit(" + result[i].Medicine_Id + ")'>edit</button> "+"</td></tr>");

				
			}
		
            
        }});
        });
        
         
		
		

        // put
       /* $.ajax({type:"POST" ,
					data:{
						Medicine_Id : "1" ,
                        Quantity :50,
                        Cost : 200 ,
                        Production_Date :"2015-5-8" ,
                        Expiry_Date :"2018-9-8" ,
                        Medicine_Trade_Name :"cnvbhfd" ,
					},
                    dataType:'jsonp',
                    headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
				 	url: "php/medicine.php?action=put" ,success:function(){


					
            }});*/
          
        // delete 
       /* $.ajax({method:"GET" , url: "file2.php?action=delete&Medicine_Id=" + 77,success:function(){
				
			}});*/
        // post
       /*$.ajax({type:"POST" ,
        data: {
            Medicine_Id : 6 ,
                        Quantity :50,
                        Cost : 2050 ,
                        Production_Date :"2015-5-8" ,
                        Expiry_Date :"2018-9-8" ,
                        Medicine_Trade_Name :"bynalo" ,
            
        },
        dataType:'jsonp',

        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        },
         url: "php/medicine.php?action=post" ,success:function(result){
             console.log(result) ;
            


        
}});*/

		



		
		
	    
        var tableBody =$('#medicine'); 
        
        $.ajax({method:"GET" , url: "php/medicine.php?action=get",  success: function(result){
            localStorage.get=JSON.stringify(result);
		//var data=JSON.parse(localStorage.get);
        	for (var i =0; i <result.length ; i++){
				tableBody.append("<tr><td>"+result[i].Medicine_Id+"</td><td>"+result[i].Quantity+"</td><td>"+result[i].Cost+"</td><td>"+result[i].Production_Date+"</td><td>"+result[i].Expiry_Date+"</td><td>"+result[i].Medicine_Trade_Name+ "</td><td> <button class='btn btn-danger' onclick='delet("+result[i].Medicine_Id + ")'>delete</button> "+"<button class='btn btn-success' onclick= 'edit(" + result[i].Medicine_Id + ")'>edit</button> "+"</td></tr>");

				
			}
		
            
        }});
	    
	});
}



