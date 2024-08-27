document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simple validation
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Display success message
    alert("Thank you for your message!");

    // Optionally, reset the form
    form.reset();
  });
});

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetID = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetID);
    window.scrollTo({
      top: targetSection.offsetTop - 20,
      behavior: "smooth",
    });
  });
});
