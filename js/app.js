(function(){

	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Skywalker',
			price: 5,
			color: 'Green',
			description: "The Skywalker gem is known to have special tactical powers.",
			canPurchase: true,
			soldOut: false,
			image: 'http://www.jewelrynotes.com/jn/wp-content/uploads/2012/08/emerald-gemstone-300x200.jpg',
		},
		{
			name: 'Vader',
			price: 9.95,
			color: 'Red',
			description: "The Vader gem is known to have special strength powers.",
			canPurchase: true,
			soldOut: false,
			image: 'http://www.catzia.com/SMCosplay-RedGemBrooch.jpg',
		},
		{
			name: 'Obi',
			price: 7.50,
			color: 'Blue',
			description: "The Obi gem is known to have special mind reading powers.",
			canPurchase: true,
			soldOut: false,
			image: 'http://gemstoneguru.com/wp-content/uploads/2013/04/Tanzanite-Gemstone.png',
		},
	];

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function (setTab) {
			this.tab = setTab;
		}

		this.isSelected = function (checkTab) {
			return this.tab === checkTab;
		}
	});

})();