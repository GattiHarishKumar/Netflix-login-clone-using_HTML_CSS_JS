document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    // Simulate a login attempt (this is just a placeholder, replace with actual login logic)
    if (email === 'user@example.com' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid email or password.');
    }
});