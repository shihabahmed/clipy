Meteor.subscribe('clipies');

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.startup(function() {
  //local.getClipies();
});