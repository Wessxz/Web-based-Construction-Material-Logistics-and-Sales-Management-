// Select login link and modal
const loginLink = document.getElementById('login-link');
const loginModal = document.getElementById('loginModal');

// Show modal on click
loginLink.addEventListener('click', function(e) {
  e.preventDefault();
  loginModal.classList.add('active');
});

// Close modal if click outside the container
loginModal.addEventListener('click', function(e) {
  if (e.target === loginModal) {
    loginModal.classList.remove('active');
  }
});

const hamburger = document.getElementById('hamburgerMenu');
const categoryMenu = document.querySelector('.category-menu');

hamburger.addEventListener('click', () => {
  categoryMenu.classList.toggle('active');
});

