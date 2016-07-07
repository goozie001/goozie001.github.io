var myApp = angular.module('myApp', []);
myApp.controller('MainCtrl', ['$scope', '$document', function($scope, $document) {

	$scope.activeId = -1;
	
	$scope.activate = function(chosen) {
		$scope.activeId = chosen;
	}
	
	$document.ready(function() {
		$('.modal-trigger').leanModal({
			complete: function() { 
				$scope.activeId = -1;
				$scope.$apply();
			} // Callback for Modal close
		}
	  );
	});
}]);