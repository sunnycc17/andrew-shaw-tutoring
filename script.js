document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");
  const activeLink = document.querySelector(".fundraisers-active");

  links.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      activeLink.classList.add("!border-transparent"); // Hide Fundraisers border
      this.classList.add("!border-white"); // Show hovered border
    });

    link.addEventListener("mouseleave", function () {
      this.classList.remove("!border-white"); // Remove hovered border
      activeLink.classList.remove("!border-transparent"); // Restore Fundraisers border
    });
  });
});
