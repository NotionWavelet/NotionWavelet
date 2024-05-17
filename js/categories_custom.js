/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Isotope
5. Init Price Slider
6. Init Products Height


******************************/

$(document).ready(function()
{
	"use strict";

	/*

	1. Vars and Inits

	*/

	var header = $('.header');
	var menuActive = false;
	var menu = $('.menu');
	var burger = $('.burger_container');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initIsotope();
	initPriceSlider();
	initProductsHeight();

	/*

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 100)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/*

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			if($('.burger_container').length)
			{
				burger.on('click', function()
				{
					if(menuActive)
					{
						closeMenu();
					}
					else
					{
						openMenu();

						$(document).one('click', function cls(e)
						{
							if($(e.target).hasClass('menu_mm'))
							{
								$(document).one('click', cls);
							}
							else
							{
								closeMenu();
							}
						});
					}
				});
			}
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/*

	4. Init Isotope

	*/



	function initIsotope() {
	    var sortingButtons = $('.product_sorting_btn');
	    var sortNums = $('.num_sorting_btn');
	    var priceButtons = $('.price_sorting_btn');

	    if ($('.product_grid').length) {
	        var grid = $('.product_grid').isotope({
	            itemSelector: '.product',
	            layoutMode: 'fitRows',
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	        });

	        sortingButtons.each(function() {
	            $(this).on('click', function() {
	                var parent = $(this).parent().parent().find('.sorting_text');
	                parent.text($(this).text());
	                var option = $(this).attr('data-isotope-option');
	                option = JSON.parse(option);
	                grid.isotope(option);
	            });
	        });

	        // Apply the filter based on the number of items and price
	        function applyFilters() {
	            var numSortingText = $('.num_sorting_btn.active').text() || '12';
	            var priceOption = $('.price_sorting_btn.active').attr('data-price') || 'todo';
	            var numFilter = ':nth-child(-n+' + numSortingText + ')';
	            var priceFilter = '';

	            if (priceOption === 'todo') {
	                priceFilter = '*';
									$('.num_sorting_text').text('Todo'); // Cambiar el texto aquí

	            } else if (priceOption === 'gratuita') {
	                priceFilter = '.product[data-price="00.00"]';
									$('.num_sorting_text').text('Gratuita'); // Cambiar el texto aquí

	            } else if (priceOption === 'pago') {
	                priceFilter = '.product:not([data-price="00.00"])';
									$('.num_sorting_text').text('Pago'); // Cambiar el texto aquí

	            }

	            var combinedFilter = numFilter + priceFilter;
	            grid.isotope({ filter: combinedFilter });

	        }


	        // Event handler for price sorting buttons
	        priceButtons.each(function() {
	            $(this).on('click', function() {
	                priceButtons.removeClass('active');
	                $(this).addClass('active');
	                applyFilters();
	            });
	        });

	        // Apply initial filters on page load
	        applyFilters();
	    }
	}


	/*

	5. Init Price Slider

	*/

    function initPriceSlider()
    {
    	if($("#slider-range").length)
    	{
    		$("#slider-range").slider(
			{
				range: true,
				min: 20,
				max: 199,
				values: [ 20, 199 ],
				slide: function( event, ui )
				{
					$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
				}
			});

			$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );
			$('.filter_price').on('mouseup', function()
			{
				$('.product_grid').isotope({
		            filter: function()
		            {
		            	var priceRange = $('#amount').val();
			        	var priceMin = parseFloat(priceRange.split('-')[0].replace('$', ''));
			        	var priceMax = parseFloat(priceRange.split('-')[1].replace('$', ''));
			        	var itemPrice = $(this).find('.product_price').clone().children().remove().end().text().replace( '$', '' );

			        	return (itemPrice > priceMin) && (itemPrice < priceMax);
		            },
		            animationOptions: {
		                duration: 750,
		                easing: 'linear',
		                queue: false
		            }
		        });
			});
    	}
    }

    /*

	6. Init Products Height

	*/

	function initProductsHeight()
	{
		if($('.sidebar_left').length)
		{
			var sidebarH = $('.sidebar_left').outerHeight(true) + 309;
			$('.products').css('min-height', sidebarH);
		}
	}
});
