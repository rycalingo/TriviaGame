// Scripts
var triviaGame = {

	init: function() {
		this.cacheDom();
		this.bindEvents();
	},
	cacheDom: function() {
		this.$game = $("#trivia_game");
		this.$startBtn = this.$game.find("#start_btn");
		this.$timeDisplay = this.$game.find("#time_display");
		this.$questionDisplay = this.$game.find("#question_display");
		this.$choiceDisplay = this.$game.find("#choice_display");
		this.$selChoice;

		this.$hiddenItems = this.$game.find(".HIDE");

		this.queryCount = 0;
		this.correctCount = 0;
		this.wrongCount = 0;
		this.missedCount = 0;
		this.timeCount = 0;
		this.isTimerON = 0;
		this.answer = null;
	},
	bindEvents: function() {
		this.$startBtn.on("click", this.startGame.bind(this) );
		this.$choiceDisplay.on("click", ".choice", this.checkAnswer.bind(this));
	},
	startGame: function() {
		this.$hiddenItems.removeClass("HIDE");
		this.$startBtn.addClass("HIDE");
		
		this.correctCount = 0;
		this.wrongCount = 0;
		this.missedCount = 0;
		
		this.displayQuery();
	},
	gameTimer: function() {
		if ( !this.isTimerON ) {
			this.isTimerON = 1;
			this.timer = setInterval(this.counter.bind(this), 1000);

		}else {
			this.isTimerON = 0;
			clearInterval(this.timer);

		}
	},
	counter: function() {
		if ( this.timeCount === 0 ) {
			this.missedCount++;
			return this.displayQuery();
		}
		this.timeCount--;
		this.$timeDisplay.text( this.timeCount );
	},
	displayQuery: function() {
		if (this.queryCount >= 10) return this.displayResults();

		this.timeCount = 15;
		this.$timeDisplay.text(this.timeCount);
		
		var queryStr = this.questionList[this.queryCount].query;
		this.$questionDisplay.text( queryStr );
		this.answer = this.questionList[this.queryCount].answer;
		
		this.$choiceDisplay.empty();
		
		var choiceList = this.questionList[this.queryCount].choices;

		for ( var c in choiceList ) {
			var div = $("<div>",{class: "choice"}).text(choiceList[c]);
			this.$choiceDisplay.append(div);
		}
		this.queryCount++;

		this.$selChoice = this.$choiceDisplay.find(".choice");

		this.gameTimer();
	},
	checkAnswer: function(event) {
		event.stopPropagation();
		var _this = $(event.target);

		if ( this.answer === _this.text() )  {
			this.correctCount++;
			this.displayResults();
		}else {
			this.wrongCount--;
			this.gameTimer();
		};
	},
	displayResults: function() {

		if (this.queryCount >= 10) {
			
			this.$choiceDisplay.append($("<div>").text(this.correctCount));
			this.$choiceDisplay.append($("<div>").text(this.wrongCount));
			this.$choiceDisplay.append($("<div>").text(this.missedCount));
			
			this.$start_btn.text("Restart  Game");
		}else {
			this.displayQuery();
		}
	},
	questionList: [
		{
			query: "What is the name given to Thor's hammer?",
			choices: ["Mythril", "Mjolnir", "Gram", "Gungnir"],
			answer: "Mjolnir"
		},
		{
			query: "Which of these is not one of the six infinity stones?",
			choices: ["Uru", "Orb", "Aether", "Tesseract"],
			answer: "Uru"
		},
		{
			query: "Captain America's shield is made of what fictional metal?",
			choices: ["Titanium", "Platinum", "Adamantium", "Vibranium"],
			answer: "Vibranium"
		},
		{
			query: "What city did Dr. Strange had to go to find The Ancient One?",
			choices: ["Janakpur", "Kamar-Taj ", "Shangri-La", "Kathmandu"],
			answer: "Kamar-Taj"
		},
		{
			query: "Bruce Banner was expose to what type of radiation causing him to turn into The Hulk?",
			choices: ["Gamma", "Omega", "Beta", "Delta"],
			answer: "Gamma"
		},
		{
			query: "Which infinity stone is inbeded in Vision's forehead?",
			choices: ["Space", "Mind", "Soul", "Power"],
			answer: "Mind"
		},
		{
			query: "Tony Stark calls his AI by what name?",
			choices: ["Alfred", "Friday", "Jarvis", "Penny"],
			answer: "Jarvis"
		},
		{
			query: "Hawkeye's real name is?",
			choices: ["Geln", "Jeff", "Clint", "Rickson"],
			answer: "Clint"
		},
		{
			query: "The Aether was given to who for safe keeping?",
			choices: ["The Collector", "SHIELD", "Hydra", "Nova Corps"],
			answer: "The Collector"
		},
		{
			query: "What part on New York City is Spiderman from?",
			choices: ["Brooklyn", "Harlem", "Bronx", "Queens"],
			answer: "Queens"
		}
	]
}; triviaGame.init();