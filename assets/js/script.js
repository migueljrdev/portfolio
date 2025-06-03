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
