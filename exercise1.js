const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function (event) {

  const trigger = event.target.closest('.accordion-trigger');
  if (!trigger) return;

  const item = trigger.closest('.accordion-item');

  const allItems = document.querySelectorAll('.accordion-item');
  allItems.forEach(function (el) {
    if (el !== item) {
      el.classList.remove('open');
    }
  });

  item.classList.toggle('open');
});