// function trafficLights(n) {
//     let localVar = n;
//     return function () {
//         return localVar;
//     };
// }

// let red = trafficLights("<div id='red_light'></div>");
// let yellow = trafficLights("<div id='yellow_light'></div>");
// let green = trafficLights("<div id='green_light'></div>");

// document.write(red());
// console.log("Красный");
// document.write(yellow());
// console.log("Жёлтый");
// document.write(green());
// console.log("Зелёный");
// console.log(trafficLights);
// // alert(red());
// // alert(yellow());
// // alert(green());

// function closure(n) {
//     let localVar = n;
//     return function () {
//         return localVar;
//     };
// }

// let one = closure(1); // передаем 1
// console.log(one);
// let x = one();
// console.log(x);
// let two = closure(2); // передаем 2
// x = two();
// console.log(x);

function initCounter(name) {
    let color = "green";
    let innerCounter = function () {
        // return ++counter;
        if (color == "green") {
            color = "red";
        }
        else if (color == "yellow") {
            color = "green";

        }
        // else if (color == "yellow") {
        //     color = "green";

        // }
        else {
            color = "yellow";
        }
        return name + " " + color;
    };
    return innerCounter;
}

let counter1 = initCounter("first"); // первый счетчик
console.log(counter1()); // 1
console.log(counter1());
console.log(counter1());
console.log(counter1());
// alert(counter1()); // 3

let counter2 = initCounter("second"); // второй счетчик 
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
 // 1 - второй счетчик независим от первого
// alert(counter()); // 4 - первый счетчик продолжает считать независимо от второго!
