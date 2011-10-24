Ext.define('Demo.store.Users', {
    extend: 'Ext.data.Store',
    model: 'Demo.model.User',

    // To define the data inline:
    //
    //   data: [
    //     {name: 'Alice',  email: 'alice@example.com'},
    //     {name: 'Bob',    email: 'bob@example.com'},
    //     {name: 'Carol',  email: 'carol@example.com'},
    //     {name: 'Dave',   email: 'dave@example.com'},
    //     {name: 'Eve',    email: 'eve@example.com'}
    //   ]

    // To define the the store to an AJAX JSON proxy reader:
    //
    //  autoLoad: true,
    //    
    //  proxy: {
    //    type: 'ajax',
    //    url: 'data/users.json',
    //    reader: {
    //      type: 'json',
    //      root: 'users',
    //      successProperty: 'success'
    //    }
    //  }
    //
    // See the Json Reader docs for more on configurations.

    autoLoad: true,  // Make the store ask its proxy to load data ASAP.

    proxy: {
        type: 'ajax',

	// To connect this proxy to a URL to read (esp. if you don't have an API)
	// or to sync (esp. if you have an API and want to do an update then sync):

        url: 'data/users.json',
        
	// To connect the proxy to use different URLs
        // for a read request vs. an update request:
        // 
	//   api: {
        //     read: 'data/users.json',
        //     update: 'data/updateUsers.json'
	//   },
	// 
        // In this demo, we're reading the data from users.json,
        // but any updates will be sent to updateUsers.json.
        //
        // This is just so we can return a dummy response,
        // so we know that the update is working correctly.
        // The updateUsers.json file contains {success: true}. 
	//
	// To use sync with this, be sure to define the url;
        // normally the url will be identical to the read.

	api: {
            read: 'data/users.json',
            update: 'data/updateUsers.json'
	},

        reader: {
	    type: 'json',
	    root: 'users',
	    successProperty: 'success'
        },

    }

});