// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table', 
  //take each entry (HTML row snippet) from the SongQueueEntryView 
    //append it to the DOM --> user sees this on the page
  initialize: function() {
    this.collection.on('add remove', this.render, this);
    this.render();
  },

  render: function() {
    console.log('SongQueueView rendered!');
    this.$el.children().detach();

    this.$el.html('<th>PlayList</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );

    //return this.$el.html(this.template(this.model.attributes));
  }

});
