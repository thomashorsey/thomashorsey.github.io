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
    var currentPage = window.location.pathname.split("/").pop();
    var navLinks = document.querySelectorAll("#navbar-menu a, #dropdown-menu a");

    navLinks.forEach(function(link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("current-page");
        }
    });
});

/* Typing animation */

document.addEventListener('DOMContentLoaded', function(event) {
    if (window.location.pathname.endsWith("index")) {
        function typingAnimation(text, i, fnCallback) {
            if (i < (text.length)) {
                document.getElementById("typing-animation").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
                setTimeout(function() {
                    typingAnimation(text, i + 1, fnCallback)
                }, 50);
            } 
        }
        var dataText = "Hello! I'm Tom, a Software Developer from Brisbane.";
        typingAnimation(dataText, 0, null);
    }
});

/* Theme switch */

// Sets theme based on user preference or saved preference
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
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