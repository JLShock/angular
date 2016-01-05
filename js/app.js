(function(){

	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.product = gem;
	});

	var gem = {
		name: 'Skywalker',
		price: 5.95,
		description: "The Skywalker gem's rare green hue is known to have special powers.",
		canPurchase: true,
		soldOut: false
	};

})();