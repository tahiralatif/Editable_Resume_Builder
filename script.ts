// Add a new skill dynamically
document.getElementById("addSkillButton")?.addEventListener("click", function () {
    const skillsContainer = document.getElementById("skillsContainer") as HTMLDivElement;
    const newSkillInput = document.createElement("input");
    newSkillInput.type = "text";
    newSkillInput.name = "skills[]";
    newSkillInput.placeholder = "Enter a skill";
    newSkillInput.required = true;
    skillsContainer.appendChild(newSkillInput);
});

// Generate resume and make sections editable
document.getElementById("resumeForm")?.addEventListener("submit", function (event: Event) {
    event.preventDefault(); // Prevent form refresh

    const formElement = this as HTMLFormElement;
    const formData = new FormData(formElement);
    const resumePreview = document.getElementById("resumePreview") as HTMLDivElement;

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const education = formData.get("education") as string;
    const experience = formData.get("experience") as string;
    const skills = formData.getAll("skills[]").join(", ");

    resumePreview.innerHTML = `
        <h2>Resume Preview</h2>
        <p><strong>First Name:</strong> <span class="editable" contenteditable="true">${firstName}</span></p>
        <p><strong>Last Name:</strong> <span class="editable" contenteditable="true">${lastName}</span></p>
        <p><strong>Email:</strong> <span class="editable" contenteditable="true">${email}</span></p>
        <p><strong>Education:</strong> <span class="editable" contenteditable="true">${education}</span></p>
        <p><strong>Work Experience:</strong> <span class="editable" contenteditable="true">${experience}</span></p>
        <p><strong>Skills:</strong> <span class="editable" contenteditable="true">${skills}</span></p>
    `;
});
