let food = ['Apple', 'Spinach', 'Cookie', 'Pumpkin'];

/**
 * Aufgabe 1 
 */
function greet(name) {
    console.log(`Hallo ${name}`);
}


/**
 * Aufgabe 2
 */
function multiply(number1, number2) {
    let result = number1 * number2;
    console.log(`Das Ergebnis ist ${result}`);
}


/**
 * Aufgabe 3
 */
function contactInfo(name, age) {
    console.log(`Mein Name ist ${name}`);

    showMyAge(age);
}
function showMyAge(age) {
    console.log(`Ich bin ${age} Jahre alt.`);
}


/***
Aufgabe 4
 ***/
function eatCookie(i) {
    let item = food[2]; // Lädt das Element an der Stelle "i" aus dem Array
    if (item == 'Cookie') {
        console.log('Om nom nom');
    } else {
        console.log('I don\'t like ' + item);
    }
}



/**
 * Aufgabe 5
 */
function pythagoras(a, b, container) {
    let value = a * a + b * b; // Caclulates a² + b²
    let result = Math.sqrt(value).toFixed(2); // Calculates the root (dt: Wurzel) of the variable value
    document.getElementById(container).innerHTML = result;
}


/**
 * Aufgabe 6
 */
function calculateDistance(speed, distance, container) {
    let value = speed * distance;
    document.getElementById(container).innerText = value + ' km';
}

    // TODO: Diese Funktion muss (inklusive Funktionsparameter) implementiert werden. 
    // Orientiere dich an der Funktion aus Aufgabe 5