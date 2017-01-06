// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

  //IMPORTANT --> FEEDS INTO 'SONGVIEW' NOT AS A SIBLING
  //Interacts with SongQueue Collection then passes HTML markup down to SONGVIEW
});
