Meteor.publish('clipies', function() {
  Meteor.call('getClipies');
  console.log(Meteor.call('getClipies'));
});