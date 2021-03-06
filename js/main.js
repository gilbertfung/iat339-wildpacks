$(document).ready(function(){
	// ===== Main navigation ===== //
	// Search interaction
	$('.search-bar').hide();
	$('.header-link-icon.icon-search').click(function(event){
		event.preventDefault();
		
		if ($(this).hasClass('active')) {
			// "search"
			window.location.reload();
		} else {
			// show search bar
			$searchBar = $('.search-bar');
			$searchBar.show();
			$(this).addClass('active');			
		}
	});

	$('.search-bar').keypress(function(event){
		if (event.which === 13) {
			// "search"
			window.location.reload();
		}
	});

	// ===== Product pages ===== //
	// Image swapping
	$('.thumbnail-row .thumbnail').click(function(e){
		e.preventDefault();
		var $img = $(this).children().attr('src');
		$('.product-image > img').attr('src', $img);
	});

	// Add to cart interaction
	$('.js-add-to-cart').click(function(event){
		event.preventDefault();
		$(this).text('Added to cart!');
		$cartBadge = $('.header-nav .icon-cart .badge');
		$cartBadge.removeClass('hidden');
		$cartBadge.addClass('shown');
	});

	// Request a trial interaction
	$('.js-request-trial').click(function(event){
		event.preventDefault();
		$requestTrial = $('.request-trial');
		$requestTrial.removeClass('hidden');
		$requestTrial.addClass('shown');
	});

	$('.request-trial tbody tr').click(function(event){
		$(this).toggleClass('active');
	});

	$('.request-trial .button-submit, .request-trial .button-reset').click(function(event){
		event.preventDefault();
		$requestTrial = $('.request-trial');
		$requestTrial.removeClass('shown');
		$requestTrial.addClass('hidden');

		if ($(this).hasClass('button-submit')) {
			$requestTrial.after('<p>Request submitted!<p/>');
		}
	});

	// ===== Cart Pages ===== //
	// Remove Product from cart
	$('.js-remove-product').click(function(event){
		event.preventDefault();
		$product = $('tr.product-1');
		$product.addClass('hidden');
		$('.cart-listing tfoot .t-price').text('$0.00');
	});
});