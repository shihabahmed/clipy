Clipies = new Mongo.Collection('clipies');

Meteor.methods({
  addClipy: function(clipy) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    var user = Meteor.user();
    Clipies.insert({
      title: clipy.title,
      content: clipy.content,
      language: clipy.language,
      createdAt: new Date(),
      username: (user.username ? user.username : (user.profile.name ? user.profile.name : 'USER') ),
      owner: Meteor.userId()
    });
  },
  updateClipy: function(clipy) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    var user = Meteor.user();
    Clipies.update({
      _id: clipy.id
    }, {
      $set: {
        title: clipy.title,
        content: clipy.content,
        language: clipy.language
      }
    });
  },
  deleteClipy: function(clipy) {
    Clipies.remove(clipy._id);
  }
});