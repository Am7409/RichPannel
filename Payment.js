document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("payment-form");
  
    paymentForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // Add your payment processing logic here
      alert("Payment processing...");
    });
  });
  