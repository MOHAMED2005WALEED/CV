// Placeholder for future interactivity
console.log("Website Loaded!");

// Data for Certifications (You can add more certificates here)
const certifications = [
    {
        title: "Certified Web Developer",
        description: "Completed an advanced course in Web Development with HTML, CSS, and JavaScript.",
        date: "March 2023"
    },
    {
        title: "Python Programming Mastery",
        description: "Achieved proficiency in Python with special focus on data structures and algorithms.",
        date: "July 2022"
    },
    {
        title: "Data Science with R",
        description: "Acquired knowledge in data analysis and statistical modeling using R.",
        date: "December 2021"
    }
];

// Function to generate certification cards dynamically
function displayCertifications(certifications) {
    const certificationsContainer = document.querySelector('.certifications');

    certifications.forEach(cert => {
        const card = document.createElement('div');
        card.classList.add('certification-card');

        card.innerHTML = `
            <div class="certification-title">${cert.title}</div>
            <div class="certification-description">${cert.description}</div>
            <div class="certification-date">${cert.date}</div>
        `;
        
        certificationsContainer.appendChild(card);
    });
}

// Call the function to display certifications when the page loads
window.onload = () => {
    displayCertifications(certifications);
};
