const form = document.getElementById('f1') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement


form.addEventListener('submit',(event: Event) =>{
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value
  const email = (document.getElementById("email") as HTMLInputElement).value
  const phone = (document.getElementById("phone") as HTMLInputElement).value
  const education = (document.getElementById("education") as HTMLInputElement).value
  const experience = (document.getElementById("experience") as HTMLInputElement).value
  const skills = (document.getElementById("skills") as HTMLInputElement).value

  const resumeHTML = `
  <h2><b>Editable Resume</b></h2>
  <h3>personal information</h3>
  <p><b>Name:</b><span contenteditable="true">${name}</span></p>
   <p><b>Email:</b><span contenteditable="true">${email}</span></p> 
   <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

  <h3>Educationn</h3>
  <p contenteditable="true"><b>NameEducation:</b>${education}</p>
 
   <h3>experience</h3>
  <p contenteditable="true"><b>Experience:</b>${experience}</p>
  
   <h3>Skills</h3>
  <p contenteditable="true"><b>Skills:</b>${skills}</p>
  `;

  if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
  }
  else{
    console.error("Something is missing");
  }
});

