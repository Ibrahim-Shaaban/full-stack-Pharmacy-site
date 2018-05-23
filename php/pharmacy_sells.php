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

// Create database
/*$sql = "CREATE DATABASE hema";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}*/

// sql to create table
/*$sql = "CREATE TABLE MyGuests (
    Medicine_Id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Quantity VARCHAR(30) NOT NULL,
    Production_Date VARCHAR(30) NOT NULL,
    Expiry_Date VARCHAR(50),
    reg_date TIMESTAMP
    )";
    
    if ($conn->query($sql) === TRUE) {
        echo "Table MyGuests created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }*/

 /*$sql = "INSERT INTO medicine (Quantity, Cost , Production_Date, Expiry_Date , Medicine_Trade_Name)
VALUES (25,  580 , '2012-5-5', '2015-5-6' , 'perofeen');";

$sql .= "INSERT INTO medicine (Quantity, Cost , Production_Date, Expiry_Date , Medicine_Trade_Name)
VALUES (26,  540 , '2014-5-5', '2016-5-6' , 'abeemool');";

$sql .= "INSERT INTO medicine (Quantity, Cost , Production_Date, Expiry_Date , Medicine_Trade_Name)
VALUES (28,  770 , '2016-5-5', '2019-5-6' , 'flomox')";


if ($conn->multi_query($sql) === TRUE) {
    echo "New records created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}*/


/*$stmt = $conn->prepare("INSERT INTO MyGuests (Quantity, Production_Date, Expiry_Date , reg_date) VALUES (?, ?, ? , ?)");
$stmt->bind_param("sss", $Quantity, $Production_Date, $Expiry_Date);

// set parameters and execute
$Quantity = "John";
$Production_Date = "Doe";
$Expiry_Date = "john@example.com";
$stmt->execute();

$Quantity = "Mary";
$Production_Date = "Moe";
$Expiry_Date = "mary@example.com";
$stmt->execute();

$Quantity = "Julie";
$Production_Date = "Dooley";
$Expiry_Date = "julie@example.com";
$stmt->execute();

echo "New records created successfully";

$stmt->close();*/


/*$sql = "SELECT * FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["Quantity"]. " " . $row["Production_Date"]. "<br>";
    }
} else {
    echo "0 results";
}*/

switch($_GET["action"]) {
    case  "get":
    $sql = "SELECT ps.id , ps.Price Medicine_Price , m.Medicine_Trade_Name  , ps.Date , ps.Discount  , concat(pt.First_Name ,\" \" , pt.Last_Name) as Pharmacist_Name , pt.Salary ,  py.Pharmacy_Name    FROM pharmacy_sells ps
    join medicine m on m.Medicine_Id = ps.Medicine_Id 
    join pharmacist pt on pt.Pharmacist_Id = ps.Pharmacist_Id
    join pharmacy py on py.Pharmacy_Id = pt.Pharmacy_Id"  ;
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
    $sql = "INSERT INTO pharmacy_sells (Medicine_Id ,Pharmacist_Id , Price , Date , Discount) VALUES ( '".$_POST["Medicine_Id"]."' ,'".$_POST["Pharmacist_Id"]."' ,'".$_POST["Price"]."' ,'".$_POST["Date"]."' ,'".$_POST["Discount"]."')";

    if ($conn->query($sql) === TRUE) {
        /*echo "New record created successfully";
        echo("[]") ;*/
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    break ;

    case "put" :
    print(json_encode($_POST));

    $sql = "UPDATE pharmacy_sells set Medicine_Id='".$_POST["Medicine_Id"]."' ,  Pharmacist_Id='".$_POST["Pharmacist_Id"]."' ,  Price='".$_POST["Price"]."' ,  Date='".$_POST["Date"]."' ,  Discount='".$_POST["Discount"]."'  WHERE id='".$_POST["id"]."' "  ;
    if ($conn->query($sql) === TRUE) {
        /*echo "New record created successfully";
        echo("[]") ;*/
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    break ;

    case "delete" :
    $sql = "delete from pharmacy_sells where id='".$_GET["id"]."'" ;
    if ($conn->query($sql) === TRUE) {
        /*echo "New record created successfully";
        echo("[]") ;*/
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    break ;

    case "search" :
    $sql = "SELECT * from pharmacy_sells WHERE id = '".$_GET["id"]."'" ;
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        for ($set = array (); $row = $result->fetch_assoc(); $set[] = $row);
     print(json_encode($set));
    } else {
        echo ("[]");
    }
    break ;
   case "":
}

$conn->close();
?> 