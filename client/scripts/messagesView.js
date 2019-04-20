var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    for (var i = 0; i < Messages.storage.length; i++) {
      this.renderMessage(Messages.storage[i]);
    }
  },

  renderMessage: function (msg) {
    var { username, text } = msg;
    if (username !== undefined) {
      this.$chats.append(MessageView.render(msg));
    }
  }
};

