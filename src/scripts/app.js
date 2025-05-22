

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

// anim activité shéma
const acti1 = document.querySelectorAll(".act1")
const btn = document.querySelector(".btn_acti1")
const activity = document.querySelectorAll(".activity")

  btn.addEventListener('click', () => {
    console.log('click');

    activity.forEach(el  => {
      el.style.display = "none";
  });
     
    
    acti1.forEach(el  => {
      el.style.display = "block";
  })
        });



const acti2 = document.querySelectorAll(".act2")
const btn2 = document.querySelector(".btn_acti2")

  btn2.addEventListener('click', () => {
    console.log('click');

    activity.forEach(el  => {
      el.style.display = "none";
  });
     
    
    acti2.forEach(el  => {
      el.style.display = "block";
  })
        });

const acti3 = document.querySelectorAll(".act3")
const btn3 = document.querySelector(".btn_acti3")

  btn3.addEventListener('click', () => {
    console.log('click');

    activity.forEach(el  => {
      el.style.display = "none";
  });
     
    
    acti3.forEach(el  => {
      el.style.display = "block";
  })
        });

const acti4 = document.querySelectorAll(".act4")
const btn4 = document.querySelector(".btn_acti4")

  btn4.addEventListener('click', () => {
    console.log('click');

    activity.forEach(el  => {
      el.style.display = "none";
  });
     
    
    acti4.forEach(el  => {
      el.style.display = "block";
  })
        });