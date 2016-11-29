import { Meteor } from 'meteor/meteor';

FlowRouter.route('/', {
    // do some action for this route
    action: function(params, queryParams) {
        console.log("At home");
        Tracker.autorun(function() {
            if(Meteor.userId()){
                console.log('logged in');
                document.title = "PINGDOME CLONE | INICIO";
                BlazeLayout.render('home', {
                    content: 'home'
                });
            }else{
                console.log('not logged in');
                document.title = "PINGDOME CLONE | ACCESE";
                BlazeLayout.render('login', {
                    content: 'login'
                }); 
            }
        });
    },

    name: "Home" // optional
});

FlowRouter.route('/login', {
    // do some action for this route
    action: function(params, queryParams) {
        console.log("At login");
        document.title = "PINGDOME CLONE | ACCESE";
        BlazeLayout.render('login', {
            content: 'login'
        });
    },

    name: "Login" // optional
});

FlowRouter.route('/register', {
    // do some action for this route
    action: function(params, queryParams) {
        console.log("At register");
        document.title = "PINGDOME CLONE | REGISTRO";
        BlazeLayout.render('signup', {
            content: 'signup'
        });
    },

    name: "Register" // optional
});

FlowRouter.route('/logout', {
    // do some action for this route
    action: function(params, queryParams) {
        console.log("Login out");
        Meteor.logout();
        FlowRouter.go('Home');
    },

    name: "Logout" // optional
});

FlowRouter.route('/about', {
    // do some action for this route
    action: function(params, queryParams) {
        console.log("At about");
        Tracker.autorun(function() {
            if(Meteor.userId()){
                console.log('logged in');
                document.title = "PINGDOME CLONE | ACERCA DE";
                BlazeLayout.render('about', {
                    content: 'about'
                });
            }else{
                console.log('not logged in');
                document.title = "PINGDOME CLONE | ACCESE";
                BlazeLayout.render('login', {
                    content: 'login'
                }); 
            }
        });
    },

    name: "About" // optional
});

FlowRouter.route('/graph', {
    // do some action for this route
    action: function(params, queryParams) {
        console.log("At graph");
        Tracker.autorun(function() {
            if(Meteor.userId()){
                console.log('logged in');
                document.title = "PINGDOME CLONE | REPORTE";
                BlazeLayout.render('graph', {
                    content: 'graph'
                });
            }else{
                console.log('not logged in');
                document.title = "PINGDOME CLONE | ACCESE";
                BlazeLayout.render('login', {
                    content: 'login'
                }); 
            }
        });
    },

    name: "Graph" // optional
});

FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {
        document.title = "PINGDOME CLONE | 404";
    	BlazeLayout.render('page', {
            content: 'page'
        });
    }
};