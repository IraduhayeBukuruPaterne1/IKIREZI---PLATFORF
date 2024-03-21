function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

function changeLanguage() {
    // Your existing language change logic here
}

function storeRegistrationSection(sectionId) {
    // Store the registration section in a cookie or local storage
    document.cookie = `registrationSection=${sectionId}`;
    
    // Redirect to the application form page for the registered section
    window.location.href = `#${sectionId}`;
}
