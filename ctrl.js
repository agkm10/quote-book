angular.module('myApp').controller('mainCtrl', function($scope, quoteDataSvc) {
    $scope.test = "hello"
    $scope.checkQuote = quoteDataSvc.quotes;

    $scope.addQuote = function () {
      var newQuote = {text: $scope.quoteText, author: $scope.quoteAuthor};
      quoteDataSvc.addNewQuote(newQuote);
    }
    $scope.removeQuote = function(quoteToDelete) {
      quoteDataSvc.removeSomeQuote(quoteToDelete);
    }
})
