describe ('Boards', function(){

  beforeEach(function(){  
		Boards.add("Demo");
		boards = Boards.find({}).fetch();
		board = _.last(boards);
  })

  it("should have a title", function(){
		expect(board.title).toEqual("Demo")
	});

  it("should have at least one zone", function(){
    expect(board.zones.length).toEqual(0)
  })

  it("should have a window width", function(){
    expect(board.windowWidth).toEqual(0)
  })
  
  it("should have a window height", function(){
    expect(board.windowHeight).toEqual(0)
  })

})

describe ('Boards.addZone', function(){
  beforeEach(function(){  
    Boards.add("Demo");
    boards = Boards.find({}).fetch();
    board = _.last(boards);
    Boards.addZone(board._id,"new Zone") 
  }) 

})