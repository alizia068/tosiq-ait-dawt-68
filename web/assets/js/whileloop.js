// var languagess = ["HTML", "CSS", "Bootstrap", "JS"];
// console.table(languagess);
var languages = [
    { name: "Arabic", level: "Expert" },
    { name: "Urdu", level: "Expert" },
    { name: "English", level: "Begginer" },
    { name: "French", level: "Intermediate" },
    { name: "Italian", level: "Intermediate" },
    { name: "Greece", level: "Expert" },
];
// console.table(languages);
var languagesList = document.getElementById("languages-data")
var i = 0;
while(i < languages.length){
    // console.log(languages[i].name)
    languagesList.innerHTML += `
    <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                <h3 class="card-title">
                `+ (i+1) + "- " + languages[i].name +`
                </h3>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                    `+ languages[i].level +`
                </h6>
                </div>
            </div>
            </div>
    `;

    i++;

}