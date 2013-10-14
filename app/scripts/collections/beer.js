/*global beerzu2, Backbone*/

beerzu2.Collections = beerzu2.Collections || {};

(function () {
    'use strict';

    beerzu2.Collections.BeerCollection = Backbone.Collection.extend({

        model: beerzu2.Models.BeerModel,
        url: '/data/beers.json',

    });

})();
