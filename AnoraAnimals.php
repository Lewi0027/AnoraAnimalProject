<!DOCTYPE html>
<html lang="en">
<?php

    $dsn = "mysql:host=localhost;dbname=mysql";
    $username = "root";
    $password = "RoadRunner66^^";
    $pdo = new PDO($dsn, $username, $password);

    //Throw exception if SQL error
    $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "SELECT * FROM animals;";

    $statement = $pdo->query($sql);

    while ($row = $statement->fetch()) {
        echo "$row[animalType] - $row[habitat]\n";
    }
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anora's Animals</title>
</head>
</html>