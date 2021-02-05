const accordionBtn = document.querySelectorAll('.accordion-header');

accordionBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    // The accordion content
    btn.nextElementSibling.classList.toggle('active');
    // The accordion's header title
    btn.firstElementChild.classList.toggle('active');
    // The accordion's arrow header icon
    btn.lastElementChild.classList.toggle('active');
  });
});
