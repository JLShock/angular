(function(){

	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Skywalker',
			price: 5.95,
			color: 'Green',
			description: "The Skywalker gem is known to have special tactical powers.",
			canPurchase: true,
			soldOut: false,
		},
		{
			name: 'Vader',
			price: 9.95,
			color: 'Red',
			description: "The Vader gem is known to have special strength powers.",
			canPurchase: true,
			soldOut: false,
		},
		{
			name: 'Obi',
			price: 7.95,
			color: 'Blue',
			description: "The Obi gem is known to have special mind reading powers.",
			canPurchase: true,
			soldOut: false,
		},
	];

})();