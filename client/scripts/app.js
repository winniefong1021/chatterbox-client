var App = {
  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    // RoomsView.initialize();
    // MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);


  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      console.log(data)
      for (var i = 0; i < data.results.length; i++) {
        var msg = {};
        if (data.results[i].username !== undefined) {
          msg.username = data.results[i].username;
          msg.text = data.results[i].text;
          msg.roomName = data.results[i].roomname;
          Messages.storage.push(msg);
        }
        
        if (data.results[i].roomname !== null) {
          // msg.roomName = data.results[i].roomname
          Rooms.storage.push(data.results[i].roomname);
          // console.log(data.results[i].roomname);
          // Rooms.storage.push('test');
        }
        // console.log(Rooms.storage);
      }

      RoomsView.initialize();
      MessagesView.initialize(Messages.storage);
      // RoomsView.initialize();
      // RoomsView.selectRoom();

      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
