import './styles.css';
import './input-knobs.js';
import initializeEQ from './eq.js';

  const audioUpload = document.getElementById(
    `audioUpload-${deckNo}`
  );
  const audioElement = document.getElementById(
    `audioElement-${deckNo}`
  );
  const speedControl = document.getElementById(
    `speedControl-${deckNo}`
  );
  const trackLabel = document.getElementById(`text-${deckNo}`);
  const volumeControl = document.getElementById(
    `volumeControl-${deckNo}`
  );
  const arm = document.getElementById(`arm-${deckNo}`);
  const playPauseButton = document.getElementById(
    `stop-start-${deckNo}`
  );

  audioElement.volume = volumeControl.value;

  volumeControl.addEventListener('input', function () {
    audioElement.volume = this.value;
  });

  audioUpload.addEventListener('change', function () {
    const files = this.files;
    if (files.length > 0) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      audioElement.src = url;
      audioElement.load();
      trackLabel.textContent = file.name;
      arm.style.cssText = `transform:rotate(0deg )`;
      if (arm.classList.contains('play'))
        arm.classList.remove('play');
      playPauseButton.textContent = 'Play';
    }
  });

  speedControl.addEventListener('input', function () {
    audioElement.playbackRate = this.value;
  });

  audioElement.preservesPitch = false;

  audioElement.addEventListener('timeupdate', () => {
    const totalDuration = audioElement.duration;
    const currentTime = audioElement.currentTime;
    // Check if duration is available
    if (totalDuration > 0) {
      // Calculate the percentage of the current progress
      const progressPercentage = (currentTime / totalDuration) * 18;
      arm.style.cssText = `transform:rotate(${
        20 + progressPercentage
      }deg )`;
      const record = document.querySelector(
        `.deck-${deckNo} .record`
      );
      record.style.cssText = `transform:rotate(${
        progressPercentage * 360
      }deg)`;
    }
  });

  playPauseButton.addEventListener('click', () => {
    const arm = document.querySelector(`#arm-${deckNo}`);
    const audioElement = document.querySelector(
      `#audioElement-${deckNo}`
    );
    const record = document.querySelector(`.deck-${deckNo} .record`);
    arm.classList.toggle('play');
    record.classList.toggle('play');
    if (arm.classList.contains('play')) {
      audioElement.play();
      playPauseButton.textContent = 'Stop';
    } else {
      audioElement.pause();
      playPauseButton.textContent = 'Play';
    }
  });

  initializeEQ(deckNo);
}

// Setup controls for the first audio element
initilizedecks(1);

// Setup controls for the second audio element
initilizedecks(2);
