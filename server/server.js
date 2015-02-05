Meteor.startup(function () {
  Meteor.call('constructDemoBoard')
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

  constructDemoBoard: function(){
    if(Boards.getDemo().length === 0){

      var id = new Mongo.ObjectID()
      var defaultZones = ["Todo","Doing","Done"]

      Boards.insert({_id: id ,title: "Demo",zones: [],zoneWidth: 0})

      _.each(defaultZones, function(newZone){
        Boards.addZone(id, newZone)
      })
    }
  },
  resetDemoBoard: function(){
    Boards.remove({title: "Demo"})
  }

})
