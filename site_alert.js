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
  var loadAlert = function (siteAlert) {
    var callback = basePath + 'ajax/site_alert';
    siteAlert.load(callback);

    // Update content at configured interval.
   if (Drupal.settings.siteAlert.timeout > 0) {
     setTimeout(function() { loadAlert(siteAlert) }, Drupal.settings.siteAlert.timeout * 1000);
   }

  }

})(jQuery);
