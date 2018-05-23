


// delete
function delet(index) {
    $.ajax({method:"GET" , url: "php/patient_treating.php?action=delete&id=" + index,error:function(){
        window.location.href = "patient_treating.html" ;
				
    }});
}

// delete
function edit(index ) {
    window.location.href ="editTreating.html?id="+index ;
   
}
function get (){
	$(document).ready(function(){
        $('#add').click(function (){
			window.location.href ='add_treating.html';
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

		



		
		
	    
        var tableBody =$('#treating');
        
        $.ajax({method:"GET" , url: "php/patient_treating.php?action=get",  success: function(result){
            localStorage.get=JSON.stringify(result);
		//var data=JSON.parse(localStorage.get);
        	for (var i =0; i <result.length ; i++){
				tableBody.append("<tr><td>"+result[i].Ssn+"</td><td>"+result[i].Doctor_Id+"</td><td>"+result[i].Patient_Name+"</td><td>"+result[i].Drug_Sensitivity+"</td><td>"+result[i].Doctor_Name+"</td><td>"+result[i].Doctor_Speciality+ "</td><td> <button class='btn btn-danger' onclick='delet("+result[i].id +" )'>delete</button> "+"<button class='btn btn-success' onclick= 'edit("+result[i].id+")'>edit</button> "+"</td></tr>");

				
			}
		
            
        }});
	    
	});
}



