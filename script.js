document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');

    function showSection(targetId) {
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('visible');
                section.style.opacity = 0;
                setTimeout(() => section.style.opacity = 1, 50); // Efecto de transición suave
            } else {
                section.classList.remove('visible');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            showSection(target);
        });

        // Efecto de iluminación al pasar el mouse sobre el enlace de la categoría
        link.addEventListener('mouseover', function() {
            navLinks.forEach(nav => {
                if (nav !== link) {
                    nav.style.opacity = '0.5'; // Oscurecer otros enlaces
                }
            });
        });

        link.addEventListener('mouseout', function() {
            navLinks.forEach(nav => {
                nav.style.opacity = '1'; // Restaurar la opacidad
            });
        });
    });

    // Mostrar la sección "Fotos" al cargar la página
    showSection('fotos');
});

// Galería de fotos
let currentPhotoIndex = 0;
const photos = [
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg',
    'photo4.jpg',
    'photo5.jpg',
    'photo6.jpg'
];

document.getElementById('prev-photo').addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updatePhoto();
});

document.getElementById('next-photo').addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updatePhoto();
});

function updatePhoto() {
    document.getElementById('current-photo').src = photos[currentPhotoIndex];
}

