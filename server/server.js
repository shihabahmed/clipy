Meteor.publish('clipies', function() {
  return Clipies.find({
    $or: [
      { owner: this.userId }
    ]
  });
});