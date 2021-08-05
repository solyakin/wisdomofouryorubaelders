<?php
	if($_POST){
		// Information to be modified
		$to_email = "info@wisdomofouryorubaelders.com"; // email address to which the form data will be sent
		$subject = "book purchase"; // subject of the email that is sent
		$from_email = "noreply@wisdomofouryorubaelders.com";  
		// Add Your Own Email Id Or Other Email Id Like "noreply@yourdomain.com" 
		// And Add The mail id in your mail Contacts So The Mails From The Website Form Wont Go In Spam/junk Folders.

		$fnam = strip_tags($_POST["fullName"]);
		$ema = strip_tags($_POST["email"]);
		$phone = strip_tags($_POST["phoneNo"]);
		$msg = strip_tags($_POST["message"]);

		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= 'From: <' .$from_email. '>' . "\r\n";
		$headers .= "Reply-To: ".$ema."\r\n";

		$email_body = 
			"<strong>Full Name : </strong>" . $fnam . "<br />
			<strong>Mail Id : </strong>" . $ema . "<br />
			<strong>Phone Number : </strong>" . $phone . "<br />	
			<strong>Message : </strong>" . $msg . "<br />";
			
		// Assuming there's no error, send the email Disply The Thank You Message
			
		if(mail($to_email, $subject, $email_body, $headers) ) {	
			echo '<div class="form-msg"> <i class="fas fa-check-square-o"></i> Thank you ' .$fnam. '. We successfully Received Your Details! </div>';
		} else {	
			echo '<div class="form-msg-error"> <i class="fas fa-warning"></i> Sorry ' .$fnam. '. Your Email was not sent. Resubmit form again Please.. </div>';
		}
	}
die();

?>