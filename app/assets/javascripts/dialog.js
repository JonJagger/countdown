/*global jQuery,countdown*/

var countdown = (function(cd, $) {
  "use strict";

  cd.dialog = function(html, close) {
    var buttons = {};
    return $('<div class="countdown-dialog">')
      .html(html)
      .dialog({
        autoOpen: false,
        modal: true,
        width: 'auto',
        height: 'auto',
        buttons: buttons
      });
  };

  return cd;
})(countdown || {}, jQuery);
