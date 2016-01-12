(function() {

	var app = angular.module('store-products', [ ]);

	app.directive('productInfo', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-info.html'
		};
	});

	app.directive('productDescription', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-description.html'
		};
	});

	app.directive('productSpecs', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-specs.html'
		};
	});

	app.directive('productReviews', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-reviews.html'
		};
	});

})();