document.querySelector('.eye').addEventListener('click', function() {
    var passwordField = document.querySelector(this.getAttribute('toggle'));
    this.classList.toggle('active');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  });

  document.querySelector('.eye1').addEventListener('click', function() {
    var passwordField = document.querySelector(this.getAttribute('toggle'));
    this.classList.toggle('active');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  });