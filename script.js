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

// script to load the projects in the page

document.addEventListener('DOMContentLoaded', () => {
  const projectList = document.getElementById('project-list');

  // Fetch the projects from the JSON file
  fetch('projects.json')
      .then(response => response.json())
      .then(data => {
          // Loop through each project and create HTML elements
          data.forEach(project => {
              const projectItem = document.createElement('div');
              projectItem.className = 'project-item';

              // Optional image
              if (project.image) {
                  const img = document.createElement('img');
                  img.src = project.image;
                  img.alt = project.title;
                  img.className = 'project-image';
                  projectItem.appendChild(img);
              }

              const title = document.createElement('h3');
              title.textContent = project.title;

              const description = document.createElement('p');
              description.textContent = project.description;

              const link = document.createElement('a');
              link.href = project.link;
              link.textContent = 'View on GitHub';
              link.target = '_blank';

              // Append elements to the project item
              projectItem.appendChild(title);
              projectItem.appendChild(description);
              projectItem.appendChild(link);

              // Append the project item to the project list
              projectList.appendChild(projectItem);
          });
      })
      .catch(error => {
          console.error('Error loading projects:', error);
          projectList.innerHTML = '<p>Unable to load projects. Please try again later.</p>';
      });
});

