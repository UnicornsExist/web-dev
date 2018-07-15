// DOM objects
const adjective = document.getElementById('adjective');
const input = document.getElementById('input');
const container = document.getElementById('words-container');
const button = document.getElementById('button');
// URL and query parameters
const url = 'https://api.datamuse.com/words'
const queryParams = '?rel_jja='


// Listening events
// Button click event listener
button.addEventListener('click', () => {
  createRequest();
});
// ENTER key pressed event listener
input.addEventListener('keydown', (event) => {
  // Checking is the ENTER key was pressed (ENTER === 13 keyCode)
  if (event.keyCode === 13) {
    // If ENTER key was pressed
    createRequest();
  }
});

// Updating adjective
function updateAdj() {
  console.log(input.value)
  adjective.textContent = input.value;
};

// Creating content
function createContent(response) {
  let numberOfWords = response.length;
  let words = [];

  for (let i = 0; i < numberOfWords; i++) {
    words.push(response[i].word)
  };

  container.innerHTML = words.join('\n')
};

// Getting response using fetch
function createRequest() {
  let wordQuery = input.value
  let endpoint = `${url}${queryParams}${wordQuery}`

  fetch(endpoint).then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error('Woops')
  }, networkError => {
    console.log(networkError.message)
  }).then(jsonResponse => {createContent(jsonResponse)})
}
