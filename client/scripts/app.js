var App = {
  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);

      // for (var i = 0; i < data.results.length; i++) {
      // // Messages.storage.push(data.results[i].text);
      //   var msg = {};
      //   msg.username = data.results[i].username;
      //   msg.text = data.results[i].text;
      //   msg.roomName = data.results[i].roomname;
      //   Messages.storage.push(msg);
      //   console.log(Messages);
      // }
      MessagesView.render(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
