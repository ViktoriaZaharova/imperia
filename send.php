<?php 

	$to = "nemeronov@gmail.com";//"";//Адрес получателя
	$from = "dolgovvlad@nonturtle.com";
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
		 $headers .= 'From: '.$from."\r\n".
		 'Reply-To: '.$from."\r\n" .
		 'X-Mailer: PHP/' . phpversion();
		
 
	
	 
	
	if(isset($_REQUEST['fields'])){
		parse_str($_REQUEST['fields'], $data_arr); 
		 echo 2;
		 $thm = "Заявка";
		 $html= "Имя:".$data_arr['name']."<br/>"; 
		 $html.= "Телефон:".$data_arr['phone']."<br/>"; 
		 $html.= "E-mail:".$data_arr['mail']."<br/>";
		 $html.= "Город:".$data_arr['city']."<br/>";
		 $html.= "Сообщение:".$data_arr['message']."<br/>";  
		 
		 
			$path = add_file();
			//print_r($path);die();
			if(is_array($path)){
				$s = send_mail($to, $thm, $html,$from,$path);
				
			}else{
				
				$s = mail($to, $thm, $html,$headers) ;
			}
			 
		 
	}
	
	function add_file(){
		$picture = array();

	$f = array(
		'file'=>array()
	);	
	foreach($_FILES as $val){
		$f['file'][] = $val;
	}
	 		 
		  for($i=0;$i<count($f['file']);$i++){
			   $path = $f['file'][$i]['name'];
			   
			   if (copy($f['file'][$i]['tmp_name'], $path)) $picture[] = $path; 
		  }	
		  
		return $picture;
	}
	function send_mail($email, $subject, $message, $useremail, $file)
{
    $boundary = "--" . md5(uniqid(time()));
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
    $headers .= "From: $useremail\r\n";
    $multipart = "--$boundary\r\n";
    $multipart .= "Content-Type: text/html; charset=utf-8\r\n";
    $multipart .= "Content-Transfer-Encoding: Quot-Printed\n\n";
    $multipart .= "$message\n\n";

    $message_part = "";
    foreach ($file as $key => $value) {
       $fp = fopen($value, "r");
       $file = fread($fp, filesize($value));
       $message_part .= "--$boundary\r\n";
       $message_part .= "Content-Type: application/octet-stream\r\n";
       $message_part .= "Content-Transfer-Encoding: base64\r\n";
       $message_part .= "Content-Disposition: attachment; filename=\"$value\"\n\n";
       $message_part .= chunk_split(base64_encode($file)) . "\r\n";
    }
    $multipart .= $message_part . "--$boundary--\r\n";

    mail($email, $subject, $multipart, $headers);
}

 echo 1;
	
?>