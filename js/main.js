$(document).ready(function(){
	// ===== Main navigation ===== //

	// Cart interaction

	// ===== Product pages ===== //
	// Add to cart interaction
	$('.js-add-to-cart').click(function(event){
		event.preventDefault();
		$(this).text('Added to cart!');
		$cartBadge = $('.header-nav .icon-cart .badge');
		$cartBadge.removeClass('hidden');
		$cartBadge.addClass('shown');
	});

	});
});