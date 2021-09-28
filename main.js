
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


