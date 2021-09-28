
var step = false;

function haveNoStep() {
    element = document.getElementById("windingStep");
    element.style.visibility = "visible";
    element.style.height = "auto";
    step = true;
}

function haveStep() {
    element = document.getElementById("windingStep");
    element.style.visibility = "hidden";
    element.style.height = 0;
    step = false;
}


function sensorFeedCalculation() {

    const springDiam = document.getElementById("springDiam");
    const diamTolerance = document.getElementById("diamTolerance");
    const numberOfCoils = document.getElementById("numberOfCoils");
 
    if (numberInputValidation(springDiam, diamTolerance, numberOfCoils)) {
        var sensorFeed = Math.floor(diamTolerance.value*2*Math.PI*numberOfCoils.value*0.80);
        if (sensorFeed > (springDiam.value*0.75)) {
            sensorFeed = Math.floor(springDiam.value*0.75);        
        }

        document.getElementById("sensorFeedResult").innerHTML = "Plage : " + sensorFeed + "mm";
        document.getElementById("heroResult").style.visibility = "visible";
    }
}

function resetSensorFeedCalculation() {   
}


/**
 * check the validity of numbers inputs.
 * call a function to inlight then if they value is 0.
 * @param  {[object]} Element [numbers inputs DOM elements]
 * @return {[bool]}     true : if all the param is valid number.
 * 
 */
function numberInputValidation(...inputs) {  
    var paramValidity = true;
    inputs.forEach(element => {
       if (!element.value || element.value == 0) {
           element.classList.add("is-danger");
           element.value="";
           element.placeholder='Entrer un nombre sup. à 0';
           paramValidity = false;
       } else {
        element.classList.remove("is-danger");
       }
    });

    return paramValidity;
}
