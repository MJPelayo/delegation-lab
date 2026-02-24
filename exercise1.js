// exercise1.js
const accordion = document.querySelector('.accordion');

// All panels should be closed on page load
// No initialization needed - CSS handles closed state

accordion.addEventListener('click', function(event) {
  // 1. Find the closest trigger from event.target
  const trigger = event.target.closest('.accordion-trigger');
  
  // If null, the click was not on a trigger - return early
  if (!trigger) return;
  
  // 2. From the trigger, find the closest .accordion-item
  const item = trigger.closest('.accordion-item');
  
  // 3. Close ALL accordion items
  const allItems = document.querySelectorAll('.accordion-item');
  allItems.forEach(function(item) {
    item.classList.remove('open');
  });
  
  // 4. Toggle .open on the clicked item only
  item.classList.add('open');
});