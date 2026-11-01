const DURATION = 10_000;
const completed = new Set();
let activeTrial = null;

const startButtons = [...document.querySelectorAll('[data-start]')];
const reflection = document.querySelector('#reflection');
const reflectionFieldset = reflection.querySelector('fieldset');
const reflectionResult = reflection.querySelector('.reflection-result');
const guidedMessage = document.querySelector('.guided-message');

const guidedPrompts = [
  [0, 'The wait has started.'],
  [0.25, 'A quarter of the way there.'],
  [0.5, 'Halfway. Keep watching the rhythm.'],
  [0.75, 'Almost there.'],
  [0.92, 'Finishing now.']
];

function setButtonsDisabled(disabled) {
  startButtons.forEach((button) => {
    button.disabled = disabled || completed.has(button.dataset.start);
  });
}

function runTrial(name) {
  if (activeTrial || completed.has(name)) return;

  activeTrial = name;
  setButtonsDisabled(true);

  const trial = document.querySelector(`[data-trial="${name}"]`);
  const readout = document.querySelector(`[data-readout="${name}"]`);
  const status = document.querySelector(`[data-status="${name}"]`);
  const progress = document.querySelector(`[data-progress="${name}"]`);
  const start = performance.now();

  trial.classList.add('is-running');
  status.textContent = name === 'plain'
    ? 'Trial A is running. No progress information is available.'
    : 'Trial B is running. Progress is visible.';

  function tick(now) {
    const elapsed = Math.min(now - start, DURATION);
    const ratio = elapsed / DURATION;
    const remaining = Math.max(0, DURATION - elapsed);

    readout.textContent = (remaining / 1000).toFixed(1);
    if (progress) progress.style.width = `${ratio * 100}%`;

    if (name === 'guided') {
      const current = [...guidedPrompts].reverse().find(([threshold]) => ratio >= threshold);
      guidedMessage.textContent = current[1];
    }

    if (elapsed < DURATION) {
      requestAnimationFrame(tick);
      return;
    }

    completeTrial(name, trial, status, readout);
  }

  requestAnimationFrame(tick);
}

function completeTrial(name, trial, status, readout) {
  activeTrial = null;
  completed.add(name);
  trial.classList.remove('is-running');
  trial.classList.add('is-complete');
  readout.textContent = '0.0';
  status.textContent = `${name === 'plain' ? 'Trial A' : 'Trial B'} complete. Ten seconds elapsed.`;

  if (name === 'plain') {
    trial.querySelector('.plain-message').textContent = 'Complete.';
  } else {
    guidedMessage.textContent = 'Complete. Exactly ten seconds.';
  }

  setButtonsDisabled(false);

  if (completed.size === 2) {
    reflectionFieldset.disabled = false;
    reflection.querySelector('input').focus();
  }
}

startButtons.forEach((button) => {
  button.addEventListener('click', () => runTrial(button.dataset.start));
});

reflection.addEventListener('submit', (event) => {
  event.preventDefault();
  const choice = new FormData(reflection).get('felt-shorter');
  reflectionResult.textContent = choice
    ? `Recorded: ${choice}. This response stays in your browser and is not submitted anywhere.`
    : 'Choose one option before recording your impression.';
});

document.querySelector('.reset-button').addEventListener('click', () => {
  window.location.reload();
});
