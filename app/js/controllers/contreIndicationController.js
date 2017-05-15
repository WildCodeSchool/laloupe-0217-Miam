angular.module('app')

    .filter('filtersearch', function() {
        return function(arr, searchString) {
            if (!searchString) {
                return arr;
            }
            var result = [];
            angular.forEach(arr, function(item) {
                if (item.string.indexOf(searchString) !== -1) {
                    result.push(item);
                }
            });
            return result;
        };
    })

    .controller('ContreIndicationController', function($scope) {

            $scope.items = [{
                    string: 'mia'
                },
            ];
            $scope.searching = function() {
                if ($scope.searchString.length > 0) {
                    $scope.vis = {
                        'visibility': 'visible'
                    };
                } else {
                    $scope.vis = {
                        'visibility': 'hidden'
                    };
                }
                $scope.changecursor = function($event) {
                    if ($event.keyCode == 40) {
                        document.getElementById("select").focus();
                        if (document.getElementById("select").selectedIndex > 0) {} else {
                            document.getElementById("select").selectedIndex = 0;
                        }
                    }
                    if ($event.keyCode == 38) {
                        if (document.getElementById("select").selectedIndex === 0) {
                            document.getElementById("input").focus();
                        }
                    }
                };
                $scope.copy = function($event) {
                    if ($event.keycode == 38) {} else if ($event.keycode == 40) {} else {
                        $scope.searchString = $scope.txt;
                        document.getElementById("input").focus();
                    }
                    $scope.vis = {
                        'visibility': 'hidden'
                    };
                };

            };
          });
