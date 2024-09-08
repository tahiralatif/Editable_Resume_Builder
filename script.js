var _a, _b;
// Add a new skill dynamically
(_a = document.getElementById("addSkillButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var skillsContainer = document.getElementById("skillsContainer");
    var newSkillInput = document.createElement("input");
    newSkillInput.type = "text";
    newSkillInput.name = "skills[]";
    newSkillInput.placeholder = "Enter a skill";
    newSkillInput.required = true;
    skillsContainer.appendChild(newSkillInput);
});
// Generate resume and make sections editable
(_b = document.getElementById("resumeForm")) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form refresh
    var formElement = this;
    var formData = new FormData(formElement);
    var resumePreview = document.getElementById("resumePreview");
    var firstName = formData.get("firstName");
    var lastName = formData.get("lastName");
    var email = formData.get("email");
    var education = formData.get("education");
    var experience = formData.get("experience");
    var skills = formData.getAll("skills[]").join(", ");
    resumePreview.innerHTML = "\n        <h2>Resume Preview</h2>\n        <p><strong>First Name:</strong> <span class=\"editable\" contenteditable=\"true\">".concat(firstName, "</span></p>\n        <p><strong>Last Name:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(lastName, "</span></p>\n        <p><strong>Email:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Education:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(education, "</span></p>\n        <p><strong>Work Experience:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(experience, "</span></p>\n        <p><strong>Skills:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(skills, "</span></p>\n    ");
});
