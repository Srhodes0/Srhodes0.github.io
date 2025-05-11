
// Current date and time and display as alert
window.onload = function() {
  const now = new Date();
  alert("Welcome! Today's date is " + now.toLocaleDateString() + " and the time is " + now.toLocaleTimeString());
  countdown(5); // Start countdown when page loads
};

// Countdown Timer
let countdownTime = 10; // seconds
let discountClaimed = false;

window.onload = function() {
  // countdown and button
  const main = document.querySelector("main");
  const countdownBox = document.createElement("div");
  countdownBox.innerHTML = `
    <p id="countdown-message">⏳ Limited Time Offer: Click the button below within <span id="timer">${countdownTime}</span> seconds to get 5% off your order!</p>
    <button id="claim-btn">Claim 5% Discount</button>
  `;
  main.prepend(countdownBox);

  const timerDisplay = document.getElementById("timer");
  const claimBtn = document.getElementById("claim-btn");

  const interval = setInterval(() => {
    countdownTime--;
    timerDisplay.textContent = countdownTime;

    if (countdownTime <= 0) {
      clearInterval(interval);
      if (!discountClaimed) {
        document.getElementById("countdown-message").textContent = "⏱️ Offer expired. Please try again next time!";
        claimBtn.disabled = true;
        claimBtn.style.opacity = 0.6;
      }
    }
  }, 1000);

  claimBtn.addEventListener("click", () => {
    if (!discountClaimed && countdownTime > 0) {
      discountClaimed = true;
      alert("🎉 Congratulations! You just earned 5% off your cheesecake order.");
      claimBtn.disabled = true;
      claimBtn.style.opacity = 0.6;
      document.getElementById("countdown-message").textContent = "✅ Discount successfully applied to your order.";
    }
  });
};


// Math method 
let price = "29.99";
let taxRate = 0.07;
let total = parseFloat(price) + (parseFloat(price) * taxRate);
console.log("Total with tax: $" + total.toFixed(2));
