


// delete
function delet(index) {
    $.ajax({method:"GET" , url: "php/patient.php?action=delete&Ssn=" + index,error:function(){
        window.location.href = "patient.html" ;
				
    }});
}

// delete
function edit(index) {
    window.location.href ="editPatient.html?id="+index ;
}
function get (){
	$(document).ready(function(){
        $('#add').click(function (){
			window.location.href ='addPatient.html';
        });

       /* $('#edit').click(function (){
			window.location.href ='addMedicine.html';
        });*/

        $('#search').click(function (){
            
            var name = document.getElementById("firstName").value  ;
            

            var tableBody =$('#patient');
        
        $.ajax({method:"GET" , url: "php/patient.php?action=search&First_Name=" + name,  success: function(result){
            tableBody.html("") ;
            
        	for (var i =0; i <result.length ; i++){
				tableBody.append("<tr><td>"+result[i].Ssn+"</td><td>"+result[i].First_Name+"</td><td>"+result[i].Middle_Name+"</td><td>"+result[i].Last_Name+"</td><td>"+result[i].Address+"</td><td>"+result[i].Drug_Sensitivity+ "</td><td>"+result[i].Date_Of_Birth+"</td><td>"+result[i].Gender+ "</td><td> <button class='btn btn-danger' onclick='delet("+result[i].Ssn + ")'>delete</button> "+"<button class='btn btn-success' onclick= 'edit(" + result[i].Ssn + ")'>edit</button> "+"</td></tr>");

				
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
				 	url: "php/patient.php?action=put" ,success:function(){


					
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
         url: "php/patient.php?action=post" ,success:function(result){
             console.log(result) ;
            


        
}});*/

		



		
		
	    
        var tableBody =$('#patient');
        
        $.ajax({method:"GET" , url: "php/patient.php?action=get",  success: function(result){
            localStorage.get=JSON.stringify(result);
		//var data=JSON.parse(localStorage.get);
        	for (var i =0; i <result.length ; i++){
				tableBody.append("<tr><td>"+result[i].Ssn+"</td><td>"+result[i].First_Name+"</td><td>"+result[i].Middle_Name+"</td><td>"+result[i].Last_Name+"</td><td>"+result[i].Address+"</td><td>"+result[i].Drug_Sensitivity+ "</td><td>"+result[i].Date_Of_Birth+"</td><td>"+result[i].Gender+ "</td><td> <button class='btn btn-danger' onclick='delet("+result[i].Ssn + ")'>delete</button> "+"<button class='btn btn-success' onclick= 'edit(" + result[i].Ssn + ")'>edit</button> "+"</td></tr>");

				
			}
		
            
        }});
	    
	});
}



