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
  updateHtml(data);
};

// Update the html
const updateHtml = (data) => {
  console.log(data);
  document.getElementById("word").innerHTML = data[0].word;
  document.getElementById("pos").innerHTML = data[0].meanings[0].partOfSpeech;
  document.getElementById("definition").innerHTML =
    data[0].meanings[0].definitions[0].definition;
};

getRand();
