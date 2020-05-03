// typed js
var typed = new Typed('.type', {
    strings: [

        'Web Developer.',
        'Mobile Developer.',
        'UI/UX Designer.',
        'ICT Expert'
    ],
    typeSpeed:95,
    backSpeed:100,
    loop: true 
  });
// dynamic copyright year
  var date = new Date();
  var year = date.getFullYear();
  document.getElementById('year').innerHTML = year;
// contact form handling ---> to be implemented later

function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "<sender’s email address>",
	Password : "<email password>",
	To : '<recipient’s email address>',
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}
