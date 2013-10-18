/*global beerzu2, Backbone, JST*/

beerzu2.Views = beerzu2.Views || {};

(function () {
    'use strict';

    beerzu2.Views.LocationsView = Backbone.View.extend({

        el: '#locations-cont',

        template: JST['app/scripts/templates/locations.ejs'],

        events: {
            'click .location-choice' : 'filterLocation',
        },

        initialize: function( a ) {
            this.listenTo(this.collection, 'reset', this.render);
        },

        filterLocation: function( e ) {
            e.preventDefault();
            var location = e.target.innerText;
            this.eventBus.trigger('select:location', location);
            this.eventBus.trigger('toggle:locations', location);
        },

        deDupeLocations: function( data ) {
            var allLocations = []
                , filteredLocations = [];

            data.each(function( model ) {
                allLocations.push( model.attributes.location );
            });

            filteredLocations = _.uniq(allLocations);
            return filteredLocations;
        },

        sort: function( data ) {
            return data.sort();
        },

        render: function() {
            var data = this.deDupeLocations( this.collection );
            var alphaData = this.sort( data );
            this.$el.html(this.template({
                locations: alphaData
            }));
            this.stopListening();
        }

    });

})();
