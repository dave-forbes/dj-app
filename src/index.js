import './styles.css';
import './input-knobs.js';

function setupAudioControls(
  uploadId,
  audioId,
  speedControlId,
  textId,
  volumeControlId,
  armId,
  stopStartId,
  deckNo
) {
  const audioUpload = document.getElementById(uploadId);
  const audioElement = document.getElementById(audioId);
  const speedControl = document.getElementById(speedControlId);
  const volumeControl = document.getElementById(volumeControlId);
  const arm = document.getElementById(armId);
  const playPauseButton = document.getElementById(stopStartId);

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
      const text = document.querySelector(textId);
      text.textContent = file.name;
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
}

// Setup controls for the first audio element
setupAudioControls(
  'audioUpload-1',
  'audioElement-1',
  'speedControl-1',
  '#text-1',
  'volumeControl-1',
  'arm-1',
  'stop-start-1',
  1
);

// Setup controls for the second audio element
setupAudioControls(
  'audioUpload-2',
  'audioElement-2',
  'speedControl-2',
  '#text-2',
  'volumeControl-2',
  'arm-2',
  'stop-start-2',
  2
);
