let enlaces = document.querySelectorAll('.gallery__hover a');

enlaces.forEach(enlace => {
    enlace.href = 'teachers.html';
    enlace.target = '_blank';
    enlace.rel = 'noopener noreferrer';  
});