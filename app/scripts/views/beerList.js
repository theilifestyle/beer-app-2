/*global beerzu2, Backbone, JST*/

beerzu2.Views = beerzu2.Views || {};

(function() {
    'use strict';

    beerzu2.Views.BeerView = Backbone.View.extend({

        el: '#item-cont',

        template: JST['app/scripts/templates/beer.ejs'],

        initialize: function( a ) {
            this.listenTo(this.collection, 'reset', this.render);
            this.listenTo(this.collection, 'sort', this.render);
        },

        render: function() {
            $(this.el).html(this.template());
            return this;
        }

    });

})();
