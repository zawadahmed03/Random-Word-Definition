// Url for random word
const randApiUrl = "https://random-word-api.herokuapp.com/word";

// Fetch the random word
const getRand = async () => {
  const response = await fetch(randApiUrl, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  callDict(data);
};

// Get the definition of the random word
const callDict = async (word) => {
  const dictApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  // Make a GET request
  const response = await fetch(dictApiUrl, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  const definition = data[0].meanings[0].definitions[0].definition;
  showDef(definition);
};

// Update the html
const showDef = (definition) => {
  document.getElementById("definition").innerHTML = definition;
};

getRand();
