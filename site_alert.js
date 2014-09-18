/**
 *@file site_alert.js
 *
 * Contains javascript to refresh alert div contents.
 */

(function ($) {

// Initial page load.
$(window).load(function() {
  // Load alert text.
  loadAlert();
});

// Function to update alert text.
var loadAlert = function () {
  var callback = '/ajax/site_alert';
  $('.site-alert').load(callback);
  // Update content every 5 minutes.
  setTimeout(loadAlert, 300000);
}

})(jQuery);
