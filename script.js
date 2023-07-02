document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: 'fade',
    perPage: 1,
    pagination: true,
    autoplay: true,
    pauseOnHover: false,
    arrows: true,
    speed : 800,
    rewind: true, 
    rewindSpeed: 1000,
    gap: 10
  }).mount();
});

// Smooth scrolling
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    const offsetTop = target.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});


   window.addEventListener('load', function() {
  // Simulasi waktu loading selama 7 detik
  setTimeout(function() {
    // Menghilangkan tampilan fake loading dan menampilkan konten website dengan animasi muncul halus
    document.getElementById('fake-loading').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
    document.getElementById('content').classList.add('content-appear');
  }, 3000);
});
