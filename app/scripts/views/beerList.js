/*global beerzu2, Backbone, JST*/

beerzu2.Views = beerzu2.Views || {};

(function() {
    'use strict';

    beerzu2.Views.BeerView = Backbone.View.extend({

        el: '#item-cont',

        template: JST['app/scripts/templates/beer.ejs'],

        initialize: function( models ) {
            this.listenTo(this.collection, 'reset', this.render);
            this.listenTo(this.collection, 'sort', this.render);
            this.eventBus.on("select:location", this.renderLocations, this);
        },

        getLocationModels: function( location ) {
            return this.collection.filterLocation( location );
        },

        renderLocations: function( location ) {
            var matchingLocationModels = this.getLocationModels( location );
            this.render( this.collection.filtered );
        },

        render: function( collection ) {
            var models = [];

            for (var i = 0; i < collection.length; i++) {
                models.push( collection.at(i) );
            };

            this.$el.html(this.template({
                beers: models
            }));

            return this;
        }

    });

})();
