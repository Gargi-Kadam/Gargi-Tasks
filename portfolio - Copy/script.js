// Dark mode toggle functionality
const modeToggle = document.getElementById('mode-toggle');

// Check if the user prefers dark mode
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply dark mode based on user preference or previous setting
if (localStorage.getItem('theme') === 'dark' || (prefersDarkMode && localStorage.getItem('theme') !== 'light')) {
  document.body.classList.add('dark-mode');
}

// Add event listener to toggle between dark and light mode
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Save the current theme preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
