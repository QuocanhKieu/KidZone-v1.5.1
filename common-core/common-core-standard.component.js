"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("commonCoreStandard").component("commonCoreStandard", {
  templateUrl: "common-core/common-core-standard.template.html",
  controller: [
    "$http",
    function PhoneListController($http) {
      var self = this;
    },
  ],
});
