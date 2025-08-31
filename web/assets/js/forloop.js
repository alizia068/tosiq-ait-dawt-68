// var skills = ["HTML", "CSS", "Bootstrap", "JS"];
// console.table(skills);
var skills = [
    { name: "HTML", level: "Expert" },
    { name: "CSS", level: "Expert" },
    { name: "Bootstrap", level: "Begginer" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "NodeJs", level: "Expert" },
];
// console.table(skills);
var i;
var skillList = document.getElementById("skills-data")
for(i = 0; i < skills.length; i++){
    // console.log(skills[i].name)
    skillList.innerHTML += `
    <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                <h3 class="card-title">
                `+ (i+1) + "- " + skills[i].name +`
                </h3>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                    `+ skills[i].level +`
                </h6>
                </div>
            </div>
            </div>
    `

}