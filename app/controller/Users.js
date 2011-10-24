Ext.define('Demo.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: ['Users'],
    models: ['User'],

    views: [
	'user.List',
	'user.Edit'
    ],

    init: function() {
        this.control({

	    // To automatically render the panel during loading:
	    //
	    //   'viewport > panel': {
            //     render: this.onPanelRendered
	    //   }

	    // To listen for double clicks on rows in the grid
	    // so that we can later edit that User:
	    //
            //   'userlist': {
            //      itemdblclick: this.editUser
            //   }

            'userlist': {
                itemdblclick: this.editUser
            },

	    'useredit button[action=save]': {
                click: this.updateUser
            }

        });
    },

    // Edit the user.
    //
    // In this demo, this method is called when you are viewing
    // the grid of user records then double-click a user record.

    editUser: function(grid, record) {
        console.log('Edit user');
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);
        console.log('Edit user done');
    },

    // Update the user. 
    //
    // In this demo, this method is called when you are editing
    // the user's form, then click the button "Save" on the form.

    updateUser: function(button) {
        console.log('Update user');
	var win = button.up('window'),
        form = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
	record.set(values);
	win.close();

	// Tell our Store to synchronize itself after editing.
        // The Store is created in the file app/store/Users.js
	// and must define the proxy's url to do the sync.
	//
        //   this.getUsersStore().sync();

	console.log('Update user done.')
    }

});
