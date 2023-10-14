"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("commonCorePrintable").component("commonCorePrintable", {
  templateUrl: "common-core/common-core-printable.template.html",
  controller: [
    "$http",
    function PhoneListController($http) {
      var self = this;
    },
  ],
});
