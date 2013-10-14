/*global beerzu2, Backbone, JST*/

beerzu2.Views = beerzu2.Views || {};

(function() {
    'use strict';

    beerzu2.Views.BeerView = Backbone.View.extend({

        el: '#item-cont',

        template: JST['app/scripts/templates/beer.ejs'],

        attributes: {
            "data-fun": "yay",
            "data-nofun": "noayyay"
        },

        initialize: function( a ) {
            this.listenTo(this.collection, 'reset', this.render);
        },

        render: function() {
            $(this.el).html(this.template('hello'));
            return this;
        }

    });

})();
