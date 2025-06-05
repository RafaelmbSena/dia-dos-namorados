// Corações caindo
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 400);

// Timer de amor
function updateLoveTimer() {
  const startDate = new Date("2022-11-18T00:00:00");
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  if (seconds < 0) { seconds += 60; minutes--; }
  if (minutes < 0) { minutes += 60; hours--; }
  if (hours < 0) { hours += 24; days--; }
  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) { months += 12; years--; }

  document.getElementById("loveTimer").innerText =
    `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos 💞`;
}
setInterval(updateLoveTimer, 1000);
updateLoveTimer();

// Mostrar conteúdo após clique e tocar música
const startBtn = document.getElementById('startBtn');
const startScreen = document.getElementById('startScreen');
const mainContent = document.getElementById('mainContent');
const loveSong = document.getElementById('loveSong');

startBtn.addEventListener('click', () => {
  startScreen.style.transition = 'opacity 1s ease';
  startScreen.style.opacity = 0;

  // Tocar música
  loveSong.play().catch(e => {
    console.log('Falha ao tentar tocar a música:', e);
  });

  mainContent.style.display = 'block';
  mainContent.style.opacity = 0;

  setTimeout(() => {
    mainContent.style.transition = 'opacity 1.5s ease';
    mainContent.style.opacity = 1;

    setTimeout(() => {
      startScreen.style.display = 'none';
    }, 1000);
  }, 50);
});

// Easter Egg: clique no canto inferior esquerdo da tela
document.body.addEventListener('click', (e) => {
  if (e.clientX < 50 && e.clientY > window.innerHeight - 50) {
    mostrarMensagemSecreta();
  }
});

// OU: Clique duplo no botão
startBtn.addEventListener('dblclick', () => {
  mostrarMensagemSecreta();
});

// Função para mostrar e ocultar após 5 segundos
function mostrarMensagemSecreta() {
  const msg = document.getElementById('secretMessage');
  msg.style.display = 'block';
  msg.style.opacity = '1';

  setTimeout(() => {
    msg.style.opacity = '0';
    setTimeout(() => {
      msg.style.display = 'none';
    }, 500); // espera a animação de opacidade terminar
  }, 5000); // visível por 5 segundos
}


function revealOnScroll() {
  const reveals = document.querySelectorAll('.scroll-reveal');

  for (const reveal of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    } else {
      reveal.classList.remove('active'); // opcional: remove se quiser que desapareça quando sair da tela
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // roda ao carregar a página
