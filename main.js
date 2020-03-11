// Java Script 
'use strict'

//Event Listener

document.getElementById('Madlib').addEventListener('click', displayMessage)

// Evnet funciton

function displayMessage() {
    //input
    let one = document.getElementById('Verb-ing').value;
    let two = document.getElementById('Nouns').value;
    let three = document.getElementById('Adjective').value;
    let four = document.getElementById('Verb-now').value;
    let five = document.getElementById('Noun').value;


    //build 
    let message = '"There are too many ' + one + ' ' +  two  + ' on this ' + three + ' airplane!", I screamed. "sombody has to ' + four + ' on the ' + five  + ' to solve this problem!"' 

    //output
    document.getElementById('Output').innerHTML = message;

}

