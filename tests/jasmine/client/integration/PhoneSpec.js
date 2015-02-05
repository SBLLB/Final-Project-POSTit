describe('the phone page', function() {
  
  beforeEach(function(done){
    Router.go('/phone')
    Tracker.afterFlush(done)
  }) 

  beforeEach(waitForRouter)

  it('should have a textarea', function(){
    expect($('textarea').size()).toEqual(1);
  });

  it('should have a column selector', function(){
    expect($('.carousel').size()).toEqual(1);
  });

});
