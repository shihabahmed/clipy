var jWindow, jSidebar, jAccount, jSearch, jClipies, jContent, jClipyId, jClipyTitle, jClipyContent, jLanguage,
  winSize, editor, language,
  fn = (function (j) {
    return {
      initEditor: function () {
        editor = ace.edit("editor");
        editor.setTheme("ace/theme/monokai");
      },
      editorLanguage: function (lang) {
        language = lang;
        jLanguage.text(lang);
        editor.getSession().setMode("ace/mode/" + lang);
      },
      resetWindowSize: function () {
        winSize = {
          width: jWindow.width(),
          height: jWindow.height()
        };

        jSidebar.css('height', winSize.height);
        jContent.css({
          'height': winSize.height,
          'width': winSize.width - jSidebar.outerWidth(true)
        });

        jClipies.css('height', (winSize.height - jAccount.outerHeight(true) - jSearch.outerHeight(true) - 30));
        jClipyContent.css('height', (winSize.height - jClipyTitle.outerHeight(true) - 30));
      },
      searchClipy: function (key) {
        var clipies = jClipies.find('li');
        clipies.filter('.hidden').removeClass('hidden');

        if (key.length > 0) {
          var keys = key.split(' '),
            tempArray = clipies.addClass('hidden');

          for (var i = 0; i < keys.length; i++) {
            if (keys[i].length > 0)
              tempArray = tempArray.filter('[data-title*="' + keys[i].toLowerCase() + '"]');
          }

          tempArray.removeClass('hidden');
        }
      }
    }
  })(jQuery);

var getData = function (el) {
  var data = {};
  if (el.hasAttributes()) {
    var attributes = el.attributes;
    for (var i = 0; i < attributes.length; i++) {
      if (attributes[i].name.indexOf('data-') >= 0) {
        data[attributes[i].name.replace('data-', '')] = attributes[i].value;
      }
    }
  }
  return data;
};

Template.layout.rendered = function () {
  (function (j) {
    jWindow = j(window);
    jSidebar = j('.sidebar');
    jAccount = jSidebar.find('.account');
    jSearch = jSidebar.find('.search');
    jClipies = jSidebar.find('.clipies');
    jContent = j('.main-content');
    jClipyId = jContent.find('.clipyId');
    jLanguage = jContent.find('.language');
    jClipyTitle = jContent.find('.clipyTitle');
    jClipyContent = jContent.find('.clipyContent');

    fn.resetWindowSize();

    jWindow.resize(fn.resetWindowSize);

    fn.initEditor();
    
    jSearch.find('input.form-control').keyup(function() {
      fn.searchClipy(this.value);
    });
  })(jQuery);
}