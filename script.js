// script.js

document.addEventListener("DOMContentLoaded", function () {
    var playButton = document.getElementById("play-button");
  
    if (playButton) {
      // Use the data-audio attribute from the button as the source for the audio.
      var audioSrc = playButton.getAttribute("data-audio") || "audio/sample.mp3";
      var audio = new Audio(audioSrc);
      var isPlaying = false;
  
      playButton.addEventListener("click", function () {
        if (!isPlaying) {
          audio.play();
          playButton.textContent = "Pause";
          isPlaying = true;
        } else {
          audio.pause();
          playButton.textContent = "Play";
          isPlaying = false;
        }
      });
    }
  });
  