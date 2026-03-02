// ================= LOGIN MODAL =================
const loginLink = document.getElementById('login-link');
const loginModal = document.getElementById('loginModal');

if (loginLink && loginModal) {
  loginLink.addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.classList.add('active');
  });

  loginModal.addEventListener('click', function(e) {
    if (e.target === loginModal) {
      loginModal.classList.remove('active');
    }
  });
}

// ================= HAMBURGER =================
const hamburger = document.getElementById("hamburgerMenu");
const categoryMenu = document.querySelector(".category-menu");

if (hamburger && categoryMenu) {
  hamburger.addEventListener("click", () => {
    categoryMenu.classList.toggle("active");
  });
}

// ================= SLIDER =================
const slides = document.querySelectorAll(".hero-slide");
const nextBtn = document.querySelector(".next-slide");
const prevBtn = document.querySelector(".prev-slide");

let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

if (nextBtn && prevBtn && slides.length > 0) {
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
  setInterval(nextSlide, 4000);
}