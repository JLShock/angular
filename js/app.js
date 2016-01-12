(function() {

	var app = angular.module('store', ['store-products']);

	// Array of Products
	var gems = [
		{
			name: 'Skywalker',
			price: 5,
			color: 'Green',
			description: "The Skywalker gem is known to have special tactical powers.",
			canPurchase: true,
			soldOut: false,
			image: 'https://ezodiac.files.wordpress.com/2013/02/emerald-birthstones.jpg',
			reviews: [
				{
					stars: 4,
					body: "This Skywalker gem is so cool!!!",
					author: "john@gmail.com"
				},
				{
					stars: 3,
					body: "It was worth the purchase!",
					author: "tom@yahoo.com"
				},
			],
		},
		{
			name: 'Vader',
			price: 9.95,
			color: 'Red',
			description: "The Vader gem is known to have special strength powers.",
			canPurchase: true,
			soldOut: false,
			image: 'http://navneetgems.com/wp-content/uploads/2015/05/Indian-sparkly-garnet.jpg',
			reviews: [
				{
					stars: 4,
					body: "This product rocks!",
					author: "tom@yahoo.com"
				},
			],
		},
		{
			name: 'Obi',
			price: 7.50,
			color: 'Blue',
			description: "The Obi gem is known to have special mind reading powers.",
			canPurchase: true,
			soldOut: false,
			image: 'http://www.salermojewelers.com/wp-content/uploads/2014/05/aqua.jpg',
			reviews: [
				{
					stars: 5,
					body: "I swear it actually works!!!",
					author: "john@gmail.com"
				},
				{
					stars: 2,
					body: "I can't believe I paid for this!",
					author: "grumpy@firemail.com"
				},
			],
		},
	];

	// Store Controller
	app.controller('StoreController', function(){
		this.products = gems;
	});

	// Tabbed Panel Controller
	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function (setTab) {
			this.tab = setTab;
		}

		this.isSelected = function (checkTab) {
			return this.tab === checkTab;
		}
	});

	// Review Controller
	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		}
	});

})();