/**
 * Contains javascript to refresh alert div contents.
 *
 * @file site_alert.js
 */

(function ($) {

  var basePath;

  /**
   * Load any alerts.
   */
  Drupal.behaviors.siteAlert = {
    attach: function(context, settings) {
      basePath = settings.basePath;
      loadAlert($('.site-alert', context));
    }
  };

  /**
   * Function to update alert text.
   */
  var loadAlert = function (siteAlert) {
    var callback = basePath + 'ajax/site_alert';

    // Object contains information about the currently loaded theme for
    // processing by our theme callback. Without it the default theme is always
    // assumed.
    var options = {
      ajax_page_state: Drupal.settings.ajaxPageState
    };
    siteAlert.load(callback, options, function() {
      $('.site-alert-close', siteAlert).click(function (e) {
        var checksum = $(this).parent().data('alert-checksum');
        var date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        document.cookie = "Drupal.siteAlert.checksum=" + checksum + "; expires=" + date.toGMTString();

        $(this).parent().fadeOut();
      });
    });

    // Update content at configured interval.
    if (Drupal.settings.siteAlert.timeout > 0) {
      setTimeout(function() { loadAlert(siteAlert) }, Drupal.settings.siteAlert.timeout * 1000);
    }

  }

})(jQuery);
