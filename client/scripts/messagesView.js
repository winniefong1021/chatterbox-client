var MessagesView = {

  $chats: $('#chats'),

  initialize: function (arr) {
    // $('#chat').empty();
    this.$chats.empty();
    if (RoomsView.$select) {
      console.log('room selected');
    }
    for (var i = 0; i < arr.length; i++) {
      this.renderMessage(arr[i]);
    }
  },

  renderMessage: function (msg) {
    // for (var i = 0; i < msg.length; i++) {
    //   this.renderMessage(msg[i]);
      var { username, text } = msg;
      if (username !== undefined) {
        this.$chats.prepend(MessageView.render(msg));
      }
      // RoomsView.selectRoom();
  //   }
  }
};

