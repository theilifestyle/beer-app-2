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
            this.initSearch();
            this.eventBus.on("toggle:locations", this.showLocations);
            $('body').on('typeahead:selected', function( event, data, dataset ) {

            })
        },

        render: function() {
            this.$el.html(this.template());
        },

        events: {
            'click #nav--abv'            : 'sortAbv',
            'click #nav--location'       : 'showLocations',
            'click #nav--style'          : 'filterStyles',
            'click #nav--about'          : 'showInfo',
            'click #buttons-cont'        : 'scrollTop'
        },

        scrollTop: function() {
            window.setTimeout(function() {
                window.scrollTo(0,0)
            }, 300);
        },

        sortAbv: function() {
            this.collection.sortAbv();
        },

        showInfo: function() {
            $('#about-cont').slideToggle();
        },

        showLocations: function() {
            $('#locations-cont').toggleClass('is-active');
        },

        initSearch: function() {
            $('#item-search').typeahead({
                name: "name",
                prefetch: {
                    url: '/data/beers2.json',
                    ttl: 0,
                    filter: function( parsedResponse ) {
                        return parsedResponse
                    }
                },
                valueKey: "name",
                engine: Hogan,
                template: '<p>{{name}}</p>'
            });
        }

    });

})();
