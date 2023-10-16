"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("subscribeJoin").component("subscribeJoin", {
  templateUrl: "subscribe-join/subscribe-join.template.html",
  controller: [
    "$http",
    function subscribeJoinControlelr($http) {
      var self = this;
      window.scrollTo(0, 0);
      (self.firstName = ""),
        (self.lastName = ""),
        (self.email = ""),
        (self.emailConfirm = ""),
        (self.password = ""),
        (self.passwordConfirm = ""),
        (self.emailFlag = false),
        // Function to register a new user
        (self.registerUser = function (username, email, password) {
          // Check if the email is already in use
          const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
          const userExists = existingUsers.some((user) => user.email === email);

          if (userExists) {
            return "Email already in use";
            self.emailFlag = true;
          }

          // Create a new user object
          const newUser = {
            username: username,
            email: email,
            password: password, // You should hash and salt the password in a real application
          };

          // Store the user data in localStorage
          existingUsers.push(newUser);
          localStorage.setItem("users", JSON.stringify(existingUsers));

          return "Registration successful";
        });

      $(".the_form input").on("input", function (event) {
        self.emailFlag = false;
      });
      $("#formFree").on("submit", function (event) {
        self.emailFlag = false;
        // event.preventDefault()
        // event.stopPropagation()
        self.registerUser(
          self.firstName + " " + self.lastName,
          self.email,
          self.password
        );

        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        console.log(storedUsers);
      });
      var toastLiveExample = document.getElementById('liveToast')
      var btnToSub = document.getElementById('btnToSub')
      if (btnToSub) {
        btnToSub.addEventListener('click', () => {
          const toast = new bootstrap.Toast(toastLiveExample)
      
          toast.show()
        })
      }
    },
  ],
});
