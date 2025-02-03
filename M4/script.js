var form = document.getElementById('f1');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeHTML = "\n  <h2><b>Editable Resume</b></h2>\n  <h3>personal information</h3>\n  <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n   <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p> \n   <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n  <h3>Educationn</h3>\n  <p contenteditable=\"true\"><b>NameEducation:</b>").concat(education, "</p>\n \n   <h3>experience</h3>\n  <p contenteditable=\"true\"><b>Experience:</b>").concat(experience, "</p>\n  \n   <h3>Skills</h3>\n  <p contenteditable=\"true\"><b>Skills:</b>").concat(skills, "</p>\n  ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("Something is missing");
    }
});
