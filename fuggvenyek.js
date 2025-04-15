function add(a, b) {
    return a + b;
    }
    console.log(add(3, 2));

let add2 = function(a, b) {
    return a + b;
    }
    console.log(add(3, 2));

//Arrow function
let add3 = (a, b) => a + b;
console.log(add(5, 3));
let udv = () => "Hello!";
console.log(udv());

//Elemér
(function() {

    let nev = prompt("Kérem a nevét: ", "Csabi") ,
    udv = function() {
    return "Szia! A neved:" + nev + "!";
    }
    console.log(udv());
    }()); 

//getelementbyid
