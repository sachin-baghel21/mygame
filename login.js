alert("Plz enter username='sachin' or password='1234'");
document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('loginForm').addEventListener('submit', function (event) {
		event.preventDefault(); // Prevent form submission

		// Retrieve input values
		var username = document.getElementById('input-id').value;
		var password = document.getElementById('input-pass').value;

		// Validation
		if (username.trim() === 'sachin' && password.trim() === '1234') {
			alert("Login Successfully!");
			window.location.href = 'testprogress.html'; // Redirect to progress-bar.html
		} else if (username.trim() === '' || password.trim() === '') {
			alert("Please fill in both fields!");
		} else {
			alert("Invalid username or password!");
			document.getElementById('input-id').value = ''; // Clear username field
			document.getElementById('input-pass').value = ''; // Clear password field
		}
		let progress = 0;
        let interval = setInterval(() => {
            if (progress >= 100) {
                clearInterval(interval);
                window.location.href = 'testhome.html'; // Redirect to home page
            } 
        }, 500); // Increase progress every 500ms
	});
});
