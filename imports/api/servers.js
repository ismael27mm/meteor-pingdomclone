import { Mongo } from 'meteor/mongo';
 
export const Servers = new Mongo.Collection('servers');

Servers.helpers({
  percent() {
  	var up = this.up;
  	var down = this.down;

  	if(up > 0 || down > 0)
  		var percent = up*(100/(down+up));
  	else
  		var percent = 0;
  	
    return percent;
  },

});