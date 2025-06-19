window.addEventListener('load', () => {
  setTimeout(() => {
    const startScreen = document.getElementById('start-screen');
    const mainContent = document.getElementById('main-content');

    if (startScreen) {
      // Aplica transição de saída
      startScreen.classList.add('fade-out');

      // Espera a animação terminar para remover
      setTimeout(() => {
        startScreen.remove();

        if (mainContent) {
          mainContent.style.display = 'block';

          // Scroll para sobre-mim com delay
          setTimeout(() => {
            const sobreMim = document.getElementById("sobre-mim");
            if (sobreMim) {
              sobreMim.scrollIntoView({ behavior: "smooth" });
              setActiveLink("sobre-mim");
            }
          }, 100);
        }

      }, 300); // corresponde ao tempo da animação (1s)
    }

  }, 2200);
});


//evento para o hover do avatar
const imgAvatar = document.querySelector('.img-avatar');
//adiciona img ao passar o mouse
imgAvatar.addEventListener('mouseover', () => {
  imgAvatar.src = "assets/img/avatar-normal.jpg";
});
//retorna para img original ao sair do hover
imgAvatar.addEventListener('mouseout', () => {
  imgAvatar.src = "assets/img/Avatar.webp";
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
        case 'home':
            overlay.style.backgroundImage = "url('/assets/img/pagina3.webp')";
            break;
        case 'sobre-mim':
            overlay.style.backgroundImage = "url('/assets/img/pagina1.webp')";
            break;
        case 'projetos':
            overlay.style.backgroundImage = "url('/assets/img/pagina1.webp')";
            break;
        case 'skills':
            overlay.style.backgroundImage = "url('/assets/img/pagina1.webp')";
            break;
        case 'contato':
            overlay.style.backgroundImage = "url('/assets/img/pagina3.webp')";
            break;
        default:
            overlay.style.backgroundImage = "none";
    }
}

const slider = document.getElementById('slider');
let currentIndex = 0;
const cardsPerView = 2; // Mostrando 2 cards por vez
const totalItems = slider.children.length;
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

function updateArrowStates() {
  // Controle do botão da esquerda
  if (currentIndex === 0) {
    leftArrow.style.opacity = "0";
    leftArrow.style.pointerEvents = "none";
  } else {
    leftArrow.style.opacity = "1";
    leftArrow.style.pointerEvents = "auto";
  }

  // Controle do botão da direita
  if (currentIndex >= totalItems - cardsPerView) {
    rightArrow.style.opacity = "0";
    rightArrow.style.pointerEvents = "none";
  } else {
    rightArrow.style.opacity = "1";
    rightArrow.style.pointerEvents = "auto";
  }
}
function slideLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
    updateDots();
  }
  updateArrowStates();
}

function slideRight() {
  if (currentIndex < totalItems - cardsPerView) {
    currentIndex++;
    updateSlider();
    updateDots();
  }
  updateArrowStates();
}

function updateSlider() {
  const cardWidth = 450 + 38; // largura do card + gap
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Atualiza os dots com base no índice atual
function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));

  // O dot ativo é baseado no currentIndex
  const activeDotIndex = Math.min(currentIndex, dots.length - 1);
  if (dots[activeDotIndex]) {
    dots[activeDotIndex].classList.add('active');
  }
}

// Inicializa o dot ao carregar
updateDots();
updateArrowStates();