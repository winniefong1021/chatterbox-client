var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    var diffRooms = [];
    for (var i = 0; i < Rooms.storage.length; i++) {
      if (!diffRooms.includes(Rooms.storage[i])) {
        diffRooms.push(Rooms.storage[i]);
      }
    }
    for (var x = 0; x < diffRooms.length; x++) {
      this.renderRoom(diffRooms[x]);
    }
    this.$button.on('click', function() {RoomsView.addRoom()});
    // this.$select.on('change', function() {RoomsView.selectRoom()});
  },

  renderRoom: function(room) {
    this.$select.prepend(`<option value="${room}">${room}</option>`);
  },

  addRoom: function() {
    var roomname = $('#room').val();
    this.$select.prepend(`<option value="${roomname}">${roomname}</option>`);
    if (!Rooms.storage.includes(roomname)) {
      Rooms.storage.push(roomname);
    }
  },

  selectRoom: function() {
    this.$select.on('change', function() {
      // $('#chat').empty();
      var value = $(this).val();
      console.log(value);
      var msgArr = [];
      for (var i = 0; i < Messages.storage.length; i++) {
        if (value === Messages.storage[i].roomName) {
          msgArr.push(Messages.storage[i]);
        }
      }
      console.log(msgArr);
      MessagesView.initialize(msgArr);
      // FormView.initialize();
    });
  }

};
