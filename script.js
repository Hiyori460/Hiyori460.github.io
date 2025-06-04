// Simple contact form handler (does not actually send emails)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-message').textContent = "Thank you for reaching out!";
  this.reset();
});