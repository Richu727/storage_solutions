document.getElementById('dataForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  
  // Show loading state
  document.getElementById('status').textContent = 'Submitting...';
  
  const data = { name, email, phone };
  
  fetch('https://script.google.com/macros/s/AKfycbyppjZXOCJm7-8IThHzRedkrRc_43XtTZHdByEJ0kiyQbzEAbE2JgvOCwFKNxVVYWvW/exec', {
    method: 'POST',
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