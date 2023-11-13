const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function setupGuesses(element, handleGuess) {
  // Loop over each letter
  alphabet.split('').forEach((letter) => {
  // Create a button
    const btn = document.createElement('button');
  // Set innertext to display letter
    btn.innerText = letter;
  // Attach event handler to `click`
    btn.addEventListener('click', (e) => handleGuess(e, letter));
  // Append button to element
    element.append(btn);
  });
}

export default setupGuesses;
