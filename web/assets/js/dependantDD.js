const cities = [
    {id: 1, country_id: 3, name: "Makka"},
    {id: 2, country_id: 1, name: "Lahore"},
    {id: 3, country_id: 2, name: "Los Angles"},
    {id: 4, country_id: 3, name: "Riyaz"},
    {id: 5, country_id: 2, name: "Mexico"},
    {id: 6, country_id: 3, name: "Madina"},
    {id: 7, country_id: 1, name: "Islamabad"},
];
function getSelected () {
    let countryId = document.getElementById("country-list").value;
    let cityList = document.getElementById("city-list");
    // console.log(countryId);
    cityList.innerHTML = "";
    cities.map((city) => {
        if (countryId == city.country_id) {
            cityList.innerHTML += `
            <option> ${city.name} </option>
            `
        }
    })
}


function chngBG(){
    let number = Math.floor(Math.random() * 999) + 100;
    document.body.style.backgroundColor = `#${number}`;
}

// print colors

function showColors(){
    let colorList = document.getElementById("colorlist");
    for (let i = 500; i < 600; i++) {
        let hex = i.toString(16).padStart(6, "0"); // convert  number to 6-digit hex
    colorList.innerHTML += 
        `<span style="background-color: #${hex}"></span>`;
    }
}