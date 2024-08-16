import './styles.css';
import './js/input-knobs.js';
import getDomElements from './js/getDomElements';
import createAudioContext from './js/createAudioContext';
import createEqFilters from './js/createEQFilters';
import connectFilters from './js/connectFilters';
import setupEventListeners from './js/setupEventListeners';

function initilizedecks(deckNo) {
  const elements = getDomElements(deckNo);
  const { audioElement, audioContext, source } = createAudioContext(
    deckNo,
    elements.volumeControl
  );
  const filters = createEqFilters(audioContext);

  connectFilters(
    source,
    filters.bassFilter,
    filters.midFilter,
    filters.trebleFilter,
    audioContext
  );
  setupEventListeners(
    elements,
    audioElement,
    audioContext,
    filters,
    deckNo
  );

  audioElement.preservesPitch = false;

  audioElement.addEventListener('timeupdate', () => {
    const totalDuration = audioElement.duration;
    const currentTime = audioElement.currentTime;
    if (totalDuration > 0) {
      const progressPercentage = (currentTime / totalDuration) * 100;
      elements.arm.style.cssText = `transform:rotate(${
        20 + (currentTime / totalDuration) * 18
      }deg )`;
      const record = document.querySelector(
        `.deck-${deckNo} .record`
      );
      record.style.cssText = `transform:rotate(${
        (currentTime / totalDuration) * 360
      }deg)`;
      elements.seekControl.value = progressPercentage;
    }
  });
}

// Setup controls for the first audio element
initilizedecks(1);

// Setup controls for the second audio element
initilizedecks(2);
