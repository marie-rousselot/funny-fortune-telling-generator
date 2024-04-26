function generateFortune(event) {
  event.preventDefault();

  new Typewriter("#fortune", {
    strings: "Dear Gemini...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let fortuneFormElement = document.querySelector("#funny-fortune-generator");
fortuneFormElement.addEventListener("submit", generateFortune);
