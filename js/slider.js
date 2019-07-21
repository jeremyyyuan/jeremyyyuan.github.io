var slider = function (sliderElement) {

	var pages = [];
	var currentSlide = 1;

	var init = function () {
		// set up page and build visual indicators
		var indicatorContainer = document.createElement('div');
		indicatorContainer.classList.add('slider__indicators');

		var index = 1;
		// loop creates 6 elements
		[].forEach.call(document.querySelectorAll(sliderElement + ' > *'), function (section) {
			var indicator = document.createElement('a');
			indicator.classList.add('slider__indicator')
			indicator.setAttribute('data-slider-target-index', index);
			indicatorContainer.appendChild(indicator);
			index++;

			indicator = document.createElement('a');
			indicator.classList.add('slider__indicator')
			indicator.setAttribute('data-slider-target-index', index);
			indicatorContainer.appendChild(indicator);
			index++;
		});
		// add two more elements to make 8
		indicator = document.createElement('a');
		indicator.classList.add('slider__indicator')
		indicator.setAttribute('data-slider-target-index', index);
		indicatorContainer.appendChild(indicator);
		index++;
		indicator = document.createElement('a');
		indicator.classList.add('slider__indicator')
		indicator.setAttribute('data-slider-target-index', index);
		indicatorContainer.appendChild(indicator);
		index++;

		document.body.appendChild(indicatorContainer);
		document.querySelector('a[data-slider-target-index = "' + currentSlide +'"]').classList.add('slider__indicator--active');

	};

	// load the slider
	if (document.readyState === 'complete') {
		init();
	} else {
		window.addEventListener('onload', init(), false);
	}

	window.onscroll = function() {myFunction()};

	function myFunction() {
	  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	  var scrolled = (winScroll / height) * 100;
	  var currentSlide = 1;
	  if (scrolled < 10) {
			currentSlide = 1;
	  }
	  else if (scrolled >= 10 && scrolled < 27) {
		  currentSlide = 2;
	  }
	  else if (scrolled >= 27 && scrolled < 35) {
			currentSlide = 3;
	  }
	  else if (scrolled >= 35 && scrolled < 45) {
			currentSlide = 4;
	  }
	  else if (scrolled >= 45 && scrolled < 65){
		  currentSlide = 5;
	  }
	  else if (scrolled >= 65 && scrolled < 82){
		  currentSlide = 6;
	  }
	  else if (scrolled >= 82 && scrolled < 95){
		  currentSlide = 7;
	  }
	  else {
	  	currentSlide = 8;
	  }
	  document.querySelector('a.slider__indicator--active').classList.remove('slider__indicator--active');
	  document.querySelector('a[data-slider-target-index="' + currentSlide +'"]').classList.add('slider__indicator--active');
	}
};