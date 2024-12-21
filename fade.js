window.addEventListener('scroll', function() {
  const content = document.querySelector('.content');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollPosition > windowHeight / 2) {
    content.classList.add('hidden');
  } else {
    content.classList.remove('hidden');
  }
});
