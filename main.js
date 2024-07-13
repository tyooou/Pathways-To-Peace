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
  let choices = document.querySelectorAll(".choice-modal");
  for (var i = 0; i < choices.length; i++) {
    choices[i].style.display = "none";
  }
}

function calculateResult() {
  let resultValue = 0;
  resultValue = Number(localStorage.getItem('choice1')) + Number(localStorage.getItem('choice2')) +
  Number(localStorage.getItem('choice3')) + Number(localStorage.getItem('choice4')) +
  Number(localStorage.getItem('choice5')) + Number(localStorage.getItem('choice6')) +
  Number(localStorage.getItem('choice7')) + Number(localStorage.getItem('choice8'));
  console.log(resultValue)
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
  } else {
    transitionToPage('./character1.html');
  }
}

function downloadImg() {
    html2canvas(document.getElementById('results-container')).then(function(canvas) {
      // Create a link element
      let link = document.createElement('a');
      // Set the download attribute with a filename
      link.download = 'PathwayOfPeaceResults.png';
      // Convert the canvas to a data URL and set it as the href attribute
      link.href = canvas.toDataURL();
      // Append the link to the body (required for Firefox)
      document.body.appendChild(link);
      // Trigger a click on the link to download the image
      link.click();
      // Remove the link from the document
      document.body.removeChild(link);
    });
  }

function showChoices(key) {
  let choices = document.querySelectorAll(".choice-modal");
  if (key == 1) {
    choices = document.querySelectorAll(".coins");
  } else if (key == 2) {
    choices = document.querySelectorAll(".clothing");
  } else if (key == 3) {
    choices = document.querySelectorAll(".mirror");
  } else if (key == 4) {
    choices = document.querySelectorAll(".food");
  } else if (key == 5) {
    choices = document.querySelectorAll(".wheel");
  } else if (key == 6) {
    choices = document.querySelectorAll(".shoes");
  } else if (key == 7) {
    choices = document.querySelectorAll(".laptop");
  } else if (key == 8) {
    choices = document.querySelectorAll(".doll");
  }
  for (var i = 0; i < choices.length; i++) {
    choices[i].style.display = "block";
  }
}