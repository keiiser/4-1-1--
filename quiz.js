var currentQuestion = 0;
var score = 0;
var container = document.getElementById("question");
var choicesContainer = document.getElementById("choices");

function displayQuestion() {
  var question = questions[currentQuestion];
  container.textContent = question.question;
  
  // 選択肢を表示
  choicesContainer.innerHTML = "";
  for (var i = 0; i < question.choices.length; i++) {
    var choice = document.createElement("button");
    choice.textContent = question.choices[i];
    choice.value = i;
    choice.onclick = checkAnswer;
    choicesContainer.appendChild(choice);
  }
}

function checkAnswer() {
  var selectedChoice = parseInt(this.value);
  var question = questions[currentQuestion];
  
  // 回答が正解か判定
  if (selectedChoice === question.answer) {
    score++;
  }
  
  currentQuestion++;
  
  // ゲーム終了時の処理
  if (currentQuestion === questions.length) {
    endGame();
  } else {
    displayQuestion();
  }
}

function endGame() {
  container.textContent = "クイズ終了！スコア: " + score + "/" + questions.length;
  choicesContainer.innerHTML = "";
}
