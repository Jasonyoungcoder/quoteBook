
angular.module('quoteBook')

.service('dataService', [function(){

	var quotes = [  // would use `quote`, `author` pairs, except lazy //

		'Life isn\'t about getting and having, it\'s about giving and being.  - Kevin Kruse',
		'Whatever the mind of man can conceive and believe, it can achieve  - Napoleon Hill',
		'Strive not to be a success, but rather to be of value. - Albert Einstein',
		'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference. - Robert Frost',
		'The most difficult thing is the decision to act, the rest is merely tenacity. - Amelia Earhart',
		'Life is what happens to you while you\'re busy making other plans. - John Lennon',
		'What even is a jQuery? - Tyler McGinnis'
	];

	this.getQuotes = function(){ return quotes };
	this.addQuote = function(q){ quotes.push(q) };
	this.delQuote = function(q){
		var idx = quotes.indexOf(q);
		idx >= 0 && quotes.splice(idx, 1);
	};

}]);