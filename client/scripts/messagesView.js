var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    for (var i = 0; i < Messages.storage.length; i++) {
      var { username, text } = Messages.storage[i];
      this.$chats.append(MessageView.render(Messages.storage[i]));
    }


  },

  renderMessage: function() {

    this.$chats.append('<h1>Hi</h1>');


  
  }

};

