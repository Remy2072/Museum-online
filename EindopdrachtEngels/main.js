/*===== CURSOR =====*/
var cursor = document.getElementById("cursor");
document.addEventListener("mousemove", cursorMovement);
function cursorMovement(e) {
  var cursorX = e.clientX;
  var cursorY = e.clientY;
  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";
  console.log(cursorX + "px");
}
/*===== MENU BUTTON=====*/
var navMenu = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    navMenu.classList.add("zichtbaar");
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    navMenu.classList.remove("zichtbaar");
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

// QUIZZZZZZ
(function () {
  var allQuestions = [
    {
      question: "Which of the 4 colors do you like best?",
      options: ["Red.", "Green.", "Blue.", "Purple."],
      answer: [10, 7, 5, 1],
    },
    {
      question: "Which artist appeals to you the most?",
      options: [
        "Rembrandt van Rijn.",
        "Vincent van Gogh. ",
        "Leonardo da Vinci.",
        "Picasso.",
      ],
      answer: [1, 5, 7, 10],
    },
    {
      question: "How many museums have you been to in your life?",
      options: [
        "Not one yet.",
        "More than 1.",
        "More than 5.",
        "More than 10.",
      ],
      answer: [7, 10, 1, 5],
    },
  ];

  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $("#quiz");

  nextQuestion();

  $("#next").click(function () {
    chooseOption();
    if (isNaN(selectOptions[quesCounter])) {
      alert("Select one of the answers below!");
    } else {
      quesCounter++;
      nextQuestion();
    }
  });

  $("#prev").click(function () {
    chooseOption();
    quesCounter--;
    nextQuestion();
  });

  function createElement(index) {
    var element = $("<div>", { id: "question" });
    var header = $("<h2>Question" + (index + 1) + ":</h2>");
    element.append(header);

    var question = $("<p>").append(allQuestions[index].question);
    element.append(question);

    var radio = radioButtons(index);
    element.append(radio);

    return element;
  }

  function radioButtons(index) {
    var radioItems = $("<ul>");
    var item;
    var input = "";
    for (var i = 0; i < allQuestions[index].options.length; i++) {
      item = $("<li>");
      input = '<input type="radio" name="answer" value=' + i + " />";
      input += allQuestions[index].options[i];
      item.append(input);
      radioItems.append(item);
    }
    return radioItems;
  }

  function chooseOption() {
    selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
  }

  function nextQuestion() {
    quizSpace.fadeOut(function () {
      $("#question").remove();
      if (quesCounter < allQuestions.length) {
        var nextQuestion = createElement(quesCounter);
        quizSpace.append(nextQuestion).fadeIn();
        if (!isNaN(selectOptions[quesCounter])) {
          $("input[value=" + selectOptions[quesCounter] + "]").prop(
            "checked",
            true
          );
        }
        if (quesCounter === 1) {
          $("#prev").show();
        } else if (quesCounter === 0) {
          $("#prev").hide();
          $("#next").show();
        }
      } else {
        var scoreRslt = displayResult();
        quizSpace.append(scoreRslt).fadeIn();
        $("#next").hide();
        $("#prev").hide();
      }
    });
  }

  function displayResult() {
    var score = $("<p>", { id: "question" });

    var correct = 0;
    for (var i = 0; i < selectOptions.length; i++) {
      correct += allQuestions[i].answer[selectOptions[i]];
    }

    score.append(
      "This work of art is you, if you want to see it in real life, visit the Lam!"
    );
    if (correct > 0 && correct < 19) {
      score.append('<img src="../fotos/download.jpeg" alt="download.jpeg"/>');
    }

    if (correct > 20 && correct < 29) {
      score.append('<img src="../fotos/foto2.jpeg" alt="foto2.jpeg"/>');
    }

    if (correct === 30) {
      score.append('<img src="../fotos/foto3.jpeg" alt="foto3.jpeg"/>');
    }

    return score;
  }
})();
