const app = document.getElementById("app");
let currentExercise = 0;

const exercises = [

  // EXERCISE 1
  {
    type: "multiple",
    title: "Exercise 1 — Identify and Choose",
    task: "Choose the correct option.",
    questions: [
      {
        q: "If you ___ ice, it melts.",
        options: ["heat", "will heat"],
        correct: 0
      },
      {
        q: "If she ___ enough, she will fail the exam.",
        options: ["doesn’t study", "won’t study"],
        correct: 0
      },
      {
        q: "If people ___ too much sugar, they get tired quickly.",
        options: ["eat", "will eat"],
        correct: 0
      },
      {
        q: "If we ___ early, we will go for a walk.",
        options: ["finish", "will finish"],
        correct: 1
      },
      {
        q: "If water ___ 100°C, it boils.",
        options: ["reaches", "will reach"],
        correct: 0
      }
    ]
  },

  // EXERCISE 2
  {
    type: "fill",
    title: "Exercise 2 — Complete the Sentences",
    task: "Complete the sentences using the correct form.",
    questions: [
      "If you ________ (press) this button, the machine stops.",
      "If it ________ (rain) tonight, we ________ (stay) at home.",
      "If students ________ (not follow) the rules, they get punished.",
      "If I ________ (see) him later, I ________ (tell) him the news.",
      "If people ________ (not get) enough sleep, they feel exhausted."
    ]
  },

  // EXERCISE 3
  {
    type: "transform",
    title: "Exercise 3 — Sentence Transformation",
    task: "Rewrite using zero or first conditional.",
    questions: [
      "You don’t wear a helmet. You get injured.",
      "She studies harder. She will pass the exam.",
      "People waste water. There are shortages.",
      "I don’t have time. I won’t join you.",
      "You heat oil too much. It burns."
    ]
  },

  // EXERCISE 4
  {
    type: "error",
    title: "Exercise 4 — Error Correction",
    task: "Find and correct the mistake.",
    questions: [
      "If you will mix red and blue, you get purple.",
      "If he doesn’t hurry, he miss the train.",
      "If people will eat less fast food, they are healthier.",
      "If I finish my homework early, I go to the gym.",
      "If water freeze, it expands."
    ]
  },

  // EXERCISE 5
  {
    type: "creative",
    title: "Exercise 5 — Sentence Creation",
    task: "Complete the sentences logically using zero or first conditional.",
    questions: [
      "If people continue to ignore climate change, ________.",
      "If you feel stressed before an exam, ________.",
      "If students use their phones during lessons, ________.",
      "If I don’t finish this project on time, ________.",
      "If people exercise regularly, ________."
    ]
  }
];

function renderExercise() {
  const ex = exercises[currentExercise];
  app.innerHTML = `<h2>${ex.title}</h2><p>${ex.task}</p>`;

  if (ex.type === "multiple") {
    ex.questions.forEach(q => {
      app.innerHTML += `<p>${q.q}</p>`;
      q.options.forEach((opt, i) => {
        app.innerHTML += `<button onclick="checkAnswer(${i}, ${q.correct})">${opt}</button>`;
      });
    });
  }

  if (["fill", "transform", "error", "creative"].includes(ex.type)) {
    ex.questions.forEach(q => {
      app.innerHTML += `<p>${q}</p><input placeholder="Your answer">`;
    });
  }

  app.innerHTML += `<button onclick="nextExercise()">Next Exercise</button>`;
}

function checkAnswer(choice, correct) {
  alert(choice === correct ? "Correct ✔" : "Try again ✖");
}

function nextExercise() {
  currentExercise++;
  if (currentExercise < exercises.length) {
    renderExercise();
  } else {
    app.innerHTML = "<h2>Well done! You have completed all exercises 🎉</h2>";
  }
}

renderExercise();
