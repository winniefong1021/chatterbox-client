var FormView = {
  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    event.preventDefault();

    var obj = {
      username: App.username,
      text: $('#message').val(),
      roomname: '1'
    };

    Parse.create(obj);
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};