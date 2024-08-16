export default function getDomElements(deckNo) {
  return {
    audioUpload: document.getElementById(`audioUpload-${deckNo}`),
    speedControl: document.getElementById(`speedControl-${deckNo}`),
    trackLabel: document.getElementById(`text-${deckNo}`),
    volumeControl: document.getElementById(`volumeControl-${deckNo}`),
    arm: document.getElementById(`arm-${deckNo}`),
    playPauseButton: document.getElementById(`stop-start-${deckNo}`),
    seekControl: document.getElementById(`seekControl-${deckNo}`),
    bassControl: document.getElementById(`low-eq-${deckNo}`),
    midControl: document.getElementById(`med-eq-${deckNo}`),
    trebleControl: document.getElementById(`hi-eq-${deckNo}`),
  };
}
