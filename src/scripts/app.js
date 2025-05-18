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
//transition page
/* var link = document.querySelector(".pageTransition")
link.addEventListener("click", pageTransition);

var block2 = document.querySelector(".block2");

function pageTransition(e){

    var linkHref = this.href;
    
    document.body.classList.add("pageAnim");
    document.body.addEventListener("animationend", function(){
        window.location = linkHref; //url de la page égal a 
    })
    e.preventDefault();
} */

/*     var link = document.querySelector(".pageTransition");
    var block = document.querySelector(".transition-slide");

link.addEventListener("click", function(e) {
    e.preventDefault();
    var linkHref = this.href;

    document.body.classList.add("pageAnim");

    // Attendre la fin de l'animation (1s ici)
    block.addEventListener("animationend", function() {
        window.location = linkHref;
    }, { once: true });
}); */

// Animation d'entrée au chargement
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Animation de sortie sur clic lien
document.querySelectorAll(".pageTransition").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const href = this.href;

    document.body.classList.remove("loaded");
    document.body.classList.add("pageAnim");

    document.querySelector(".transition-slide").addEventListener("animationend", () => {
      window.location = href;
    }, { once: true });
  });
});
