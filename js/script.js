const headerEl = document.querySelector('.header');
const navBtn = document.querySelector('.btn-mobile-nav');
const sectionHow = document.getElementById('section-how');
const maiNavEl = document.querySelector('.main-nav-list');
const sectionMeals = document.querySelector('.section-meals');
const allLinks = document.querySelectorAll('a:link');

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

})

navBtn.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
});

const fixNav = function (entries, obsever) {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      headerEl.classList.add("fix-nav");
      console.log(entry);
    } else {
      // headerEl.classList.remove("fix-nav");
    }
  })
}

const navObserver = new IntersectionObserver(fixNav, {
  root: null,
  threshold: 0.25,

})
navObserver.observe(sectionHow);