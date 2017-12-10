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

		this.$hiddenItems = this.$game.find(".HIDE");

		this.qCount = 0;
		this.correctCount = 0;
		this.wrongCount = 0;
		this.timeCount = 20;
	},
	bindEvents: function() {
		this.$startBtn.on("click", this.startGame.bind(this) )
	},
	startGame: function() {
		this.$hiddenItems.removeClass("HIDE");
		this.$startBtn.addClass("HIDE");
	},
	build: function() {
		// var queryItem = question[i]
	},
	question: [
		{
			query: "The name given to Thor's hammer is?",
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