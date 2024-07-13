function darkMode() {
  document.body.classList.toggle("darkMode");
  let allText = document.querySelectorAll("button, p, h1");
  let icon = document.getElementById("darkModeIconToggle");
  for (var i = 0; i < allText.length; i++) {
    allText[i].classList.toggle("darkModeText");
  }

  allIcons = document.querySelectorAll(".darkModeIcon, .btn-icon, .btn-down");
  for (let j = 0; j < allIcons.length; j++) {
    allIcons[j].style =
      icon.getAttribute("src") == "./icons/darkmode_icon.png"
        ? "filter: brightness(0) invert(1);"
        : "filter: brightness(0.3)";
  }

  icon.src =
    icon.getAttribute("src") == "./icons/darkmode_icon.png"
      ? "./icons/lightmode_icon.png"
      : "./icons/darkmode_icon.png";
}

function projectBtn() {
  let dropdown = document.getElementById("dropdownId");
  dropdown.classList.toggle("show");
  document.getElementById("dropdown-icon").classList.toggle("dropdown-rotate");
}

window.onload = darkMode;

window.transitionToPage = function (href) {
  document.querySelector("body").style.opacity = 0;
  setTimeout(function () {
    window.location.href = href;
  }, 500);
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("body").style.opacity = 1;
});

function showEndButton() {
  setTimeout(function() {
    document.querySelector('.end-button').style.opacity = 1;
  }, 6000);
}

function showResultsButton() {
  setTimeout(function() {
    document.querySelector('.results-button').style.opacity = 1;
  }, 4000); 
}


function simulateLoading(duration) {
  const progressBar = document.querySelector('.progress');
  let start = null;
  const easeInOutQuad = (t) => t<.5 ? 2*t*t : -1+(4-2*t)*t;
  
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = (timestamp - start) / duration;
    const easedProgress = easeInOutQuad(progress);
    progressBar.style.width = (easedProgress * 100) + '%';

    if (progress < 0.87) {
      requestAnimationFrame(step);
    } else {
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 1000); // Redirect 2 seconds after loading completes
    }
  }

  requestAnimationFrame(step);
}

function showCutscene() {
  setTimeout(function() {
    document.querySelector('.second').style.opacity = 1;
  }, 2000);
  setTimeout(function() {
    document.querySelector('.third').style.opacity = 1;
  }, 4000);
  setTimeout(function() {
    document.querySelector('.fourth').style.opacity = 1;
  }, 7000);
  setTimeout(function() {
    document.querySelector('.cutscene-button').style.opacity = 1;
  }, 10000);
}

function addToInventory(key, item) {
  localStorage.setItem(key, item);
}

function addToChoices(key, value) {
  localStorage.setItem(key, value);
}

function calculateResult() {
  let resultValue = 0;
  resultValue = localStorage.getItem('choice1') + localStorage.getItem('choice2') +
  localStorage.getItem('choice3') + localStorage.getItem('choice4') +
  localStorage.getItem('choice5') + localStorage.getItem('choice6') +
  localStorage.getItem('choice7') + localStorage.getItem('choice8');

  if (resultValue == 0) {
      transitionToPage('./character1.html');
  } else if (resultValue > 0 && resultValue <= 25) {
      transitionToPage('./character1.html');
  } else if (resultValue > 25 && resultValue <= 50) {
      transitionToPage('./character1.html');
  } else if (resultValue > 50 && resultValue <= 75) {
      transitionToPage('./character1.html');
  } else if (resultValue > 75) {
      transitionToPage('./character1.html');
  }
}