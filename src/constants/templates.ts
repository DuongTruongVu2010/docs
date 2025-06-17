export const templates = [
    {
        id: "blank", 
        lable: "Blank Document", 
        imageUrl: "/blank-document.svg",
        initialContent: ""
    },
    {
        id: "software-proposal",
        lable: "Software development proposal", 
        imageUrl: "/software-proposal.svg",
        initialContent: `
            <h1>Software Development Proposal</h1>

            <h2>Project Overview</h2>
            <p>Brief description of the proposed software development project.</p>

            <h2>Scope of Work</h2>
            <p>Detailed breakdown of project deliverables and requirements.</p>

            <h2>Timeline</h2>
            <p>Project milestones and delivery schedule.</p>

            <h2>Budget</h2>
            <p>Cost breakdown and payment terms.</p>

        `,
    },
    {
        id: "project-proposal",
        label: "Project Proposal",
        imageUrl: "/project-proposal.svg",
        initialContent: `
            <h1>Project Proposal</h1>
    
            <h2>Introduction</h2>
            <p>Brief overview of the project, including background and goals.</p>
    
            <h2>Objectives</h2>
            <p>Clear and measurable project objectives.</p>
    
            <h2>Methodology</h2>
            <p>Approach and methods used to achieve objectives.</p>
    
            <h2>Deliverables</h2>
            <p>List of tangible outcomes and expected results.</p>
    
            <h2>Conclusion</h2>
            <p>Summary and final remarks supporting the proposal.</p>
        `,
    },
    {
        id: "business-letter",
        label: "Business Letter",
        imageUrl: "/business-letter.svg",
        initialContent: `
            <h1>Business Letter</h1>
    
            <p>[Your Name]</p>
            <p>[Your Address]</p>
            <p>[City, State ZIP Code]</p>
            <p>[Email Address]</p>
            <p>[Phone Number]</p>
    
            <p>[Date]</p>
    
            <p>[Recipient Name]</p>
            <p>[Company Name]</p>
            <p>[Address]</p>
    
            <h2>Subject: [Subject of the Letter]</h2>
    
            <p>Dear [Recipient Name],</p>
    
            <p>[Body of the letter detailing your business purpose]</p>
    
            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `,
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg",
        initialContent: `
            <h1>[Your Full Name]</h1>
            <p>Email: [your.email@example.com] | Phone: [123-456-7890]</p>
            <p>LinkedIn: [linkedin.com/in/yourprofile]</p>
    
            <h2>Professional Summary</h2>
            <p>Brief summary highlighting experience, skills, and career goals.</p>
    
            <h2>Work Experience</h2>
            <p><strong>[Job Title]</strong> – [Company Name], [Location]</p>
            <p>[Start Date] – [End Date]</p>
            <ul>
                <li>Responsibility 1</li>
                <li>Responsibility 2</li>
            </ul>
    
            <h2>Education</h2>
            <p><strong>[Degree]</strong> – [Institution Name], [Year]</p>
    
            <h2>Skills</h2>
            <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
            </ul>
        `,
    },
    {
        id: "cover-letter",
        label: "Cover Letter",
        imageUrl: "/cover-letter.svg",
        initialContent: `
            <h1>Cover Letter</h1>
    
            <p>[Your Name]</p>
            <p>[Your Address]</p>
            <p>[Email Address]</p>
            <p>[Phone Number]</p>
            <p>[Date]</p>
    
            <p>[Hiring Manager's Name]</p>
            <p>[Company Name]</p>
            <p>[Company Address]</p>
    
            <p>Dear [Hiring Manager’s Name],</p>
    
            <p>I am writing to apply for the [Job Title] position at [Company Name]. [Opening paragraph introducing yourself and why you’re interested.]</p>
    
            <p>[Middle paragraph(s) highlighting your relevant experience, achievements, and how you fit the role.]</p>
    
            <p>Thank you for considering my application. I look forward to the opportunity to contribute to [Company Name].</p>
    
            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `,
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: `
            <h1>Letter</h1>
    
            <p>[Your Name]</p>
            <p>[Your Address]</p>
            <p>[City, State ZIP Code]</p>
            <p>[Email Address]</p>
            <p>[Phone Number]</p>
            <p>[Date]</p>
    
            <p>[Recipient Name]</p>
            <p>[Recipient Address]</p>
    
            <p>Dear [Recipient Name],</p>
    
            <p>[Body of the letter]</p>
    
            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `,
    }    

]
