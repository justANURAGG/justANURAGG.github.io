const typewriterText = [
    "Video Editor",
    "Thumbnail Designer",
    "TikToks Editor"
  ];
  
  let index = 0;
  let text = "";
  let isDeleting = false;
  let speed = 100;
  
  function typewriter() {
    const typewriterElement = document.getElementById("typewriter");
    const currentText = typewriterText[index];
  
    if (isDeleting) {
      text = currentText.substring(0, text.length - 1);
    } else {
      text = currentText.substring(0, text.length + 1);
    }
  
    typewriterElement.innerHTML = text;
  
    if (!isDeleting && text === currentText) {
      isDeleting = true;
      speed = 2000;
    } else if (isDeleting && text === "") {
      isDeleting = false;
      index++;
      if (index === typewriterText.length) {
        index = 0;
      }
      speed = 500;
    }
  
    setTimeout(typewriter, speed);
  }
  
  typewriter();
  
