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

// Função para scroll suave e destaque
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveLink(id);
    }
}

// Função para marcar link ativo
function setActiveLink(id) {
    const links = document.querySelectorAll('.li-nav');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
        }
    });
}

// Detecta rolagem e marca o link correto

scrollContainer.addEventListener("scroll", () => {
    console.log("scroll ativado");

    const sectionDivs = scrollContainer.querySelectorAll(".conteiner > div[id]");
    const scrollPos = scrollContainer.scrollLeft + scrollContainer.clientWidth / 2;

    let currentId = null;

    sectionDivs.forEach(section => {
        const left = section.offsetLeft;
        const width = section.offsetWidth;
        if (scrollPos >= left && scrollPos < left + width) {
            currentId = section.id;
        }
    });

    if (currentId) {
        setActiveLink(currentId);
        updateBackgroundOverlay(currentId);
    }
});


//mudar o background de acordo com a section
function updateBackgroundOverlay(sectionId) {
    const overlay = document.querySelector('.background-overlay');

    switch (sectionId) {
        case 'sobre-mim':
            overlay.style.backgroundImage = "url('/assets/img/pagina1.png')";
            break;
        case 'projetos':
            overlay.style.backgroundImage = "url('/assets/img/pag2.png')";
            break;
        case 'skills':
            overlay.style.backgroundImage = "url('/assets/img/pag2.png')";
            break;
        case 'contato':
            overlay.style.backgroundImage = "url('/assets/img/pag3.png')";
            break;
        default:
            overlay.style.backgroundImage = "none";
    }
}
