"use strict";

// Define the `phonecatApp` module
angular
  .module("kidZone", [
    "ngRoute",
    "ngAnimate",
    "commonCoreStandard",
    "commonCoreGame",
    "commonCorePrintable",
    "home",
    "contactUs",
    "help",
    "parentTeacher",
    "allGamesTab",
    "abcsTab",
    "gameDetail",
  ])
  .run([
    "$rootScope",
    "$route",
    "$window",
    "$location",
    function ($rootScope, $route, $window, $location) {
      window.addEventListener("load", function () {
        $(".curtain-loading").fadeOut();
        $(".loader").fadeOut();
        var body = document.body;
        body.classList.add("fade-in"); // Hiển thị trang web dần dần

        // $rootScope.$on("$routeChangeStart", function (event, next, current) {
        //   // Show the loading curtain when a route change starts
        //   var body = document.body;
        //   // body.classList.remove("fade-in");
        //   $(".curtain-loading").show();
        //   $(".loader").show();
        // });
        var helpVisitedCount = 0;
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
          // Show the loading curtain when a route change starts
          var body = document.body;
          // body.classList.remove("fade-in");

          // var conditionalUrl = "/home"; // Define your conditional URL here
          var noLoadingUrls = [
            "/commonCoreStandard",
            "/commonCoreGame",
            "/commonCorePrintable",
          ];

          if(current.$$route && current.$$route.originalPath === "/help" && next.$$route.originalPath ==="/help") return;

          if(current.$$route && current.$$route.originalPath.includes("commonCore") && next.$$route.originalPath.includes("commonCore")) return;

          $(".curtain-loading").show();
          $(".loader").show();

          // Check if the next route's path matches your conditional URL
          if (
            next.$$route 
            &&
            noLoadingUrls.includes(next.$$route.originalPath)
          ) {
            // return with no page loading
            return;
          } else {


          }
        });

        $rootScope.$on("$routeChangeSuccess", function () {
          var body = document.body;

          $(".curtain-loading").fadeOut(1000);
          $(".loader").fadeOut(700);
          body.classList.add("fade-in");
        });
        var backToTopButton = document.getElementById("back-to-top");
        window.onscroll = function () {
          
          console.log(window.scrollY);
          if (window.scrollY > 500) {
            // Nếu vị trí cuộn vượt quá 200px, thêm lớp 'show'
            backToTopButton.classList.add("show");
          } else {
            // Nếu không, loại bỏ lớp 'show'
            backToTopButton.classList.remove("show");
          }
        };
        $rootScope.toTop = function () {
          window.scrollTo({
            top: 0,
            behavior: 'smooth' // This adds smooth scrolling animation
        });
        }
        
      });
    },
  ]);
