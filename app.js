function askQuestions() {
  let username = prompt("Hello, what is your name?");
  while (!(isNaN(username) === true)) {
    username = prompt("Is your name a number? Please try that again.");
  }

  let mood = prompt("How are you feeling today?");
  while (!(isNaN(mood) === true)) {
    mood = prompt("Sorry, tell me how you're feeling again?");
  }

  let breakfast = prompt("What did you have for breakfast?");
  while (!(isNaN(breakfast) === true)) {
    breakfast = prompt("Is that food? Try again.");
  }

  let color = prompt("What is your favourite colour?");
  while (!(isNaN(color) === true)) {
    color = prompt("Try telling me your favourite colour again...");
  }

  let outcome =
    "Oh hello " +
    username +
    ", I don't care that you feel " +
    mood +
    ". Do you think you're cool for having " +
    breakfast +
    " for breakfast? " +
    "Oh and what a suprise! Of course your favourite color is " +
    color +
    ". How basic of you " +
    username +
    "!";

  document.getElementById("answer").innerHTML = outcome;
}
