document.getElementById('dataForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  
  // Show loading state
  document.getElementById('status').textContent = 'Submitting...';
  
  const data = { name, email, phone };
  
  fetch('YOUR_APPS_SCRIPT_URL', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(() => {
    document.getElementById('dataForm').style.display = 'none';
    document.getElementById('successCard').style.display = 'flex';
    document.getElementById('status').textContent = '';
  })
  .catch(error => {
    document.getElementById('status').textContent = 'Error: ' + error.message;
    console.error('Submission error:', error);
  });
});