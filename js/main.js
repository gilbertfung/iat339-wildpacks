$(document).ready(function(){
	// ===== Main navigation ===== //

	// Cart interaction

	// ===== Product pages ===== //
	// Add to cart interaction
	$('.js-add-to-cart').click(function(event){
		event.preventDefault();
		$(this).text('Added to cart!');
		$('.header-nav .icon-cart .badge').removeClass('hidden');
		$('.header-nav .icon-cart .badge').addClass('shown');
	});
});