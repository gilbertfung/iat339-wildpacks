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