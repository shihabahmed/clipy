var jWindow, jSidebar, jContent, winSize,

fn = (function(j) {
  return {
    windowResized: function() {
      fn.resetWindowSize();
      fn.resetContainerHeight();
      fn.resetContentArea();
    },
    resetWindowSize: function() {
      winSize = {
        width: jWindow.width(),
        height: jWindow.height()
      };
    },
    resetContainerHeight: function() {
      jSidebar.css('height', winSize.height);
      jContent.css('height', winSize.height);
    },
    resetContentArea: function() {
      jContent.css('width', winSize.width - jSidebar.outerWidth(true));
    }
  }
})(jQuery);

Template.layout.rendered = function () {
  (function(j) {
    j(function() {
      jWindow = j(window);
      jSidebar = j('.sidebar');
      jContent = j('.main-content');
      
      fn.resetWindowSize();
      fn.resetContainerHeight();
      fn.resetContentArea();

      jWindow.resize(fn.windowResized);
      
      console.log(winSize.width, jSidebar.outerWidth(true));
    });
  })(jQuery);
}