const subscribeButtons = document.querySelectorAll('.subscribe-button');
subscribeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const plan = button.getAttribute('data-plan');
    alert(`Subscribing to ${plan} plan. Redirect to payment page.`);
    const targetHtml = button.getAttribute('data-href');
    window.location.href = targetHtml;
    // Implement payment redirection logic here (e.g., using Stripe).
  });
});