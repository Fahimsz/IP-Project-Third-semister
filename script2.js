document.addEventListener("DOMContentLoaded", function () {
    // Select all department buttons
    const departmentButtons = document.querySelectorAll(".dept-btn");
    // Select all department sections
    const departments = document.querySelectorAll(".department");

    // Add event listener to each department button
    departmentButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Get the selected department ID from data attribute
            const selectedDept = this.getAttribute("data-dept");

            // Hide all departments
            departments.forEach(dept => {
                dept.style.display = "none";
            });

            // Show the selected department
            const selectedDepartment = document.getElementById(selectedDept);
            if (selectedDepartment) {
                selectedDepartment.style.display = "block";
            }
        });
    });
});
