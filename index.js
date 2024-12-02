document.querySelector('.hamburger').addEventListener('click', () => {
    const navMenu = document.querySelector('.navbar ul');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje. Me pondré en contacto pronto.');
    this.reset();
});
