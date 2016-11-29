# meteor-pingdomclone
Pingdome clone to test meteor capabilities
Simple instructions:
1- Install meteor (locally, in docker container, amazon aws, digitalocean, or whatever you want)
2- Clone or download the zip
3- Open terminal and locate the root directory of the project: cd /path/to/project
4- Be sure to have this packages installed

meteor-base@1.0.4             # Packages every Meteor app needs to have
mobile-experience@1.0.4       # Packages for a great mobile UX
mongo@1.1.14                   # The database Meteor supports right now
blaze-html-templates@1.0.4 # Compile .html files into Meteor Blaze views
reactive-var@1.0.11            # Reactive variable for tracker
jquery@1.11.10                  # Helpful client-side library
tracker@1.1.1                 # Meteor's client-side reactive programming library

standard-minifier-css@1.3.2   # CSS minifier run for production mode
standard-minifier-js@1.2.1    # JS minifier run for production mode
es5-shim@4.6.15                # ECMAScript 5 compatibility for older browsers.
ecmascript@0.6.1              # Enable ECMAScript2015+ syntax in app code
shell-server@0.2.1            # Server-side component of the `meteor shell` command

autopublish@1.0.7             # Publish all data to the clients (for prototyping)
insecure@1.0.7                # Allow all DB writes from clients (for prototyping)
reactive-dict@1.1.8
accounts-ui@1.1.9
accounts-password@1.3.3
kadira:flow-router
zimme:active-route
juliancwirko:s-alert
juliancwirko:s-alert-flip
kadira:blaze-layout
arillo:flow-router-helpers
percolate:momentum
leitwarte:ping
percolate:synced-cron
dburles:collection-helpers


5- Run meteor:  meteor
