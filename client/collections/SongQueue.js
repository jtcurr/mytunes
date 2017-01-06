// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('add', function() {
      //check to see if there ONLY ONE SONG in the 'PlayList'
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);
    }, this);

    this.on('ended', function() {
      //pop out the first song in the SongQueue
      this.shift();
      //check to see if there are songs still left in the 'PlayList' 
      if (this.length !== 0) {
        this.playFirst(); // play the next 'first' song in the 'PlayList'
      }
    }, this);

  },

  playFirst: function() {
    this.at(0).play();
  }

});