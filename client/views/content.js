Template.content.events({
  'click .btnSave': function(event) {
    event.preventDefault();
    var clipy = {
      title: jClipyTitle.val(),
      content: editor.getValue(),
      language: language
    };

    if (jClipyId.val().length > 0) {
      clipy.id = jClipyId.val();
    }

    if (clipy.content.length > 0) {
      if (clipy.id && clipy.id.length > 0) {
        if (Meteor.userId()) {
          Meteor.call('updateClipy', clipy);
        } else {
          
        }
      } else {
        if (Meteor.userId()) {
          Meteor.call('addClipy', clipy);
        }
      }
      jClipyId.val('');
      jClipyTitle.val('');
      editor.setValue('');
    } else {
      alert('Content is empty.');
    }
  }
});


var local = {
  getClipies: function() {
    return JSON.parse(localStorage.getItem('clipies'));
  },
  addClipy: function(clipy) {}
};