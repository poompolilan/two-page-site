// Change background color (using array & loop)
function changeBackground() {
    let colors = ["#f8f9fa", "lightyellow", "lightpink", "lightgreen", "lightblue"];
    for (let c of colors) {
        console.log("Available color:", c); // loop example
    }
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}

// Form validation & thank-you message
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    if (name.value.trim() && email.value.trim() && message.value.trim()) {
        document.getElementById("thankYou").style.display = "block";
    } else {
        alert("Please fill all fields!");
    }
});



