const form = document.querySelector('form');
const codeDiv = document.querySelector('#code');

form.addEventListener('submit', e => {
	e.preventDefault();
	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const phone = document.querySelector('#phone').value;
	const code = Math.floor(100000 + Math.random() * 900000); // generates a random 6-digit code
	codeDiv.innerText = `Thank you for registering, ${name}! Your registration code is ${code}.`;
	// AJAX request to submit the form data to PHP script
	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'submit.php');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = () => {
		console.log(xhr.responseText);
	}
	xhr.send(`name=${name}&email=${email}&phone=${phone}&code=${code}`);
	form.reset();
});
