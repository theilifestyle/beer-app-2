/*global beerzu2, $*/


window.beerzu2 = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {

        var beer = new beerzu2.Models.BeerModel();

        var beers = new beerzu2.Collections.BeerCollection({
            model: beer
        });
        beers.fetch({
            reset: true
        });

        var beerList = new beerzu2.Views.BeerView({
            collection: beers
        });

        var controls = new beerzu2.Views.ControlsView({
            collection: beers
        });

    }
};

$(document).ready(function () {
    'use strict';
    beerzu2.init();

});
