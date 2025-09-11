document.getElementById("searchBar").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // stop form submission (if inside a form)
    const query = this.value.toLowerCase().trim();

    if (!query) return; // skip empty searches

    // Get all headings
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

    let found = false;
    headings.forEach(heading => {
      // Reset previous highlights immediately
      heading.style.backgroundColor = "";

      if (heading.textContent.toLowerCase().includes(query) && !found) {
        found = true;
        heading.scrollIntoView({ behavior: "smooth", block: "center" });
        heading.style.backgroundColor = "rgba(252, 252, 83, 0.3)"; // transparent yellow

        // Remove highlight after 3 seconds
        setTimeout(() => {
          heading.style.backgroundColor = "";
        }, 1000);
      }
    });

    if (!found) {
      alert("No headings found with that text.");
    }
  }
});

// Clear the search bar when user clicks/focuses on it
searchBar.addEventListener("focus", function() {
  this.value = "";
});
