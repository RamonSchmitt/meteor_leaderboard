import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  PlayersList = new Mongo.Collection('players');
});
