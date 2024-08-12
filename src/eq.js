function initializeEQ(deckNo) {
  const audio = document.getElementById(`audioElement-${deckNo}`);
  const bassControl = document.getElementById(`low-eq-${deckNo}`);
  const midControl = document.getElementById(`med-eq-${deckNo}`);
  const trebleControl = document.getElementById(`hi-eq-${deckNo}`);

  const audioContext = new (window.AudioContext ||
    window.webkitAudioContext)();
  const source = audioContext.createMediaElementSource(audio);

  // Create three Biquad filters for bass, mid, and treble
  const bassFilter = audioContext.createBiquadFilter();
  bassFilter.type = 'lowshelf';
  bassFilter.frequency.setValueAtTime(200, audioContext.currentTime);
  bassFilter.gain.setValueAtTime(0, audioContext.currentTime);

  const midFilter = audioContext.createBiquadFilter();
  midFilter.type = 'peaking';
  midFilter.frequency.setValueAtTime(1000, audioContext.currentTime);
  midFilter.gain.setValueAtTime(0, audioContext.currentTime);

  const trebleFilter = audioContext.createBiquadFilter();
  trebleFilter.type = 'highshelf';
  trebleFilter.frequency.setValueAtTime(
    3000,
    audioContext.currentTime
  );
  trebleFilter.gain.setValueAtTime(0, audioContext.currentTime);

  // Connect filters
  source.connect(bassFilter);
  bassFilter.connect(midFilter);
  midFilter.connect(trebleFilter);
  trebleFilter.connect(audioContext.destination);

  // Update EQ when controls change
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

export default initializeEQ;
