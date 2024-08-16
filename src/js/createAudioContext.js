export default function createAudioContext(deckNo, volumeControl) {
  const audioElement = document.createElement('audio');
  audioElement.id = `audioElement-${deckNo}`;
  audioElement.volume = volumeControl.value;

  const audioContext = new (window.AudioContext ||
    window.webkitAudioContext)();
  const source = audioContext.createMediaElementSource(audioElement);

  return { audioElement, audioContext, source };
}
