function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "5a8021b5bae08tb216f43a8oa73a3099";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poet. Yout mission is to write a 4 line poem in basic html and separate each line with a <br />. Make sure you follow the user instructions. Sign the end of the poem with 'SheCodes AI' inside a <strong> element. Do not include a poem title.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
