/*global jQuery,countdown*/

var countdown = (function(cd, $) {
  "use strict";

  cd.dialog = function(html, close) {
    var buttons = {};
    buttons[close] = function() { $(this).remove(); };
    return $('<div>')
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
