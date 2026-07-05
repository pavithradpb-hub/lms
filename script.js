// ===============================
// Learning Management System
// script.js
// ===============================

// Show Selected Section
function showSection(sectionId) {

    // Hide all sections
    const sections = document.querySelectorAll(".content");

    sections.forEach(section => {
        section.classList.remove("active-section");
    });

    // Show selected section
    document.getElementById(sectionId).classList.add("active-section");

    // Highlight active menu
    const menuItems = document.querySelectorAll(".sidebar ul li");

    menuItems.forEach(item => {
        item.classList.remove("active");
    });

    event.target.classList.add("active");
}


// ===============================
// Dark Mode
// ===============================

function toggleTheme() {

    document.body.classList.toggle("dark");

    const btn = document.getElementById("themeBtn");

    if(document.body.classList.contains("dark")){
        btn.innerHTML = "☀️";
    }
    else{
        btn.innerHTML = "🌙";
    }

}


// ===============================
// Search Courses
// ===============================

function searchCourse(){

    let input = document
        .getElementById("search")
        .value
        .toLowerCase();

    let courses = document.querySelectorAll(".course");

    courses.forEach(course => {

        let title = course
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if(title.includes(input)){
            course.style.display = "block";
        }
        else{
            course.style.display = "none";
        }

    });

}


// ===============================
// Continue Button
// ===============================

const buttons = document.querySelectorAll(".course button");

buttons.forEach(button => {

    button.addEventListener("click", function(){

        const courseName =
            this.parentElement.querySelector("h3").innerText;

        alert("Opening course: " + courseName);

    });

});


// ===============================
// Dashboard Welcome Message
// ===============================

window.onload = function(){

    console.log("Learning Management System Loaded Successfully.");

};


// ===============================
// Simple Assignment Status Color
// ===============================

const rows = document.querySelectorAll("tbody tr");

rows.forEach(row => {

    const status = row.cells[3];

    if(status.innerText === "Pending"){
        status.style.color = "red";
        status.style.fontWeight = "600";
    }

    if(status.innerText === "In Progress"){
        status.style.color = "orange";
        status.style.fontWeight = "600";
    }

});


// ===============================
// Progress Bar Animation
// ===============================

const bars = document.querySelectorAll(".progress-bar span");

bars.forEach(bar => {

    const width = bar.style.width;

    bar.style.width = "0";

    setTimeout(() => {
        bar.style.width = width;
        bar.style.transition = "1s";
    },300);

});


// ===============================
// Course Counter
// ===============================

const totalCourses = document.querySelectorAll(".course").length;

document.getElementById("courseCount").innerText = totalCourses;


// ===============================
// End of Script
// ===============================