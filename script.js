function trafficLights(n) {
    let localVar = n;
    return function () {
        return localVar;
    };
}

let red = trafficLights("<div id='red_light'></div>");
let yellow = trafficLights("<div id='yellow_light'></div>");
let green = trafficLights("<div id='green_light'></div>");

document.write(red());
console.log("Красный");
document.write(yellow());
console.log("Жёлтый");
document.write(green());
console.log("Зелёный");
console.log(trafficLights);
// alert(red());
// alert(yellow());
// alert(green());