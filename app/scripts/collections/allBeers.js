/*global beerzu2, Backbone*/

beerzu2.Collections = beerzu2.Collections || {};

(function () {
    'use strict';

    beerzu2.Collections.BeerCollection = Backbone.Collection.extend({

        url: '/data/beers2.json',

        initialize: function( models ) {
            this.filtered = new Backbone.Collection( models );
        },

        comparator: function( beer ) {
            if ( this._orderType === "abv" ) {
                return this._sortDirection * parseInt( beer.attributes.abv );
            } else if ( this._orderType === "name" ) {
                return beer.attributes.name;
            } else {
                return beer.attributes.name;
            }
        },

        filterLocation: function( location ) {
            var matchingLocations = _.filter( this.models, function( beer ) {
                return location.toLowerCase() == beer.attributes.location.toLowerCase()
            });
            this.filtered.reset( matchingLocations );
            return this.filtered;
        },

        sortAbv: function() {
            if ( this._orderType = 'abv' ) {
                this._sortDirection = this._sortDirection * -1;
            } else {
                this._orderType = 'abv';
            }
            this.sort();
        },

        sortAlpha: function() {
            this.resetSort();
            this._orderType = 'name';
            this.sort();
        },

        resetSort: function() {
            this._sortDirection = 1;
        },

        _sortDirection: '1',
        _orderType: 'id'

    });

})();
