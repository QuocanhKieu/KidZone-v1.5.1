"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("home").component("home", {
  templateUrl: "home/home.template.html",
  controller: [
    "$http",
    function PhoneListController($http) {
      var self = this;
    },
  ],
});
