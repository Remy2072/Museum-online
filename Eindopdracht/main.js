/*===== CURSOR =====*/
var cursor = document.getElementById("cursor");
document.addEventListener("mousemove", cursorMovement);
function cursorMovement(e) {
  var cursorX = e.clientX;
  var cursorY = e.clientY;
  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";
  // console.log(cursorX + "px");
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
      question: "Welke van de 4 kleuren vind jij het mooist?",
      options: ["Rood.", "Groen.", "Blauw.", "Paars."],
      answer: [10, 7, 5, 1],
    },
    {
      question: "Welke kunstenaar spreekt jou het meest aan?",
      options: [
        "Rembrandt van Rijn.",
        "Vincent van Gogh. ",
        "Leonardo da Vinci.",
        "Picasso.",
      ],
      answer: [1, 5, 7, 10],
    },
    {
      question: "In hoeveel musea ben jij geweest in je leven?",
      options: ["Nog geen één.", "Meer dan 1.", "Meer dan 5.", "Meer dan 10."],
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
      alert("Selecteer één van de onderstaande antwoorden!");
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
    var header = $("<h2>Vraag " + (index + 1) + ":</h2>");
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
      "Dit kunstwerk ben jij, wil je het in het echt zien bezoek dan het Lam!"
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
