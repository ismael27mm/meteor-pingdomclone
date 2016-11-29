//import '../imports/api/servers.js';
import { Servers } from '../imports/api/servers.js';

pingHost = function (ip) {

    var pingSend = function (options, callback) {
      var exec = Npm.require('child_process').exec;
      var result = {};

      child = exec('ping -c 1 ' + options, function(error, stdout, stderr) {
        if (error !== null) {
          result.latency = 0;
          result.status = "offline";
          callback(null, result);
        } else {
          var str = stdout.toString(), lines = str.split('\n');
          var latency =  Math.round(lines[1].split('time=')[1].split(' ')[0]);
          var status = lines[4].slice(23,24);
          result.status = "online";
          result.latency = latency;
          callback(null, result)
        }
      })
    }

    var pingSendSync = Meteor.wrapAsync(pingSend);
    var r = pingSendSync(ip);
    return r;
}

Meteor.methods({

    'callPing': function(host_ip){
        
		SyncedCron.add({
		  name: 'Ping to '+host_ip,
		  schedule: function(parser) {
		    // parser is a later.parse object
		    return parser.text('every 1 mins');
		  },
		  job: function() {
		    var ping =  pingHost(host_ip);
		    if(ping.status == 'online'){
		    	Servers.update({ip: host_ip}, {$inc: {up: 1}});
		    }else{
		    	Servers.update({ip: host_ip}, {$inc: {down: 1}});
		    }
		    return 'IP '+host_ip+' - '+ping.status;
		  }
		});

		SyncedCron.start();
    },
    'removePing': function(host_ip){
    	SyncedCron.remove('Ping to '+host_ip);
    }
});