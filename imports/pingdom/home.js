import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Servers } from '../api/servers.js';

import './home.html';

Template.home.helpers({
  servers() {
    return Servers.find({}, { sort: { createdAt: -1 } });
  },
});

Template.home.events({
  'submit .new-server'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    var $form = $(event.currentTarget);
    var $name = $form.find('.server-name').eq(0);
    var $ip = $form.find('.server-ip').eq(0);

    var sname = $name.val() || '';
    var sip = $ip.val() || '';
 
    // Insert into the collection
    Servers.insert({
      createdAt: new Date(), // current time
      name: sname,
      ip: sip,
      up: 0,
      down: 0
    });
 
    // Clear form
    $name.val('');
    $ip.val('');
    console.log('calling server method');

    Meteor.call('callPing', sip);
  },
  'click .delete'(event) {
    var $button = $(event.currentTarget);
    var sip = $button.attr('data-ip');

    Servers.remove(this._id);
    Meteor.call('removePing', sip);
  },

});