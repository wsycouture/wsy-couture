// Set last modified date
document.getElementById('lastModifiedDate').textContent = document.lastModified;

// Set current date
const currentDate = new Date().toLocaleDateString();
document.getElementById('currentDate').textContent = currentDate;

