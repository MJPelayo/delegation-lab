// exercise3.js
const filterBar = document.querySelector('#filter-bar');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');

filterBar.addEventListener('click', function(event) {
  // 1. Guard: if event.target does not match '.filter-btn', return
  if (!event.target.matches('.filter-btn')) return;
  
  // 2. Update active class on all buttons
  filterBtns.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // 3. Read the filter value from event.target.dataset.filter
  const filter = event.target.dataset.filter;
  
  // 4. Loop through cards
  cards.forEach(card => {
    if (filter === 'all') {
      // Remove .hidden from every card
      card.classList.remove('hidden');
    } else {
      // Compare card.dataset.category to filter
      // Add .hidden if no match, remove .hidden if match
      const shouldHide = card.dataset.category !== filter;
      card.classList.toggle('hidden', shouldHide);
    }
  });
});