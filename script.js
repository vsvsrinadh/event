document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
const slides = document.querySelector('.banner-slides');

slides.addEventListener('mouseover', () => {
    slides.style.animationPlayState = 'paused';
});

slides.addEventListener('mouseout', () => {
    slides.style.animationPlayState = 'running';
});


