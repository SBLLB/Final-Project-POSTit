Boards = new Mongo.Collection("Boards");

Boards.add = function(title){
	Boards.insert({
		title: title,
    zones: [],
    zoneWidth: 0,
    windowWidth: 0,
    windowHeight: 0
	})
}
Boards.getDemo = function(){
  return Boards.find({title: "Demo"}).fetch()
}

Boards.addZone = function(id, newZoneTitle){
  var zonesArray = _getZonesArray(id)
  var newZone = Zones.add(newZoneTitle, zonesArray.length, id)
  Boards.update(id,{$addToSet: {zones: newZone}})
  _updateWidths(id)
}

Boards.constructDemoBoard = function(){
  if(Boards.getDemo().length === 0){

    var id = new Mongo.ObjectID()
    var defaultZones = ["Todo","Doing","Done"]

    Boards.insert({_id: id ,title: "Demo",zones: [],zoneWidth: 0})

    _.each(defaultZones, function(newZone){
      Boards.addZone(id, newZone)
    })
  }
}

function _updateWidths(id){
  var board = Boards.findOne(id)
  var mainWidth = 100-board.zones.length
  var updatedWidth = Math.floor(mainWidth/board.zones.length)

  Boards.update(id,{$set: {zoneWidth: updatedWidth}})
}

function _getZonesArray(id){
  var board = _.first(Boards.find(id).fetch())
  return board.zones
}



