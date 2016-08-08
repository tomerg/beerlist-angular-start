app.controller ('mainCtrl', function($scope, beers) {

  $scope.name = '';
  $scope.style = '';
  $scope.abv = '';
  $scope.image = '';
  $scope.beerList = beers;

  $scope.addBeer = function () {
    var name = $scope.name;
    var style = $scope.style;
    var abv = $scope.abv;
    var image = $scope.image;
    var list = $scope.beerList;

    list.push({
      name: name,
      style: style,
      abv: abv,
      image: image   
    });
    console.log(list);
  }

  $scope.remove = function($index){
    $scope.beerList.splice($index, 1);
  }

  // console.log('service', beers);

  // $scope.beers = beers;
  // console.log($scope.beers);

});