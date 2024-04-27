function displayFortune(response) {
  console.log("fortune generated");
  new Typewriter("#fortune", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateFortune(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "fdo0da8da8fd60t560b33ec66f43f0c4";
  let prompt = `Generate a funny fortune telling related to ${instructionsInput.value}`;
  let context =
    "You are a funny fortune teller. Your mission is to generate a funny prediction according to my star sign. Be respectful and polite. Your answer must be short and fun and should include 3 different topics separated with a <br />: love, wealth and coding skills. Make sure to use the user instructions. Sign the fortune telling with 'Shecodes AI'in a <strong> at the end of the fortune telling and separate the signature with a <br />. If value entered is not a star sign, display 'Hem...sorry, I said enter YOUR STAR SIGN, try again 🤔";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let fortuneElement = document.querySelector("#fortune");
  fortuneElement.classList.remove("hidden");
  fortuneElement.innerHTML = `<div class="generating"> ⏳ Generating fortune about ${instructionsInput.value}</div>`;

  console.log("Generating fortune");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);

  axios.get(apiUrl).then(displayFortune);
}

let fortuneFormElement = document.querySelector("#funny-fortune-generator");
fortuneFormElement.addEventListener("submit", generateFortune);
