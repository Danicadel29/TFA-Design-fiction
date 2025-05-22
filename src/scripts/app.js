

//  Curseur personnalisé //
const body = document.body;
const Cursor = document.querySelector('.cursor');
const images = document.querySelectorAll('.cursor-img');

//deplacer le cursor et centrer
function moveCursor(e) {
    console.log('mousemove');
  Cursor.style.top = `${(e.clientY + window.scrollY) - 32}px`; 
  Cursor.style.left = `${e.clientX - 32}px`;
}
// cacher le cursor de base / afficher le cursor personnaliser/ activer le suivi
    images.forEach((img) => {
        img.addEventListener('mouseenter', () => {
            console.log('mouseenter');
        Cursor.style.visibility = 'visible';
        body.style.cursor = 'none';
        img.addEventListener('mousemove', moveCursor);
        });
    });
//inverse que on part de l'element avec le cursor
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


// transition de page
//apres le chargement de la page ajout de l'anim d'entrer
window.addEventListener("load", () => {
  const referrer = document.referrer;
  const sameSite = referrer.startsWith(window.location.origin);

  if (sameSite) {
    document.body.classList.add("loaded"); // on anime à l’arrivée
  } else {
    // sinon on désactive le voile pour ne rien voir du tout
    const slide = document.querySelector(".transition-slide");
    if (slide) slide.style.display = "none";
  }
});


// enlever anim d'enter ajouter anim de sortie/ empeche l'ouvertir directe/ redirige seulement quand anim fini
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

// animation titre decription quand dans le champ

document.querySelectorAll('.titre-description').forEach((element) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim-titre-description');
        observer.unobserve(entry.target); // une seule fois
      }
    });
  }, { threshold: 0.5 });

  observer.observe(element);
});
