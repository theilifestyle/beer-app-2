/*global beerzu2, $*/


window.beerzu2 = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {

        var m = new beerzu2.Models.BeerModel();

        var c = new beerzu2.Collections.BeerCollection();
        c.fetch({
            reset: true
        });

        var v = new beerzu2.Views.BeerView({
            collection: c
        });

    }
};

$(document).ready(function () {
    'use strict';
    beerzu2.init();

});
