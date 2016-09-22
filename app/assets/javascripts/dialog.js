/*global jQuery,countdown*/

var countdown = (function(cd, $) {
  "use strict";

  cd.dialog = function(html) {
    return $('<div class="countdown-dialog">')
      .html(html)
      .dialog({
        autoOpen: false,
        modal: true,
        width: 'auto',
        height: 'auto',
        buttons: {
          'close': function() { $(this).remove(); }
        }
      });
  };

  return cd;
})(countdown || {}, jQuery);
