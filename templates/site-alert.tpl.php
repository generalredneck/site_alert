<?php

/**
 * @file
 * site-alert.tpl.php
 */
?>
<div class="<?php print $level; ?>" data-alert-checksum="<?php print $checksum; ?>">
  <span class="site-alert-close"><?php print t('close'); ?></span>
  <div class="text">
    <?php print $alert; ?>
  </div>
</div>
