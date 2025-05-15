//  Curseur personnalisé sur l'état hover des img--schema //
const body = document.body;
const Cursor = document.querySelector('.cursor');
const images = document.querySelectorAll('.cursor-img');

function moveCursor(e) {
    console.log('mousemove');
  Cursor.style.top = `${(e.clientY + window.scrollY) - 32}px`; // 32 c'est la moitié de la taille du curseur, pour le centrer, si tu veux que le "click" soit en haut à gauche, comme pour la souris, alors retire le 32
  Cursor.style.left = `${e.clientX - 32}px`;
}

if (window.innerWidth >= 1280) {
    images.forEach((img) => {
        img.addEventListener('mouseenter', () => {
            console.log('mouseenter');
        Cursor.style.visibility = 'visible';
        body.style.cursor = 'none';
        img.addEventListener('mousemove', moveCursor);
        });
    });

    images.forEach((img) => {
        img.addEventListener('mouseleave', (e) => {
            console.log('mouseleave');
        if (!img.contains(e.relatedTarget)) {
            Cursor.style.visibility = 'hidden';
            body.style.cursor = 'default';
            img.removeEventListener('mousemove', moveCursor);
        }
    });
});
}