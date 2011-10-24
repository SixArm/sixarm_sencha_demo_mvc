// Sencha demo. Please see the README.md file for more information.

// Load everything
Ext.require(['*']);

Ext.application({
    name: 'Demo',

    appFolder: 'app', 

    controllers: [
        'Users'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [{
		// To show a User view from app/view/user
                // that defines an alias 'widget.userlist'
		xtype: 'userlist'
            }]
        });
    }
});