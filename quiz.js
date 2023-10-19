var questions = [
  {
    question: "最も人口の多い国はどれ？",
    choices: ["アメリカ", "中国", "日本", "ブラジル"],
    answer: 1
  },
  {
    question: "「ハリーポッター」シリーズの著者は誰？",
    choices: ["J.K.ローリング", "J.R.R.トールキン", "C.S.ルイス", "ロアルド・ダール"],
    answer: 0
  },
  // 他の質問を追加することもできます
];


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
