const headerEl = document.querySelector('.header');
const navBtn = document.querySelector('.btn-mobile-nav');
const sectionHow = document.getElementById('section-how');
const maiNavEl = document.querySelector('.main-nav-list');
const sectionMeals = document.querySelector('.section-meals');
const allLinks = document.querySelectorAll('a:link');
const hero = document.querySelector('.section-hero');
const stepImageBox = document.querySelectorAll('.step-img');

allLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = link.getAttribute('href');
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    };

    if (href !== '#' && href.startsWith('#')) {
      const selectionEl = document.querySelector(href);
      selectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  })

});

navBtn.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
});

const fixNav = function (entries, obsever) {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      headerEl.classList.remove("fix-nav");

    } else {
      headerEl.classList.add("fix-nav");
    }
  })
}

const navObserver = new IntersectionObserver(fixNav, {
  root: null,
  threshold: 0.5
});

const imageRotation = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('img-rotation');
    } else {
      entry.target.classList.remove('img-rotation');

    }
  })
}


const imageObserver = new IntersectionObserver(imageRotation, {
  root: null,
  threshold: 0.75,
})
stepImageBox.forEach(box => imageObserver.observe(box))
navObserver.observe(hero);