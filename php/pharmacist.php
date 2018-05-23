<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hema";

header('Content-Type: application/json');
/*if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header("Access-Control-Allow-Origin: *");
   header('Access-Control-Allow-Credentials: true');    
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); 
}*/

// Create connection
$conn = new mysqli($servername, $username, $password , $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}



switch($_GET["action"]) {
    case  "get":
    $sql = "SELECT * FROM pharmacist";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        for ($set = array (); $row = $result->fetch_assoc(); $set[] = $row);
     print(json_encode($set));
    } else {
        echo "0 results";
    }

    break ;

    case "post" :
    print(json_encode($_POST));
    $sql = "INSERT INTO pharmacist (Pharmacist_Id ,First_Name,Middle_Name, Last_Name, Salary , Years_Experience , Pharmacy_Id) VALUES ( '".$_POST["Pharmacist_Id"]."' ,'".$_POST["First_Name"]."' , '".$_POST["Middle_Name"]."' , '".$_POST["Last_Name"]."' , '".$_POST["Salary"] ."', '".$_POST["Years_Experience"]."'  , '".$_POST["Pharmacy_Id"]."')";

    if ($conn->query($sql) === TRUE) {
        /*echo "New record created successfully";
        echo("[]") ;*/
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    break ;

    case "put" :
    print(json_encode($_POST));

    $sql = "update pharmacist set Pharmacist_Id='".$_POST["Pharmacist_Id"]."' ,  First_Name='".$_POST["First_Name"]."' ,Middle_Name='".$_POST["Middle_Name"]."' , Last_Name='".$_POST["Last_Name"]."' , Salary='".$_POST["Salary"]."' , Years_Experience='".$_POST["Years_Experience"]."' , Pharmacy_Id='".$_POST["Pharmacy_Id"]."' where Pharmacist_Id='".$_POST["Pharmacist_Id"]."' "  ;
    if ($conn->query($sql) === TRUE) {
        /*echo "New record created successfully";
        echo("[]") ;*/
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    break ;

    case "delete" :
    $sql = "delete from pharmacist where Pharmacist_Id='".$_GET["Pharmacist_Id"]."'" ;
    if ($conn->query($sql) === TRUE) {
        /*echo "New record created successfully";
        echo("[]") ;*/
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    break ;

    case "search" :
    $sql = "SELECT * from pharmacist WHERE First_Name like '%".$_GET["First_Name"]."%'" ;
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        for ($set = array (); $row = $result->fetch_assoc(); $set[] = $row);
     print(json_encode($set));
    } else {
        echo ("[]");
    }
    break ;

}

$conn->close();
?> 