// Animate skill bars when section comes into view
function animateSkillBars() {
  const bars = document.querySelectorAll('.bar-fill');
  bars.forEach(bar => {
    const level = bar.getAttribute('data-level');
    bar.style.height = level + '%';
  });
}

// Scroll to projects function
function scrollToProjects() {
  const projectsSection = document.getElementById('projects');
  projectsSection.scrollIntoView({ behavior: 'smooth' });
  
  // Add animation class when scrolled to
  setTimeout(() => {
    projectsSection.classList.add('visible');
  }, 300);
}

function scrollToContact() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Animate progress bars when the skills section comes into view
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill');
  progressBars.forEach(bar => {
    const level = bar.getAttribute('data-level');
    bar.style.width = level + '%';
  });
}

// Add intersection observers for animations
document.addEventListener('DOMContentLoaded', function () {
    const skillsSection = document.getElementById('skills');
    const projectsSection = document.getElementById('projects');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger animations for the skills section
          if (entry.target.id === 'skills') {
            animateProgressBars();
          }

          // Add the visible class for fade-in animations
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // Observe the skills and projects sections
    observer.observe(skillsSection);
    observer.observe(projectsSection);
  });


  // Function to toggle dark mode
  function toggleDarkMode() {
    const body = document.body;
    const toggleSwitch = document.getElementById('darkModeToggle');

    // Toggle the dark mode class on the body
    body.classList.toggle('dark-mode');

    // Save the user's preference in localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }

  // Add event listener to the toggle switch
  document.getElementById('darkModeToggle').addEventListener('change', toggleDarkMode);

  // Load the user's preference on page load
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const toggleSwitch = document.getElementById('darkModeToggle');

    // Apply the saved theme
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      toggleSwitch.checked = true; // Ensure the toggle switch reflects the saved state
    }
  });