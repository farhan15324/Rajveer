const texts = ["Thumbnail Editor", "Video Editor", "Shorts Editor"]; 
let index = 0;
const typewriterElement = document.querySelector(".typewriter");

function typeEffect(text, i) {
  if (i < text.length) {
    typewriterElement.textContent += text.charAt(i);
    typewriterElement.style.color = "red"; 
    setTimeout(() => typeEffect(text, i + 1), 50);
  } else {
    setTimeout(() => deleteEffect(text), 1500);
  }
}

function deleteEffect(text) {
  if (text.length > 0) {
    typewriterElement.textContent = text.slice(0, -1);
    setTimeout(() => deleteEffect(typewriterElement.textContent), 30);
  } else {
    index = (index + 1) % texts.length;
    typewriterElement.style.color = getRandomColor();
    typeEffect(texts[index], 0);
  }
}

function getRandomColor() {

  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

typeEffect(texts[index], 0);

function toggleFullScreen(videoElement) {
  if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
  } else if (videoElement.mozRequestFullScreen) { 
      videoElement.mozRequestFullScreen();
  } else if (videoElement.webkitRequestFullscreen) { 
      videoElement.webkitRequestFullscreen();
  } else if (videoElement.msRequestFullscreen) { 
      videoElement.msRequestFullscreen();
  }
}
 {
   var sidemenu = document.getElementById("sidemenu")

   function openmenu(){
      sidemenu.style.right = "0";
   }

   function closemenu(){
      sidemenu.style.right = "-200px";
   }

 } 
