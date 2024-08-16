export default function setupEventListeners(
  elements,
  audioElement,
  audioContext,
  filters,
  deckNo
) {
  const { bassFilter, midFilter, trebleFilter } = filters;
  const {
    volumeControl,
    audioUpload,
    speedControl,
    arm,
    playPauseButton,
    seekControl,
    bassControl,
    midControl,
    trebleControl,
    trackLabel,
  } = elements;

  volumeControl.addEventListener('input', () => {
    audioElement.volume = volumeControl.value;
  });

  audioUpload.addEventListener('change', () => {
    const files = audioUpload.files;
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

  speedControl.addEventListener('input', () => {
    audioElement.playbackRate = speedControl.value;
  });

  seekControl.addEventListener('input', () => {
    const seekTo = (seekControl.value / 100) * audioElement.duration;
    audioElement.currentTime = seekTo;
  });

  playPauseButton.addEventListener('click', () => {
    arm.classList.toggle('play');
    const record = document.querySelector(`.deck-${deckNo} .record`);
    record.classList.toggle('play');
    if (arm.classList.contains('play')) {
      audioContext.resume().then(() => {
        audioElement.play();
      });
      playPauseButton.textContent = 'Stop';
    } else {
      audioElement.pause();
      playPauseButton.textContent = 'Play';
    }
  });

  bassControl.addEventListener('input', () => {
    bassFilter.gain.setValueAtTime(
      parseFloat(bassControl.value),
      audioContext.currentTime
    );
  });

  midControl.addEventListener('input', () => {
    midFilter.gain.setValueAtTime(
      parseFloat(midControl.value),
      audioContext.currentTime
    );
  });

  trebleControl.addEventListener('input', () => {
    trebleFilter.gain.setValueAtTime(
      parseFloat(trebleControl.value),
      audioContext.currentTime
    );
  });
}
