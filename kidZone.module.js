"use strict";

// Define the `phonecatApp` module
angular
  .module("kidZone", [
    "ngRoute",
    "ngAnimate",
    "commonCoreStandard",
    "home",
    "contactUs",
    "help",
    "parentTeacher",
    "allGamesTab",
    "abcsTab",
    "gameDetail",
    "subscribeJoin",
    "premiumTab"
  ])
  .run([
    "$rootScope",
    "$route",
    "$window",
    "$location",
    function ($rootScope, $route, $window, $location) {
      $rootScope.email = "";
      $rootScope.password = "";

      console.log($rootScope.$loginFlag);
      window.addEventListener("load", function () {
        // $rootScope.$loginFlag = false;
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

          if (
            current.$$route &&
            current.$$route.originalPath === "/help" &&
            next.$$route.originalPath === "/help"
          )
            return;

          if (
            current.$$route &&
            current.$$route.originalPath.includes("commonCore") &&
            next.$$route.originalPath.includes("commonCore")
          )
            return;

          $(".curtain-loading").show();
          $(".loader").show();

          // Check if the next route's path matches your conditional URL
          if (
            next.$$route &&
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
          // console.log(window.scrollY);
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
            behavior: "smooth", // This adds smooth scrolling animation
          });
        };

        $rootScope.login = function (email, password) {
          const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

          // Find a user with the provided email
          const user = storedUsers.find((u) => u.email === email);

          if (user) {
            if (user.password === password) {
              // Password matches, so the login is successful
              console.log("Login successful. Welcome, " + user.username + "!");
              $('.mainLoginBtn').hide()
              $('.logout').css("display","block")
              $('.hnf-premium').hide()
              $('.premiumTab').css("display","block")
              localStorage.login = true;
              return true;
            } else {
              // Incorrect password
              console.log("Incorrect password. Please try again.");
            }
          } else {
            // User with the provided email doesn't exist
            console.log("User not found. Please register an account.");
          }

          return false;
        };
        $(".mainLoginBtn").on("click", function (event) {
          $rootScope.email = "";
          $rootScope.password = "";
          console.log("mainLoginClicked");
        });
        $("#loginForm").on("submit", function (event) {
          event.preventDefault();
          console.log("login");
          $rootScope.login($rootScope.email, $rootScope.password);
        });
        $(".logout").on("click", function (event) {
          $rootScope.$loginFlag = false;
          console.log($rootScope.$loginFlag);
          $('.mainLoginBtn').show()
          $('.logout').css("display","none")
          $('.hnf-premium').show()
          $('.premiumTab').css("display","none")
          localStorage.login = true;
        });
      });
    },
  ]);
