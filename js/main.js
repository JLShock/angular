$(document).ready(function() {
	
	$('.form-select').on('click', function() {
		$(this).parents('.review-block').children('.review-preview').removeClass('ng-hide');
	});

	$('.form-textarea').on('click', function() {
		$(this).parents('.review-block').children('.review-preview').removeClass('ng-hide');
	});

	$('.form-author').on('click', function() {
		$(this).parents('.review-block').children('.review-preview').removeClass('ng-hide');
	});

	$('.submit-review').on('click', function() {
		$(this).parents('.review-block').children('.review-preview').addClass('ng-hide');
	});

	$('form').on('focusout', function() {
		$(this).parents('.review-block').children('.review-preview').addClass('ng-hide');
	});

});