Template.clipies.helpers({
  clipies: function() {
    return Clipies.find();
  }
});

Template.clipy.events({
  'click .clipy': function() {
    var clipyData = getData(event.target);
    jClipyId.val(clipyData.id);
    jClipyTitle.val(clipyData.title);
    fn.editorLanguage(clipyData.language);
    editor.setValue(clipyData.content);
    editor.focus();
  },
  'click .delete': function() {
    Meteor.call('deleteClipy', this);
  }
});