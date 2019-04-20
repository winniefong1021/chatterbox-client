var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    for (var i = 0; i < Messages.storage.length; i++) {
      var { username, text } = Messages.storage[i];
      this.$chats.append(MessageView.render(Messages.storage[i]));
    }


  },

  renderMessage: function() {
    // use Parse.create
    console.log(Parse.create($('#message').val())); 
    this.$chats.append('<h1>Hi</h1>');


  
  }

};

