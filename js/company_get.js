


// delete
function delet(index) {
    $.ajax({method:"GET" , url: "php/company.php?action=delete&Company_Id=" + index,error:function(){
        window.location.href = "company.html" ;
				
    }});
}

// delete
function edit(index) {
    window.location.href ="editCompany.html?id="+index ;
}
function get (){
	$(document).ready(function(){
        $('#add').click(function (){
			window.location.href ='addCompany.html';
        });

       

        $('#search').click(function (){
            
            var id = document.getElementById("id").value  ;
            

            var tableBody =$('#company');
        
        $.ajax({method:"GET" , url: "php/company.php?action=search&Company_Id=" + id,  success: function(result){
            tableBody.html("") ;
            
        	for (var i =0; i <result.length ; i++){
				tableBody.append("<tr><td>"+result[i].Company_Id+"</td><td>"+result[i].Company_Name+"</td><td>"+result[i].City+"</td><td>"+result[i].Street_Name+ "</td><td> <button class='btn btn-danger' onclick='delet("+result[i].Company_Id + ")'>delete</button> "+"<button class='btn btn-success' onclick= 'edit(" + result[i].Company_Id + ")'>edit</button> "+"</td></tr>");

				
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
				 	url: "php/company.php?action=put" ,success:function(){


					
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
         url: "php/company.php?action=post" ,success:function(result){
             console.log(result) ;
            


        
}});*/

		



		
		
	    
        var tableBody =$('#company');
        
        $.ajax({method:"GET" , url: "php/company.php?action=get",  success: function(result){
            localStorage.get=JSON.stringify(result);
		//var data=JSON.parse(localStorage.get);
        	for (var i =0; i <result.length ; i++){
				tableBody.append("<tr><td>"+result[i].Company_Id+"</td><td>"+result[i].Company_Name+"</td><td>"+result[i].City+"</td><td>"+result[i].Street_Name+ "</td><td> <button class='btn btn-danger' onclick='delet("+result[i].Company_Id + ")'>delete</button> "+"<button class='btn btn-success' onclick= 'edit(" + result[i].Company_Id + ")'>edit</button> "+"</td></tr>");

				
			}
		
            
        }});
	    
	});
}



