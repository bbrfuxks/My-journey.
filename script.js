// Simple hover effect for portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = "scale(1.02)";
    item.style.transition = "0.3s";
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = "scale(1)";
  });
});