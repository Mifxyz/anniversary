function revealMessage() {
  const hiddenMessage = document.getElementById("hiddenMessage");
  hiddenMessage.style.display = "block";
}

function showThoughts() {
  const thoughts = document.getElementById("thoughts");
  thoughts.style.display = "block";

  // Tambahkan efek visual (opsional)
  thoughts.style.transition = "all 0.5s ease-in-out";
  thoughts.style.opacity = "1";
}

window.onload = function () {
  const music = document.getElementById("romanticMusic");

  // Set waktu mulai pada 43 detik
  music.currentTime = 1.13;

  // Putar musik secara otomatis
  music.play();
};
