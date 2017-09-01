var temp = null;
document.getElementById("svg2").addEventListener("click", function (event) {
    if (event.target.id == "svg2") {
        return;
    }
    if (temp != null) {
        temp.style.fill = "rgb(192,192,192)";
    }
    temp = document.getElementById(event.target.id);
    temp.style.fill = "rgb(255,0,0)";
    var id = temp.id;
    if(id.includes('-')){
         id = id.split('-')[0];
    }
    getCountry(id);

});

var app = document.getElementById("app");
var url = "http://restcountries.eu/rest/v1/alpha?codes=";
var conf = {method: "get"};

function getCountry(id) {
    app.innerHTML = "";
    var promise = fetch(url + id, conf);
    promise.then(function (response) {
        return response.json();
    }).then(function (json) {
        for (var key in json)
            app.innerText += "Country: " + json[key].name + "\n"
                    + "Population: " + json[key].population + "\n" +
                    "Area: " + json[key].area + "\n" +
                    "Borders: " + json[key].borders;
    });
};
