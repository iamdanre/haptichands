(function ($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function () {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event


// var onMapMouseleaveHandler = function(event) {
//   var that = $(this);
//   that.on('click', onMapClickHandler);
//   that.off('mouseleave', onMapMouseleaveHandler);
//   that.find('iframe').css("pointer-events", "none");
// }
// var onMapClickHandler = function(event) {
//   var that = $(this);
//   // Disable the click handler until the user leaves the map area
//   that.off('click', onMapClickHandler);
//   // Enable scrolling zoom
//   that.find('iframe').css("pointer-events", "auto");
//   // Handle the mouse leave event
//   that.on('mouseleave', onMapMouseleaveHandler);
// }
// // Enable map zooming with mouse scroll when the user clicks the map
// $('.map').on('click', onMapClickHandler);

  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // Function to apply theme
  function applyTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
      if (darkModeToggle) darkModeToggle.textContent = 'Enable Light Mode';
    } else {
      body.classList.remove('dark-mode');
      if (darkModeToggle) darkModeToggle.textContent = 'Enable Dark Mode';
    }
  }

  // Check localStorage for saved theme
  let currentTheme = localStorage.getItem('theme');

  // If no saved theme, check OS preference
  if (currentTheme === null) {
    if (prefersDarkScheme.matches) {
      currentTheme = 'dark';
    } else {
      currentTheme = 'light';
    }
  }

  // Apply the determined theme
  applyTheme(currentTheme);

  // Add event listener for the toggle button
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function () {
      let newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // Optional: Listen for changes in OS preference (e.g., if user changes OS theme while page is open)
  prefersDarkScheme.addEventListener('change', (e) => {
    // Only change if no explicit theme has been set by the user via the toggle
    if (localStorage.getItem('theme') === null) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
