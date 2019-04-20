var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    var diffRooms = [];
    for (var i = 0; i < Messages.storage.length; i++) {
      if (!diffRooms.includes(Messages.storage[i].roomName)) {
        diffRooms.push(Messages.storage[i].roomName);
      }
    }
    for (var x = 0; x < diffRooms.length; x++) {
      this.renderRoom(diffRooms[x]);
    }
    // this.selectRoom();
    // this.$button.click(function() { RoomsView.addRoom });
    this.$button.on('click', function() {RoomsView.addRoom()});
  },

  renderRoom: function(room) {
  // console.log(room)
    this.$select.append(`<option value="${room}">${room}</option>`);
  },

  addRoom: function() {
    var roomname = $('#room').val();
    this.$select.append(`<option value="${roomname}">${roomname}</option>`);
  },

  selectRoom: function() {
    // this.$select.on('click', function() {
    //   console.log('room selected');
    // });

    this.$select.on('change', function() {
      var value = $(this).val();
      // alert(value);
      console.log(value);
      // $('#chat').empty();
      // iterate through messages.storage
        // if value = roomName 
          // push messages.storage[i] into new arr
          // MessagesView.initialize(new arr)
        var msgArr = [];
        for(var i = 0; i < Messages.storage.length; i++) {
          if(value === Messages.storage[i].roomName) {
            msgArr.push(Messages.storage[i]);
            console.log(msgArr)
          }
        }
        MessagesView.initialize(msgArr);
    });
  }

};
