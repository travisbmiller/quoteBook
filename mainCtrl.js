app.controller('MainCtrl', function ($scope, dataService) {

 var getData = function () {
    $scope.quotes = dataService.getData()
 }

 getData();

$scope.addNewQuote = function() {
  dataService.addData($scope.addQuoteText, $scope.addQuoteAuthor);
  $scope.addQuoteText = ""
  $scope.addQuoteAuthor = ""
  $scope.addQuote = false;
}

$scope.removeThisQuote = function () {
  dataService.removeData($scope.quoteToRemove);
  $scope.quoteToRemove = "";
  $scope.removeQuote = false;
}




});