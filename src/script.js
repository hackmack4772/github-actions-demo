function showMessage() {
  document.getElementById('message').innerText = 'GitHub Actions is working!';

  // Intentional syntax error
  const message = 'hello';

  console.log(message);
}

console.log('Application started successfully');
