import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Servers } from '../api/servers.js';

import './graph.html';



draw = function(){
	var hosts = Servers.find({}, { sort: { createdAt: -1 } });
	const xservers = [];
	const yup = [];
	const ydown = [];

	hosts.forEach(function(s){
		xservers.push(s.name);
		yup.push( s.percent() );
		ydown.push( 100 - s.percent() );
	});

	console.log(xservers);

	const trace1 = {
	  x: xservers,
	  y: yup,
	  name: 'Uptime',
	  type: 'bar'
	};

	const trace2 = {
	  x: xservers,
	  y: ydown,
	  name: 'Downtime',
	  type: 'bar'
	};

	const data = [trace1, trace2];

	const layout = {barmode: 'stack', title: 'Uptime de los equipos monitoreados'};

	Plotly.plot($('#myDiv')[0], data, layout);
};

Template.graph.onRendered(function () {
	draw();
});