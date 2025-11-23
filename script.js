// Simple example animations for floating images
document.querySelectorAll('.float-img').forEach(img => {
    img.animate(
        [
            { transform: "translateY(10px)" },
            { transform: "translateY(-30px)" },
            { transform: "translateY(10px)" }
        ],
        {
            duration: 3000,
            iterations: Infinity
        }
    );
});


// Handle contact form submission
document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.querySelector(".form-status").textContent =
  
    "Message sent successfully!";
});

































