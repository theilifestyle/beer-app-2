/*global beerzu2, Backbone*/

beerzu2.Models = beerzu2.Models || {};

(function () {
    'use strict';

    beerzu2.Models.BeerModel = Backbone.Model.extend({

        defaults: {
            "name": "KRAUS-HIRSCHEN-TRUNK 22 RAUCHBIER",
            "type": "KELLERBIER",
            "location": "GERMANY",
            "abv": "5.5",
            "servingStyle": "RUBBER-CLAD GRAVITY KEG",
            "id": 0
        },

        initialize: function() {

        }

    });

    var beer = new beerzu2.Models.BeerModel();

})();
