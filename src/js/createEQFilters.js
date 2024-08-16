export default function createEqFilters(audioContext) {
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

  return { bassFilter, midFilter, trebleFilter };
}
