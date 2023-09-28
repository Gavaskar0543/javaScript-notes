{
  const form = document.querySelector('#form');
  const email = document.querySelector('#email');
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');
  const cpassword = document.querySelector('#Cpassword');

  form.addEventListener('submit', (e) => {
     
if(!validateForm()) {
  e.preventDefault();
}
 });

  function validateForm() {
      const userNameVal = username.value.trim();
      const mailVal = email.value.trim();
      const passwordVal = password.value.trim();
      const cpasswordVal = cpassword.value.trim();
      let success = true;
      if (userNameVal === '') {
          setError(username, "Username required");
          success=false;
      } else {
          setSuccess(username);
      }

      if (mailVal === '') {
          setError(email, "Email required!");
          success=false;
      } else if (!validateEmail(mailVal)) {
          setError(email, "Enter a valid email");
          success=false;
      } else {
          setSuccess(email);
      }

      if (passwordVal === '') {
          setError(password, "Password required");
          success=false;
      } else if (passwordVal.length < 8) {
        success=false;
          setError(password, 'Password must contain at least 8 characters');
      } else {
          setSuccess(password);
      }

      if (cpasswordVal === '') {
        success=false;
          setError(cpassword, "Confirm password required");
      } else if (passwordVal !== cpasswordVal) {
        success=false;
          setError(cpassword, "Passwords do not match");
      } else {
          setSuccess(cpassword);
      }
      return success;
  }

  function setError(element, message) {
      let inputGroup = element.parentElement; // Change ParentElement to parentElement
      let errorElement = inputGroup.querySelector('.error');
      errorElement.innerText = message;
      inputGroup.classList.add('error'); // Remove the dot before 'error'
      inputGroup.classList.remove('success');
  }

  function setSuccess(element) {
      let inputGroup = element.parentElement; // Change ParentElement to parentElement
      let errorElement = inputGroup.querySelector('.error');
      errorElement.innerText = '';
      inputGroup.classList.add('success');
      inputGroup.classList.remove('error');
  }

  function validateEmail(email) {
      // Regular expression pattern for email validation
      var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Check if the email matches the pattern
      if (pattern.test(email)) {
          return true;
      } else {
          return false;
      }
  }
}
