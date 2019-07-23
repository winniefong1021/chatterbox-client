var MessagesView = {

  $chats: $('#chats'),

  initialize: function (arr) {
    this.$chats.empty();
    for (var i = 0; i < arr.length; i++) {
      this.renderMessage(arr[i]);
    }
  },

  renderMessage: function (msg) {
    var { username, text } = msg;
    if (username !== undefined) {
      this.$chats.append(MessageView.render(msg));
    }
  }
};

