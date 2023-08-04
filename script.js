let cookieCount = 0;
let lastClickTime = 0;
const cooldownTime = 100; // 100 milliseconds cooldown

let autoclickerCount = 0;
const autoclickerCost = 20;
let autoclickerInterval;

function incrementCookieCount() {
  const now = Date.now();
  if (now - lastClickTime > cooldownTime) {
    cookieCount++;
    updateCookieCount();
    addZoomInAnimation();
    lastClickTime = now;
  }
}

function updateCookieCount() {
  const countElement = document.getElementById('count');
  countElement.textContent = cookieCount;
}

function addZoomInAnimation() {
  const cookieDiv = document.getElementById('cookie');
  cookieDiv.classList.add('zoom-in-animation');
  setTimeout(() => {
    cookieDiv.classList.remove('zoom-in-animation');
  }, 200); // Remove the class after 0.2 seconds (animation duration)
}

function buyAutoclicker() {
  if (cookieCount >= autoclickerCost) {
    cookieCount -= autoclickerCost;
    autoclickerCount++;
    updateCookieCount();
    updateAutoclickerCount();
    startAutoclicker();
  }
}

function startAutoclicker() {
  if (autoclickerInterval) {
    clearInterval(autoclickerInterval);
  }
  autoclickerInterval = setInterval(() => {
    cookieCount += autoclickerCount;
  }, 1000);
}

function updateAutoclickerCount() {
  const autoclickerCountElement = document.getElementById('autoclickerCount');
  autoclickerCountElement.textContent = `Autoclickers: ${autoclickerCount}`;
}

// Update cookie count display every 100 milliseconds
setInterval(() => {
  updateCookieCount();
}, 100);
