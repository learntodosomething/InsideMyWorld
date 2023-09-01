/* Telefon */
document.getElementById("phone-toggle").addEventListener("click", function() {
  document.getElementById("phone-dropdown").classList.toggle("show");
});
const phoneToggle = document.getElementById('phone-toggle');
phoneToggle.addEventListener('click', () => {
  phoneToggle.classList.add('clicked');
  setTimeout(() => {
      phoneToggle.classList.remove('clicked');
  }, 200); // 0.2 másodperc után eltávolítjuk az 'clicked' osztályt
});
/* Telefon */



// Telefon gomb animáció
const buttons = document.querySelectorAll('.burger');
buttons.forEach(button => {
button.addEventListener('click', () => {
  button.classList.toggle('on');
});
});


//welcome text
const welcomeText = document.getElementById('welcome-text');
const maxFontSizes = [100, 50];
const minFontSizes = [30, 20];

function updatePositionAndSize() {
const windowWidth = window.innerWidth;
const maxLeft = 150;
const maxBottom = 100;

const newLeft = (maxLeft * windowWidth) / screen.width;
welcomeText.style.left = `${newLeft}px`;

welcomeText.style.bottom = `${maxBottom}px`;

adjustElementStyle();
}

function adjustElementStyle() {
const elements = welcomeText.querySelectorAll('div');
const windowWidth = window.innerWidth;
const fontSizeMultiplier = windowWidth >= 1500 ? windowWidth / 15 : windowWidth / 1500;

elements.forEach((element, index) => {
  const maxFontSize = maxFontSizes[index];
  const minFontSize = minFontSizes[index];

  const newSize = Math.max(minFontSize, Math.min(maxFontSize, maxFontSize * fontSizeMultiplier));
  element.style.fontSize = `${newSize}px`;
});
}

updatePositionAndSize();
window.addEventListener('resize', updatePositionAndSize);


/* Welcome text change */
class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}*#&@)(/?'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

const phrases = [
  'I´m a programmer',
  'I´m an AI artist',
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 5000)
  })
  counter = (counter + 1) % phrases.length
}

next()
/* Welcome text change */




// Footer
const maxBubbles = 30; // Maximális buborék mennyiség
function createBubble() {
const bubble = document.createElement("div");
bubble.classList.add("bubble");
bubble.style = `
  --size: ${Math.random() * 4 + 2}rem;
  --position: ${Math.random() * 90}%;
  --time: ${Math.random() * 2 + 2}s;
  --delay: ${-Math.random() * 3}s;
  --distance: ${Math.random() * 6 + 6}rem;
  left: var(--position);
  width: var(--size);
  height: var(--size);
  animation: bubble-size var(--time) ease-in infinite var(--delay), bubble-move var(--time) ease-in infinite var(--delay);
  transform: translate(-50%, 100%);
`;

document.querySelector(".bubbles").appendChild(bubble);
}

function generateBubbles() {
const existingBubbles = document.querySelectorAll(".bubble").length;

if (existingBubbles < maxBubbles) {
  for (let i = 0; i < 3; i++) {
    if (existingBubbles + i < maxBubbles) {
      createBubble();
    }
  }
}
}

setInterval(generateBubbles, 1000);



//Animáció
const animatedElements = document.querySelectorAll('.animate-text, .animate-box');
const windowHeight = window.innerHeight;

function handleScroll() {
  animatedElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;

      if (elementPosition < windowHeight - 100) {
          element.classList.add('animated');
      }
  });
}

document.addEventListener('scroll', handleScroll);
document.addEventListener("DOMContentLoaded", handleScroll);









//arrow
const arrow = document.querySelector('.arrow');
arrow.style.transition = 'opacity 0.5s'; // Animáció hozzáadása

window.addEventListener('scroll', function() {
const distanceFromTop = window.scrollY;
arrow.style.opacity = distanceFromTop >= 350 ? 0 : 1;
arrow.style.pointerEvents = distanceFromTop >= 350 ? 'none' : 'auto';
});

