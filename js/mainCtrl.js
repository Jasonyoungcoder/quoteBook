

angular.module('quoteBook')

.controller('mainCtrl', ['$scope', 'dataService', function(s, svc){

	s.quotes = svc.getQuotes();

	s.showAdd = false;
	s.showRemove = false;
	s.showFilter = false;

	s.toggleAdd = function(){ s.showAdd = !s.showAdd; };
	s.toggleRemove = function(){ s.showRemove = !s.showRemove };
	s.toggleFilter = function(){ s.showFilter = !s.showFilter };

	s.add = function(){
		if (s.keyEvent.keyCode === 13){
			svc.addQuote(s.quoteToAdd);
			s.quoteToAdd = '';
			s.showAdd = false;
		};
	}

	s.remove = function(){
		if (s.keyEvent.keyCode === 13){
			svc.delQuote(s.quoteToRemove);
			s.quoteToRemove = '';
			s.showRemove = false;
		}
	}

}]);