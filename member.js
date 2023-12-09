function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var about = document.getElementById("about");
    var contact = document.getElementById("contact");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");
    var aboutBtn = document.getElementById("aboutBtn");
    var contactBtn = document.getElementById("contactBtn");
    member.style.display = "block";
    skills.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    memberBtn.style.backgroundColor = "#2c3e50";
    skillsBtn.style.backgroundColor = "#34495e";
    aboutBtn.style.backgroundColor = "#34495e";
    contactBtn.style.backgroundColor = "#34495e";
}