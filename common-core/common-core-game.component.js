"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("commonCoreGame").component("commonCoreGame", {
  templateUrl: "common-core/common-core-game.template.html",
  controller: [
    "$http",
    function PhoneListController($http) {
      var self = this;
    },
  ],
});
