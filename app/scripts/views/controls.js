/*global beerzu2, Backbone, JST*/

beerzu2.Views = beerzu2.Views || {};

(function () {
    'use strict';

    beerzu2.Views.ControlsView = Backbone.View.extend({

        el: '#controls',

        template: JST['app/scripts/templates/controls.ejs'],

        initialize: function() {
            this.render();
            this.events;
        },

        render: function() {
            $(this.el).html(this.template());
        },

        events: {
            'click #nav--name'           : 'sortAlpha',
            'click #nav--abv'            : 'sortAbv',
            'click #nav--locationAbbrev' : 'pickLocation',
            'click #nav--style'          : 'filterStyles',
            'click #nav--about'          : 'showInfo'

        },

        sortAbv: function() {
            this.collection.sortAbv();
        },

        sortAlpha: function() {
            this.collection.sortAlpha();
        }

    });

})();
