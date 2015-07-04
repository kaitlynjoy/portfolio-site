// Navbar Toggle

(function(){
	"use strict";

	var toggle = document.querySelector("#menu-toggle");
	var nav = document.querySelector("nav");

	toggleHandler(toggle);

	function toggleHandler(toggle){
		toggle.addEventListener("click", function(e){
			e.preventDefault();
			(this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");

			if (toggle.classList.contains("active") === true){
			nav.style.top = "0";

			}

			else {
				nav.style.top = "-400px";
			}
		});

	}
})();

// Fade Content

$(window).scroll(function(){
	$('.fadeContent').each(function(){
		if(($(this).offset().top - $(window).scrollTop() < 20)){
			$(this).stop().fadeTo(100, 0);
		}

		else {
			$(this).stop().fadeTo('fast', 1);
		}
	});
});

// Scrolling to Anchors

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
