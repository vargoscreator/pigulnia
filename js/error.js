const spanElement = document.querySelector('.errorPage__image span');
window.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const speed = 0.02;
  const offsetX = (mouseX - window.innerWidth / 2) * speed;
  const offsetY = (mouseY - window.innerHeight / 2) * speed;
  spanElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
