var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var msg = $('#message').val();
    console.log(msg);

    var obj = {
      username: App.username,
      text: $('#message').val(),
      roomname: '1'
    };

    Parse.create(obj);

    console.log(window.location.search);

// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get('myParam');

    // console.log($('#message').val());
    // MessagesView.$chats.append(MessageView.render(Messages.storage[i]));
    // use Parse.create(msg)
    // create message object 

    //MessagesView.$chats.append(MessageView.render(msg));
    console.log(Messages.storage.push(msg));
    
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};