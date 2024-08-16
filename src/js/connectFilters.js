export default function connectFilters(
  source,
  bassFilter,
  midFilter,
  trebleFilter,
  audioContext
) {
  source.connect(bassFilter);
  bassFilter.connect(midFilter);
  midFilter.connect(trebleFilter);
  trebleFilter.connect(audioContext.destination);
}
