/* Navigation bar and dropdown */

function showDropdown() {
    const dropdown = document.querySelector("#dropdown-menu")
    dropdown.style.display = 'flex'
}

function hideDropdown() {
    const dropdown = document.querySelector("#dropdown-menu")
    dropdown.style.display = 'none'
}

/* Current page underline */

document.addEventListener("DOMContentLoaded", function() {
    // Get the current page name
    var currentPage = window.location.pathname.split("/").pop();
    currentPage += ".html"

    // Get the navigation bar names to check against
    var navLinks = document.querySelectorAll("#navbar-menu a, #dropdown-menu a");
    
    // Iterate through each naviagation option
    navLinks.forEach(function(link) {
        // If that option matches the current page apply that style class to it
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("current-page"); // Add class to current page link
        }
    });
});

/* Typing animation */

document.addEventListener('DOMContentLoaded', function(event) {
    var suffixes = ["tomhorsey.com", "index", "index.html"]
    if (window.location.pathname.endsWithAny(str, suffixes)) {
        // Types out text, calling self until the text is finished
        function typingAnimation(text, i, fnCallback) {
            // Check if there are characters left to type
            if (i < (text.length)) {
                // Add next character to h1 tag
                document.getElementById("typing-animation").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
                // Wait then call self for next character
                setTimeout(function() {
                    typingAnimation(text, i + 1, fnCallback)
                }, 50);
            } 
        }
        // Define string to be typed out
        var dataText = "Hello! I'm Tom, a Software Developer from Brisbane.";
        // Start the typing animation
        typingAnimation(dataText, 0, null);
    }
});

/* Theme switch */

// Sets theme based on user preference or saved preference
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // Set slider position based on saved preference
    updateSliderPosition(theme);
}

// Updates the slider position based preference
function updateSliderPosition(theme) {
    toggleSwitch.checked = theme === 'dark';
}

// Check if there's a saved preference in localStorage
const savedTheme = localStorage.getItem('theme');

// Toggle switch functionality
const toggleSwitch = document.getElementById('colorSchemeToggle');

if (savedTheme) {
    // Apply the saved preference
    setTheme(savedTheme);
} else {
    // If no preference is saved, check user's preferred color scheme
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
}

toggleSwitch.addEventListener('change', function(e) {
    if (this.checked) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
});