// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
//listen for the toggleQueue() in 'Song Model'
  //render() 
  
  //take each entry (HTML row snippet) from the SongQueueEntryView 
    //append it to the DOM --> user sees this on the page
  initialize: function() {
  },

  render: function() {
    return this.$el;
  }

});
