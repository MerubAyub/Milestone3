// get references to the form and display area
const Form = document.getElementById('resumeform') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// handle form submission
Form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); //prevent page reload

    //collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const linkedin = (document.getElementById('LinkedIn') as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLInputElement).value
    const skills = (document.getElementById('Skills') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value

    //generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Resume </b> </h2>
    <h3>Personal Information </h3>
    <p><b> Name: </b>${name}</p>
    <p><b> Phone: </b>${phone}</p>
    <p><b> Email: </b>${email}</p>
    <p><b> LinkedIn: </b>${linkedin}</p>

    <h3>Education</h3>
    <p><b> Education: </b>${education}</p>

    <h3> Skills</h3>
    <p><b> Skills: </b>${skills}</p>

    <h3>Experience</h3>
    <p><b> Experience: </b>${experience}}</p>
    
    `;

    //display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error("The resume display element is missing.");
    }

})