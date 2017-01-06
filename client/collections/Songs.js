// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  //this.listenTo(this.model.enqueue, 'change', this.render);
    //1. initially HAVE A LIST OF ALL THE SONGS
    //2. Eventually NEED TO RETREIEVE SONGS FROM SERVER
    //http://tutorialzine.com/2013/04/services-chooser-backbone-js/
});