// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

    //set defaults where 'queued songs' === 'false'
  defaults: {
    inQueue: false
  },

  enqueue: function() {
    if (this.get('inQueue') === true) {
      this.set('inQueue', false);
    } else {
      this.set('inQueue', true);
    }
  },
  //create a toggle function that will queue/unqueue a song

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  }

});
