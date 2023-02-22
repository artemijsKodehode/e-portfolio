const text = "Please feel free to contact me if you need any further information. Here is my email address: artemijs.kodehode@gmail.com";
let i = 0;
const speed = 50;

function type() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, speed);
  } else {
    i = 0;
    setTimeout(erase, speed);
  }
}

function erase() {
  if (i >= 0) {
    const textContent = text.substring(0, i);
    document.getElementById("text").innerHTML = textContent;
    i--;
    setTimeout(erase, speed);
  } else {
    setTimeout(type, speed);
  }
}

type();