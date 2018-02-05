let score = 0;
let questionIndex = 0;

// generate questions template
function generateQuestionTemplate() {
	return `
		<div class="image-box">
			<img src=${questions[questionIndex].image} alt='${questions[questionIndex].name}' class="img-responsive">
		</div>
		<div class="content-box responsive">
			<h2>${questions[questionIndex].text}</h2>
			<form class="answer-box" role="form">
				<fieldset>
					<div class="answer">
						<input type="radio" name="answer" id="answer-choice-1" value="${questions[questionIndex].answer[0]}" required>
						<label for="answer-choice-1">${questions[questionIndex].answer[0]}</label>
					</div>
					<div class="answer">
						<input type="radio" name="answer" id="answer-choice-2" value="${questions[questionIndex].answer[1]}">
						<label for="answer-choice-2">${questions[questionIndex].answer[1]}</label>	
					</div>
					<div class="answer">
						<input type="radio" name="answer" id="answer-choice-3" value="${questions[questionIndex].answer[2]}">
						<label for="answer-choice-3">${questions[questionIndex].answer[2]}</label>	
					</div>	
					<div class="answer">
						<input type="radio" name="answer" id="answer-choice-4" value="${questions[questionIndex].answer[3]}">
						<label for="answer-choice-4">${questions[questionIndex].answer[3]}</label>
					</div>
				</fieldset>
				<div class="answer-submit">
						<button type="submit" class="submit-btn js-submit-btn">Submit</button>
				</div>
			</form>
		</div>`;
}

// generate scoring banner template
function generateBannerTemplate() {
	return `
		<ul>
			<li>Question ${questionIndex + 1}</li>
			<li>Score: ${score}/10</li>
		</ul>`;
}

// generate feedback page template
function generateFeedBackTemplate() {
	return `
		<h3 class="answer-result"></h3>
			<p>${questions[questionIndex].feedback}</p>
		<div class="answer-submit">
			<button type="button" class="next-btn js-next-btn">Next</button>
		</div>`;
}

// generate end game page template
function generateEndGameTemplate() {
	return `
		<div class="end-page">
			<h1 class="end-game-display">Your score: <span>${score}</span>/10</h1>
			<h2 class="result-message"></h2>
			<div class="end-game-options">
				<button type="button" class="restart-btn js-restart-button">Restart</button> 
				<br>
				<span>or</span>
				<br>
				<button type="button" class="discover-btn js-discover-button">Explore</button> 
			</div>
		</div>`;
}

// render scoring banner
function renderBanner() {
	$("header").html(generateBannerTemplate);
}

// render quiz page
function renderQuiz() {	
	$("main").empty();
	if (questionIndex < questions.length) {
		$("main").html(generateQuestionTemplate);
	} else {
		renderEndGame()
	};
}

// handle start button clicked
function handleStartButtonClicked() {
	$("body").on("click", ".js-start-btn", function(event) {
		event.preventDefault();
		$("body").toggleClass("game-mode");
		renderBanner();
		renderQuiz();
	});
}

// handle answer submit
function handleAnswerSubmit() {
	$("body").on("submit", ".answer-box", function(event) {
		event.preventDefault();
		const userAnswer = $("input[name=answer]:checked").val();
		const correctAnswer = questions[questionIndex].correctAnswer;
		
		renderFeedBack();
		if (userAnswer === correctAnswer) {
			score++;
			$(".answer-result").text("Correct!");
			renderBanner();
		} else 
			$(".answer-result").text("Incorrect.");
	});
}

// render feedback screen
function renderFeedBack() {
	$(".content-box").empty();
	$(".content-box").html(generateFeedBackTemplate);
}

// handle next question button clicked
function handleNextClicked() {
	$("body").on("click", ".js-next-btn", function() {
		questionIndex++;
		renderBanner();
		renderQuiz();
	});
}

// render end game screen
function renderEndGame() {
	$(".banner").html("");
	$("main").html(generateEndGameTemplate);
	renderResultMessage();
}

// render result message
function renderResultMessage() {
	if (score > 9) {
		$(".result-message").text("Excellent!")
	} else if (score > 7) {
		$(".result-message").text("Good Job!")
	} else 
		$(".result-message").text("Care to try again?")
}

// handle new game button click
function handleNewGameClicked() {
	$("body").on("click", ".js-restart-button", function() {
		score = 0;
		questionIndex = 0;
		renderQuiz();
		renderBanner();
	});
}

// handle explore button click
function handleExploreClicked() {
	$("body").on("click", ".js-discover-button", function() {
		window.open("https://www.google.com/culturalinstitute/beta/");
	});
}

// handle quiz app
function handleQuizPage () {
	handleStartButtonClicked();
	handleAnswerSubmit();
	handleNextClicked();
	handleNewGameClicked()
	handleExploreClicked();
}

$(handleQuizPage);