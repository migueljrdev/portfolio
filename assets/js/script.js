//evento para o hover do avatar
const imgAvatar = document.querySelector('.img-avatar');
//adiciona img ao passar o mouse
imgAvatar.addEventListener('mouseover', () => {
  imgAvatar.src = "assets/img/avatar-normal.jpg";
});
//retorna para img original ao sair do hover
imgAvatar.addEventListener('mouseout', () => {
  imgAvatar.src = "assets/img/Avatar.png";
});


const scrollContainer = document.getElementById('scrollContainer');

// Converte scroll vertical para horizontal
scrollContainer.addEventListener('wheel', (e) => {
// Comportamento natural de scroll horizontal
  if (e.deltaY !== 0) {
    e.preventDefault(); // Evita o scroll vertical
    scrollContainer.scrollBy({
      left: e.deltaY,
      behavior: 'smooth'
    });
  }
}, { passive: false });

function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth', inline: 'start' });
}