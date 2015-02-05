Meteor.startup(function () {
  Boards.constructDemoBoard()
});

Meteor.methods({
  clearAll: function(){
     Boards.remove({});
      Zones.remove({});
    Postits.remove({});
  },

  removePostits: function(){
    Postits.remove({});
  },

  resetDemoBoard: function(){
    Boards.remove({title: "Demo"})
  }

})
