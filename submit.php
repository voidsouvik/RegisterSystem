<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$code = $_POST['code'];

$file = 'data.xlsx';9


$data = [$name, $email, $phone, $code];
$fp = fopen($file, 'a');
fputcsv($fp, $data);
fclose($fp);

echo 'Form data submitted successfully!';

?>
