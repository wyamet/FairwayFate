// app.js

// Function to show the login form
function showLoginForm() {
  document.getElementById("bag-list").style.display = "none";
  document.getElementById("wheel-section").style.display = "none";
}

// Function to show the signup form
function showSignupForm() {
  document.getElementById("bag-list").style.display = "none";
  document.getElementById("wheel-section").style.display = "none";
}

// Function to continue without login
function continueWithoutLogin() {
  document.getElementById("user-forms").style.display = "none";
  document.getElementById("hero").style.display = "none";
  document.getElementById("bag-list").style.display = "block";
  loadBags();
}

// Handle the club selection form submission
document
  .getElementById("club-selection-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Retrieve form data, validate and save it, then show the wheel
    const selectedClubs = retrieveSelectedClubsFromForm();
    if (validateClubs(selectedClubs)) {
      saveSelectedClubs(selectedClubs);
      document.getElementById("bag-selection").style.display = "none";
      document.getElementById("wheel-section").style.display = "block";
    } else {
      alert("Please select the proper number of clubs.");
    }
  });

// Function to retrieve selected clubs from the form
function retrieveSelectedClubsFromForm() {
  // Implement logic to retrieve and return selected clubs from the form
}

// Function to validate selected clubs
function validateClubs(clubs) {
  // Implement validation logic
  return true; // Example: Always return true for now
}

// Function to save selected clubs
function saveSelectedClubs(clubs) {
  // Implement logic to save selected clubs
}

// Function to be called after successful login or signup
function onSuccessfulLoginOrSignup() {
  document.getElementById("user-forms").style.display = "none";
  document.getElementById("hero").style.display = "none";
  document.getElementById("bag-list").style.display = "block";
  loadBags();
}

// Function to load and display bags
function loadBags() {
  // Example: Add static bags for now
  const bagsContainer = document.getElementById("bags");
  bagsContainer.innerHTML = ""; // Clear existing content
  for (let i = 1; i <= 5; i++) {
    const bagDiv = document.createElement("div");
    bagDiv.innerHTML = `Bag ${i}`;
    bagsContainer.appendChild(bagDiv);
  }
}

// Function to show the spin wheel section
function selectBagForSpin() {
  document.getElementById("bag-list").style.display = "none";
  document.getElementById("wheel-section").style.display = "block";
  // Additional logic to set up the spin wheel with the selected bag's clubs
}

// Login form submission handling
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Example: Print username and password to the console
    // Note: Replace this with actual server communication logic
    onSuccessfulLoginOrSignup(); // Simulate successful login
  });

// Signup form submission handling
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Example: Print signup data to the console
    // Note: Replace this with actual server communication logic
    onSuccessfulLoginOrSignup(); // Simulate successful signup
  });
