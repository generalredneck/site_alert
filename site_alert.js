/**
 * Contains javascript to refresh alert div contents.
 *
 * @file site_alert.js
 */

(function ($) {

var basePath;

  Drupal.behaviors.siteAlert = {
    attach: function(context, settings) {
      basePath = settings.basePath;
      loadAlert($('.site-alert', context));
    }
  };

  // Function to update alert text.
  var loadAlert = function (alert) {
    var callback = basePath + 'ajax/site_alert';
    alert.load(callback);

    // Update content every 5 minutes.
    setTimeout(function () { loadAlert(alert) }, 300000);
  }

})(jQuery);
