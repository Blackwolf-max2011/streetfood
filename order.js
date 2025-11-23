document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent normal form submission

    // Show success message
    const orderSummary = document.getElementById('orderSummary');
    orderSummary.textContent = "✅ Success! Your order has been placed.";
    orderSummary.classList.remove('hidden');

    // Optional: Reset the form
    document.getElementById('orderForm').reset();
});




const form = document.getElementById('orderForm');
const orderSummary = document.getElementById('orderSummary');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    emailjs.sendForm('service_xbgjk4b', 'template_eudg3fa', this)
        .then(() => {
            orderSummary.textContent = "✅ Success! Your order has been placed.";
            orderSummary.classList.remove('hidden');
            form.reset();
        }, (err) => {
            alert("❌ Error sending order. Check your IDs and Public Key.");
            console.error(err);
        });
});