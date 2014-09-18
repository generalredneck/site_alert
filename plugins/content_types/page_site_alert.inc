<?php

/**
 * @file
 * Plugin to handle the 'page_alert_title' content type which allows the
 * Alert title for the site to be embedded into a panel.
 */

/**
 * Plugins are described by creating a $plugin array which will be used
 * by the system that includes this file.
 */
$plugin = array(
  'title' => t('Site Alert'),
  'single' => TRUE,
  'description' => t('A site wide alert.'),
  'category' => t('Page elements'),
  'render callback' => 'page_site_alert_content_type_render',
  'render last' => TRUE,
);

/**
 * Output function for the 'page_alert_title' content type.
 *
 * Outputs the alert title for the current page.
 */
function page_site_alert_content_type_render($subtype, $conf, $panel_args) {

  drupal_add_js(drupal_get_path('module', 'site_alert') . '/site_alert.js');

  $block = new StdClass();
  $block->title = '';
  $block->content = '<div class="site-alert"></div>';

  return $block;
}
